<template>
  <div class="auth-layout">
    <div class="page-navbar">
      <AuthNavbar />
    </div>

    <div class="page-content">
      <router-view class="page-content-container" />

      <Footer />
    </div>
  </div>
</template>

<script>
import AuthNavbar from "./components/AuthNavbar.vue";
import Footer from "./components/Footer.vue";
export default {
  name: "AuthLayout",
  components: {
    AuthNavbar,
    Footer,
  },
};
</script>
