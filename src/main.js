import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "@/i18n/index";
import VueBottomSheet from "@webzlodimir/vue-bottom-sheet";
import VCalendar from "v-calendar";

import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "vue-multiselect/dist/vue-multiselect.min.css";
import "pretty-checkbox/dist/pretty-checkbox.min.css";
import "@/assets/css/app.scss";
import "@/assets/css/main.css";

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(VueBottomSheet);
Vue.use(VCalendar);
Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
