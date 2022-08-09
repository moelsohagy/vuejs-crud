<template>
  <div class="error-404-container">
    <img src="@/assets/images/404.svg" />
    <button @click="logout()">{{ $t("logout") }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    logout() {
      this.$store.dispatch("logoutUser");
    },
  },
};
</script>
