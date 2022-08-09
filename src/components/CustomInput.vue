<template>
  <div
    v-if="!showAsInfo"
    class="form-label-group"
    :class="className + (errors.length == 0 ? '' : ' form-group--error')"
  >
    <input
      :name="id"
      :id="id"
      type="text"
      v-model.trim="theValue"
      class="form-control"
      placeholder=" "
      :maxlength="maxlength"
      :disabled="isDisabled"
    />
    <label :for="id">{{ title ? title : $t("notFound") }}</label>
    <img :src="require('@/assets/images/' + imgName)" />
    <img
      class="location-pin-icon"
      v-if="isSync"
      :title="syncTitle"
      :src="require('@/assets/images/' + syncImgName)"
      @click="emitSync()"
    />
    <span class="error" v-for="(error, index) in errors" :key="index">
      {{ error }}
    </span>
  </div>
  <DataLabelGroup
    v-else
    :class="className"
    :value="value"
    :title="title"
    :imgName="imgName"
  />
</template>

<script>
import DataLabelGroup from "@/components/general/DataLabelGroup.vue";

export default {
  name: "CustomInput",
  components: {
    DataLabelGroup,
  },
  data() {
    return {
      theValue: this.value,
    };
  },
  methods: {
    emitSync() {
      this.$emit("sync", "");
    },
  },
  props: {
    className: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "textarea",
    },
    value: {
      default: "",
    },
    title: {
      type: String,
      default: "title",
    },
    imgName: {
      type: String,
      default: "man.svg",
    },
    maxlength: {
      type: Number,
      default: 400,
    },
    errors: {
      type: Array,
      default: () => [],
    },
    isSync: {
      type: Boolean,
      default: false,
    },
    syncTitle: {
      type: String,
      default: "sync",
    },
    syncImgName: {
      type: String,
      default: "sync.svg",
    },
    showAsInfo: {
      type: Boolean,
      default: false,
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value: function (val) {
      this.theValue = val;
    },
    theValue: function (val) {
      if (this.value != val) this.$emit("changeValue", val);
    },
  },
  async created() {},
};
</script>

<style lang="scss" scoped></style>
