import { DEFAULT_PAGES } from "./../../utils/constants";
import router from "./../../router";

export default {
  state: {
    userAuthorizeToken: null,
    userPersonalData: null,
    constantsListsData: null,
    usersPrivilegeData: null,
    userHomePage: "",
  },
  getters: {
    userAuthorizeToken: (state) => state.userAuthorizeToken,
    userPersonalData: (state) => state.userPersonalData,
    constantsListsData: (state) => state.constantsListsData,
    usersPrivilegeData: (state) => state.usersPrivilegeData,
    userHomePage: (state) => state.userHomePage,
  },
  mutations: {
    UPDATE_USER_DATA: (state, data) => {
      state.userAuthorizeToken = data.userAuthorizeToken || null;
      state.userPersonalData = data.userPersonalDataObject || null;
      state.constantsListsData = data.constantsListsData || null;
      state.usersPrivilegeData = data.usersPrivilegeData || null;
    },
    LOGOUT_USER: (state) => {
      state.userAuthorizeToken = null;
      state.userPersonalData = null;
      state.constantsListsData = null;
      state.usersPrivilegeData = null;
      state.userHomePage = "";
    },
    UPDATE_USER_AUTHORIZE_TOKEN: (state, userAuthorizeToken) => {
      state.userAuthorizeToken = userAuthorizeToken || null;
    },
    SET_USER_HOME_PAGE: (state, userHomePage) => {
      state.userHomePage = userHomePage;
    },
  },
  actions: {
    loginUser(context, data) {
      context.commit("UPDATE_USER_DATA", data);
    },
    logoutUser(context) {
      context.commit("LOGOUT_USER");
      context.commit("SET_GENERAL_SETTING", null);
      router.push({ name: DEFAULT_PAGES.notLoggedIn }).catch(() => {});
    },
    updateUserAuthorizeToken(context, token) {
      context.commit("UPDATE_USER_AUTHORIZE_TOKEN", token);
    },
    setUserHomePage(context, userHomePage) {
      context.commit("SET_USER_HOME_PAGE", userHomePage);
    },
  },
  modules: {},
};
