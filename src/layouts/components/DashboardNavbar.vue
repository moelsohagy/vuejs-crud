<template>
  <header class="dashboard-navbar">
    <PreLoader v-if="isLoading" />

    <nav>
      <div class="navbar-start">
        <label class="menu-icon" @click="toggleSidebarStatus()">
          <i class="fa fa-bars"></i>
        </label>
        <div class="page-name">
          <img :src="require('@/assets/images/' + pageIcon)" />
          <h3>{{ pageName }}</h3>
        </div>
      </div>

      <div class="navbar-end">
        <div v-if="filterSheetStatus" class="navbar-icon" :title="$t('filter')">
          <img
            src="@/assets/images/filter.svg"
            @click="openBottomSheet(filterSheetName)"
          />
        </div>

        <div
          v-if="btnAddStatus"
          class="navbar-icon"
          :title="btnAddTitle || $t('add')"
        >
          <router-link v-if="btnAddLinkStatus" :to="{ name: btnAddName }">
            <img src="@/assets/images/plus.svg" />
          </router-link>
          <img
            v-else
            src="@/assets/images/plus.svg"
            @click="openBottomSheet(btnAddName)"
          />
        </div>

        <div class="user-icon" v-if="userPersonalData">
          <b-dropdown id="dropdown-user">
            <template #button-content>
              <img
                :src="employeeImage"
                :onerror="`this.src='${defaultImg}'`"
                alt="images"
              />
            </template>
            <div class="text-center">
              <img
                :src="employeeImage"
                :onerror="`this.src='${defaultImg}'`"
                alt="images"
                class="img-profile"
              />
              <b-dropdown-item>{{ userPersonalData.userNameCurrent }}</b-dropdown-item>
            </div>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item
              v-if="language == LANGUAGES.enUS"
              @click="setLanguage(LANGUAGES.arEG)"
            >
              <img src="@/assets/images/lang-ar.svg" />
              العربية
            </b-dropdown-item>
            <b-dropdown-item
              v-if="language == LANGUAGES.arEG"
              @click="setLanguage(LANGUAGES.enUS)"
            >
              <img src="@/assets/images/lang-en.svg" />
              English
            </b-dropdown-item>
            <b-dropdown-item v-b-modal.AppUserChangePassword>
              <img src="@/assets/images/changePassword.svg" />
              {{ $t("changePassword") }}
            </b-dropdown-item>
            <b-dropdown-item v-b-modal.UserLogOut>
              <img src="@/assets/images/logout.svg" />
              {{ $t("logout") }}
            </b-dropdown-item>
          </b-dropdown>
        </div>
      </div>
    </nav>

    <UserChangePassword id="AppUserChangePassword" v-on:logout="logout" />
    <UserLogOut v-on:logout="logout" />
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import PreLoader from "./../../components/general/PreLoader.vue";
import { LANGUAGES, BASE_URL } from "./../../utils/constants";
import { setLanguage, getLanguage, isDataExist } from "./../../utils/functions";
import DEFAULT_IMG from "./../../assets/images/user.jpg";
import UserChangePassword from "./../../components/users/UserChangePassword.vue";
import UserLogOut from "./../../components/users/UserLogOut.vue";
import generalMixin from "./../../utils/generalMixin";

export default {
  name: "DashboardNavbar",
  mixins: [generalMixin],
  components: {
    PreLoader,
    UserChangePassword,
    UserLogOut,
  },
  data() {
    return {
      language: getLanguage(),
      LANGUAGES,
      pageName: this.$t("homePage"),
      pageIcon: "homepage.svg",
      defaultImg: DEFAULT_IMG,
    };
  },
  props: {
    filterSheetStatus: {
      type: Boolean,
      default: false,
    },
    filterSheetName: {
      type: String,
      default: "",
    },

    btnAddStatus: {
      type: Boolean,
      default: false,
    },
    btnAddLinkStatus: {
      type: Boolean,
      default: false,
    },
    btnAddName: {
      type: String,
      default: "",
    },
    btnAddTitle: {
      type: String,
      default: "",
    },
  },
  methods: {
    ...mapActions(["toggleSidebarStatus"]),
    logout() {
      this.isLoading = true;
      this.$store.dispatch("logoutUser");
    },
    setLanguage(lang) {
      this.isLoading = true;
      setLanguage(lang);
    },
    getPageInfo() {
      this.pageName = this.$route.meta.pageName || this.$t("homePage");
      this.pageIcon = this.$route.meta.pageIcon || "homepage.svg";
    },
    isDataExist,
  },
  computed: {
    ...mapGetters([
      "userAuthorizeToken",
      "userPersonalData",
      "constantsListsData",
    ]),
    employeeImage: function () {
      return BASE_URL + this.userPersonalData.userImagePath;
    },

  },
  watch: {
    async $route() {
      this.getPageInfo();
    },
  },
  async created() {
    this.getPageInfo();
  },
};
</script>
