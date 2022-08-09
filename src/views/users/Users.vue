<template>
  <div class="">
    <DashboardNavbar
      :btnAddTitle="$t('Users.add')"
      :btnAddName="'UserAdd'"
      :btnAddStatus="true"
      :filterSheetName="'filterSheet'"
      :filterSheetStatus="true"
    />
    <PreLoader v-if="isLoading" />

    <div class="app-content pagination-with-content">
      <template v-if="hasData">
        <UserTable
          v-on:setUserData="
            users.user.fillData($event)
          "
          :usersData="users.usersData"
          :defaultImg="users.user.defaultImg"
          :filterData="users.filterData"
        />

        <UserInfo :user="users.user" />
        <UserDelete
          :user="users.user"
          v-on:refresh="getAllUsers()"
        />
      </template>
      <ExceptionWithImg
        v-if="exceptionMsg"
        :msg="exceptionMsg"
        :image="exceptionImg"
      />
      <CustomPagination
        v-if="hasData"
        :paginationData="users.filterData"
        v-on:changePagination="changePagination($event)"
      />
      <UserFilter
        :theFilterData="users.filterData"
        v-on:search="search($event)"
      />

      <UserAdd
        :user="users.user"
        v-on:refresh="getAllUsers()"
      />
      <UserUpdate
        :user="users.user"
        v-on:refresh="getAllUsers()"
      />
    </div>
  </div>
</template>

<script>
import { STATUS } from "./../../../../utils/constants";
import DashboardNavbar from "./../../../../layouts/components/DashboardNavbar.vue";
import PreLoader from "./../../../../components/general/PreLoader.vue";
import ExceptionWithImg from "./../../../../components/general/ExceptionWithImg.vue";
import CustomPagination from "./../../../../components/general/CustomPagination.vue";
import UserAdd from "./components/UserAdd.vue";
import UserUpdate from "./components/UserUpdate.vue";
import UserTable from "./components/UserTable.vue";
import UserInfo from "./components/UserInfo.vue";
import UserDelete from "./components/UserDelete.vue";
import UserFilter from "./components/UserFilter.vue";
import Users from "./../../../../models/settings/settingsOthers/users/Users";
import apiUser from "./../../../../api/settings/settingsOthers/users";
import generalMixin from "./../../../../utils/generalMixin";
import generalSettingsMixin from "./../../../../utils/generalSettingsMixin";

export default {
  mixins: [generalMixin, generalSettingsMixin],
  components: {
    DashboardNavbar,
    PreLoader,
    ExceptionWithImg,
    CustomPagination,
    UserAdd,
    UserUpdate,
    UserTable,
    UserInfo,
    UserDelete,
    UserFilter,
  },
  computed: {
    hasData() {
      return this.users.usersData.length != 0;
    },
  },
  data() {
    return {
      users: new Users(),
    };
  },
  methods: {
    changePagination(pagination) {
      this.users.filterData.fillData(pagination);
      this.getAllUsers();
    },
    changeActivationType(data) {
      this.updateActivationTypeTokens("users", data);
      this.users.filterData.activationTypeTokens = data;
      this.getAllUsers();
    },
    search(data) {
      this.users.filterData.fillData(data);
      this.getAllUsers();
    },
    async getAllUsers() {
      this.isLoading = true;
      try {
        this.users.usersData = [];
        const response = await apiUser.getAll(
          this.users.filterData
        );
        if (response.data.status == STATUS.SUCCESS) {
          this.exceptionMsg = null;
        } else if (response.data.status == STATUS.NO_INTERNET) {
          this.exceptionMsg = response.data.msg;
          this.exceptionImg = "illustrator-noInternet.svg";
        } else if (response.data.status == STATUS.NO_CONTENT) {
          this.exceptionMsg = response.data.msg;
          this.exceptionImg = "illustrator-noData.svg";
        } else if (response.data.status == STATUS.INVALID_TOKEN) {
          this.$store.dispatch("logoutUser");
        } else {
          this.exceptionMsg = response.data.msg;
          this.exceptionImg = null;
        }
        this.users.fillData(response.data);
      } catch (error) {
        this.exceptionMsg = this.$t("errorCatch");
        this.exceptionImg = null;
      }
      this.isLoading = false;
    },
  },
  async created() {
    this.getAllUsers();
  },
};
</script>
