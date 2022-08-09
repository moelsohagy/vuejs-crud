<template>
  <div class="page-sidebar">
    <!-- #region SidebarHeader -->
    <li class="sidebar-header">
      <span class="icon"><img src="@/assets/images/logo.png" /></span>
      <span class="title">{{ $t("projectName") }}</span>
    </li>
    <!-- #ndregion SidebarHeader -->

    <ul>
      <!-- #region Users -->
      <!-- <li class="sub-menu">
        <a v-b-toggle.users :class="currentPage == 'users' ? 'active' : ''">
          <span class="icon"><img src="@/assets/images/users.svg" /></span>
          <span class="title">
            {{ $t("Users.modelName") }}
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
        <b-collapse id="users">
          <ul>
            <li>
              <router-link
                :to="{ name: 'Users' }"
                :class="currentSubPage == 'students' ? 'active' : ''"
              >
                <span class="icon"
                  ><img src="@/assets/images/students.svg"
                /></span>
                <span class="title">{{ $t("students.modelName") }}</span>
              </router-link>
            </li> -->
      <!-- <li>
              <router-link
                :to="{ name: 'Employees' }"
                :class="currentSubPage == 'employees' ? 'active' : ''"
              >
                <span class="icon"
                  ><img src="@/assets/images/employees.svg"
                /></span>
                <span class="title">{{ $t("employees.modelName") }}</span>
              </router-link>
            </li>

            <li>
              <router-link
                :to="{ name: 'MasterAdmins' }"
                :class="currentSubPage == 'masterAdmins' ? 'active' : ''"
              >
                <span class="icon"
                  ><img src="@/assets/images/masterAdmins.svg"
                /></span>
                <span class="title">{{ $t("masterAdmins.modelName") }}</span>
              </router-link>
            </li> -->
      <!-- </ul>
        </b-collapse>
      </li> -->
      <!-- #endregion Users -->

      <!-- #region Settings -->
      <!-- <li v-if="checkPrivilege(hasTheSettings())" class="sub-menu"> -->
      <li>
        <a
          v-b-toggle.theSettings
          :class="currentPage == 'theSettings' ? 'active' : ''"
        >
          <span class="icon"><img src="@/assets/images/settings.svg" /></span>
          <span class="title">
            {{ $t("settings") }}
            <i class="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </a>
        <b-collapse id="theSettings">
          <ul>
            <!-- <li v-if="checkPrivilege(hasSystemConfiguration())"> -->
            <li>
              <router-link
                :to="{ name: 'SystemConfiguration' }"
                :class="currentSubPage == 'systemConfiguration' ? 'active' : ''"
              >
                <span class="icon"
                  ><img src="@/assets/images/settings.svg"
                /></span>
                <span class="title">{{
                  $t("systemConfiguration.modelName")
                }}</span>
              </router-link>
            </li>
            <li v-if="checkPrivilege(hasSettings())">
              <router-link
                :to="{ name: 'Settings' }"
                :class="currentSubPage == 'settings' ? 'active' : ''"
              >
                <span class="icon"
                  ><img src="@/assets/images/settings.svg"
                /></span>
                <span class="title">{{ $t("settings") }}</span>
              </router-link>
            </li>
            <!-- #region SettingsOther -->
            <li v-if="checkPrivilege(hasSettingsOthers())">
              <router-link
                :to="{ name: 'SettingsOthers' }"
                :class="currentSubPage == 'settings-others' ? 'active' : ''"
              >
                <span class="icon"
                  ><img src="@/assets/images/settings-other.svg"
                /></span>
                <span class="title">{{ $t("settings-other") }}</span>
              </router-link>
            </li>
            <!-- #endregion SettingsOther -->
          </ul>
        </b-collapse>
      </li>
      <!-- #endregion Settings -->
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { checkPrivilege } from "@/utils/functions";
import {
  // hasTheSettings,
  // hasSystemConfiguration,
  hasSettings,
  hasSettingsOthers,
} from "@/utils/privilegeHelper";

export default {
  computed: {
    ...mapGetters(["usersPrivilegeData"]),
  },
  data() {
    return {
      currentPage: "",
      currentSubPage: "",
    };
  },
  methods: {
    getPageInfo() {
      this.currentPage = this.$route.meta.currentPage || "";
      this.currentSubPage = this.$route.meta.currentSubPage || "";
    },
    checkPrivilege(value) {
      return checkPrivilege(value);
    },
    // hasTheSettings,
    // hasSystemConfiguration,
    hasSettings,
    hasSettingsOthers,
  },
  watch: {
    $route() {
      this.getPageInfo();
    },
  },
  async created() {
    this.getPageInfo();
  },
};
</script>
