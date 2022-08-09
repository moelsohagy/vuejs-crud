import { DEFAULT_PAGES } from "./../utils/constants";
import i18n from "./../i18n";
import store from "./../store";

export const ifAuthenticated = (to, from, next) => {
  if (store.getters.userAuthorizeToken) {
    next({ name: DEFAULT_PAGES.loggedIn });
  } else {
    next();
  }
};
export const ifNotAuthenticated = (to, from, next) => {
  if (!store.getters.userAuthorizeToken) {
    next({ name: DEFAULT_PAGES.notLoggedIn });
  } else {
    next();
  }
};

const routes = [
  //#region General
  {
    path: "/",
    name: "Home",
    component: () => import("./../views/home/Home.vue"),
    beforeEnter: ifAuthenticated(),
    meta: {
      layout: "auth",
      pageName: i18n.t("homePage"),
      pageIcon: "homepage.svg",
    },
  },
  //#endregion General

  //#region Users
  {
    path: "/users/:userToken?",
    name: "Users",
    component: () => import("./../views/users/Users"),
    beforeEnter: ifNotAuthenticated(),
    meta: {
      pageName: i18n.t("Users.modelName"),
      pageIcon: "user.svg",
    },
    props: true,
  },
  //#endregion Users

  //#region Error
  {
    path: "/error-404",
    name: "Error404",
    component: () => import("./../views/errors/Error-404.vue"),
    meta: {
      pageName: i18n.t("pageNotFound"),
      pageIcon: "404-icon.svg",
      currentPage: "",
      currentSubPage: "",
    },
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "Error404" },
  },
  //#endregion Error
];

export default routes;
