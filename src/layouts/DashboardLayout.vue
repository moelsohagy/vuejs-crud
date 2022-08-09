<template>
  <div class="dashboard-layout">
    <DashboardSidebar />

    <div class="dashboard-content">
      <!-- <DashboardNavbar /> -->

      <router-view class="app-content-container" />

      <Footer />
      <!-- <div class="app-content">
      </div> -->
    </div>
  </div>
</template>
<script>
// import DashboardNavbar from "./components/DashboardNavbar.vue";
import DashboardSidebar from "./components/DashboardSidebar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    // DashboardNavbar,
    DashboardSidebar,
    Footer,
  },
};
</script>
