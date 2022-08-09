<template>
  <nav class="navbar-login" ref="navbarLogin">
    <!-- <span class="logo-icon" :title="$t('projectName')">
      <img src="@/assets/images/logo.png" class="logo" />
    </span> -->
    <div class="project-name">
      <router-link :to="{ name: 'Home' }">
        <img src="@/assets/images/logo.png" />
        <h3>{{ $t("projectName") }}</h3>
      </router-link>
    </div>
    <div class="login-icon">
      <router-link :to="{ name: 'UserLogin' }" class="nav-link">
        {{ $t("login") }}
      </router-link>
    </div>
    <div class="lang-icon">
      <button
        v-if="language == LANGUAGES.enUS"
        @click="setLanguage(LANGUAGES.arEG)"
      >
        <img src="@/assets/images/lang-ar.svg" />
      </button>
      <button
        v-if="language == LANGUAGES.arEG"
        @click="setLanguage(LANGUAGES.enUS)"
      >
        <img src="@/assets/images/lang-en.svg" />
      </button>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";
import { LANGUAGES } from "@/utils/constants";
import { setLanguage, getLanguage } from "@/utils/functions";

export default {
  name: "AuthNavbar",
  data() {
    return {
      isLoading: false,
      language: getLanguage(),
      LANGUAGES: LANGUAGES,
      theme: localStorage.getItem("userTheme") || "dark",
      Y: "",
    };
  },
  methods: {
    setLanguage(lang) {
      this.isLoading = true;
      setLanguage(lang);
    },
    changeTheme(theme) {
      localStorage.setItem("userTheme", theme);
      window.location.reload();
    },
  },
  computed: {
    ...mapGetters(["userPersonalData"]),
  },
  mounted() {
    // console.log(this.$refs);
  },
  watch: {},
};
</script>
