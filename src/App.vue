<template>
  <div id="app" ref="viewBox">
    <component id="app-container" :is="resolveLayout">
      <router-view></router-view>
    </component>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { getLanguage } from "./utils/functions";
import { LANGUAGES } from "./utils/constants";
import AuthLayout from "./layouts/AuthLayout.vue";
import DashboardLayout from "./layouts/DashboardLayout.vue";
import generalMixin from "./utils/generalMixin";

export default {
  name: "App",
  mixins: [generalMixin],
  components: {
    AuthLayout,
    DashboardLayout,
    // UserLoginCodeUseCode,
  },
  data() {
    return {
      lastScrollTop: 0,
      // element: document.querySelector("#app"),
    };
  },
  methods: {
    setProjectNameTitle() {
      document.title = this.$t("projectName");
    },
    setRootStyle() {
      let language = getLanguage();
      let root = document.documentElement;

      if (language == LANGUAGES.arEG) root.className = "v-application--is-rtl";
      else root.className = "v-application--is-ltr";
    },
    handleScroll() {
      window.addEventListener(
        "scroll",
        function () {
          let query = document.querySelector(
            ".pagination-with-content .table-container, .pagination-with-content .custom-cards, .pagination-with-content .sibling-pagination"
          );
          let st = query ? query.scrollTop : 0;

          if (st > this.lastScrollTop) {
            if (
              !document
                .querySelector(".pagination-with-content")
                .classList.contains("hide-pagination")
            ) {
              document
                .querySelector(".pagination-with-content")
                .classList.add("hide-pagination");
            }
          } else {
            if (
              document
                .querySelector(".pagination-with-content")
                .classList.contains("hide-pagination")
            ) {
              document
                .querySelector(".pagination-with-content")
                .classList.remove("hide-pagination");
            }
          }
          this.lastScrollTop = st <= 0 ? 0 : st;
        },
        true
      );
    },
  },
  mounted() {
    this.handleScroll();
  },
  computed: {
    ...mapGetters(["invalidLoginCodeStatus", "invalidLoginCodeMessage"]),

    resolveLayout: function () {
      if (this.$route.meta.layout === "auth") return "auth-layout";
      else return "dashboard-layout";
    },
  },
  watch: {
    invalidLoginCodeStatus: function (invalid) {
      if (invalid) {
        this.$router.push({ name: "InvalidLoginClode" }).catch(() => {});
      } else {
        this.$router.push({ name: this.userHomePage }).catch(() => {});
      }
    },
  },
  async created() {
    this.setProjectNameTitle();
    this.setRootStyle();
    // this.$store.dispatch("updateLoginCodeStatus", false);
    // this.$store.dispatch("updateLoginCodeMessage", "");
  },
};
</script>
