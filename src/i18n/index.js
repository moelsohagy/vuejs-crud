import Vue from "vue";
import ar from "@/i18n/ar.json";
import en from "@/i18n/en.json";
import VueI18n from "vue-i18n";
import { LANGUAGES } from "./../utils/constants";

Vue.use(VueI18n);

const messages = {
  [LANGUAGES.arEG]: ar,
  [LANGUAGES.enUS]: en,
};

export default new VueI18n({
  locale: localStorage.getItem("userLanguage") || LANGUAGES.default,
  messages: messages,
});
