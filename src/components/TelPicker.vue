<template>
  <div class="form-label-group" :class="className">
    <b-form-select
      @change="changeCC"
      v-model="value"
      :options="CCWithCCNameOptions"
      class="form-control"
    ></b-form-select>
    <img src="@/assets/images/earth.svg" />
  </div>
</template>

<script>
export default {
  name: "TelPicker",
  data() {
    return {
      CCWithCCNameOptions: [
        { value: "", text: this.$t("selectCountryCode") },
        { value: "EG +20", text: this.$t("countryCodes.egypt") },
        { value: "GB +44", text: this.$t("countryCodes.uk") },
        { value: "US +1", text: this.$t("countryCodes.usa") },
        { value: "SA +966", text: this.$t("countryCodes.sa") },
      ],
    };
  },
  methods: {
    async changeCC() {
      this.$emit("changeCC", this.value);
    },
  },
  props: {
    className: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped></style>
