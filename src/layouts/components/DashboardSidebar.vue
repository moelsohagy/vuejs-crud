<template>
  <div class="dashboard-sidebar" :class="{ closed: sidebarIsClosed }">
    <div class="v-overlay" @click="toggleSidebarStatus()">
      <div class="v-overlay__scrim"></div>
    </div>

    <div class="sidebar">
      <header>
        <span class="header-image">
          <img src="./../../assets/images/logo.png" alt="" />
        </span>

        <div class="header-text">
          <span class="name">{{ $t("projectName") }}</span>
        </div>
      </header>

      <div class="menu">
        <ul class="menu-links">
          <li
            v-for="(route, index) in routes"
            :key="index"
            :class="
              !route.childrens || route.childrens.length == 0 ? '' : 'sub-menu'
            "
          >
            <router-link
              v-if="!route.childrens || route.childrens.length == 0"
              :to="{ name: route.name }"
            >
              <span class="icon"
                ><img :src="route.icon" v-b-popover.hover.top="route.title"
              /></span>
              <span class="text">{{ route.title }}</span>
            </router-link>

            <template v-else>
              <b-button v-b-toggle="route.name">
                <span class="icon"
                  ><img :src="route.icon" v-b-popover.hover.top="route.title"
                /></span>
                <span class="text">
                  <span class="sub-text">{{ route.title }}</span>
                  <i class="fa fa-angle-down" aria-hidden="true"></i>
                </span>
              </b-button>
              <b-collapse :id="route.name">
                <li v-for="(route, index) in route.childrens" :key="index">
                  <router-link :to="{ name: route.name }">
                    <span class="icon"
                      ><img
                        :src="route.icon"
                        v-b-popover.hover.top="route.title"
                    /></span>
                    <span class="text">{{ route.title }}</span>
                  </router-link>
                </li>
              </b-collapse>
            </template>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import iconUsers from "./../../assets/images/users.svg";

export default {
  data() {
    return {
      routes: [
        {
          name: "Users",
          icon: iconUsers,
          title: this.$t("Users.modelName"),
        }
      ],
    }
  },
  computed: {
    ...mapGetters(["sidebarIsClosed"]),
  },
  methods: {
    ...mapActions(["toggleSidebarStatus"]),
  },
};
</script>
