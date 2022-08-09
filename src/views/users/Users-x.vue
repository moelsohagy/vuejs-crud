<template>
  <UsersComponent
    :key="userTypeToken"
    v-if="hasData"
    :userTypeToken="userTypeToken"
    :modelName="modelName"
    :userToken="userToken"
  />
</template>

<script>
import UsersComponent from "./UsersComponent";

import generalMixin from "./../../utils/generalMixin";
import generalSettingsMixin from "./../../utils/generalSettingsMixin";
// import { USER_TYPE } from "./../../utils/constants";

export default {
  mixins: [generalMixin, generalSettingsMixin],
  components: {
    UsersComponent,
  },
  computed: {
    hasData() {
      return this.userTypeToken && this.modelName ? true : false;
    },
  },
  props: {
    userToken: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      userTypeToken: "",
      modelName: "",
    };
  },
  methods: {
    async updateUsertypeToken() {
      this.userTypeToken = this.$route.meta.userTypeToken;
    },
    async updateModelName() {
      this.modelName = this.$route.meta.modelName;
    },
  },
  async created() {
    await this.updateUsertypeToken();
    await this.updateModelName();
  },
  watch: {
    async $route() {
      this.userTypeToken = "";
      this.modelName = "";
      await this.updateUsertypeToken();
      await this.updateModelName();
    },
  },
};
</script>
