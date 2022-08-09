<template>
  <div
    class="form-label-group"
    :class="className + (errors.length == 0 ? '' : ' form-group--error')"
    :showPasswordIcon="showPasswordIcon"
  >
    <input
      :name="id"
      :id="id"
      v-bind:type="[showPassword ? 'text' : 'password']"
      v-model.trim="theValue"
      class="form-control"
      placeholder=" "
      :maxlength="maxlength"
    />
    <label :for="id">{{ title ? title : $t("notFound") }}</label>
    <img :src="require('@/assets/images/' + imgName)" />
    <span v-if="showPasswordIcon" class="toggle-password">
      <img
        :src="
          require('@/assets/images/eye-' +
            [showPassword ? 'show' : 'hide'] +
            '.svg')
        "
        @click="showPassword = !showPassword"
      />
    </span>
    <span class="error" v-for="(error, index) in errors" :key="index">
      {{ error }}
    </span>
  </div>
</template>

<script>
export default {
  name: "CustomInputPassword",
  data() {
    return {
      theValue: this.value,
      showPassword: false,
    };
  },
  methods: {},
  props: {
    className: {
      type: String,
      default: "",
    },
    showPasswordIcon: {
      type: Boolean,
      default: true,
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
      default: 1000000,
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    value: function (val) {
      this.theValue = val;
    },
    theValue: function (val) {
      this.$emit("changeValue", val);
    },
  },
};
</script>
