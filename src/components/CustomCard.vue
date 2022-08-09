<template>
  <div
    class="custom-card-wrapper"
    :class="className"
    :style="`--custom-card-wrapper-height: ${wrapperHeight};`"
  >
    <div class="custom-card">
      <span v-if="withIndex" class="card-index" :class="indexBg">{{
        index
      }}</span>

      <div class="card-image">
        <img
          :src="fullPathFileFromServer(imagePath, defaultImg)"
          :onerror="`this.src='${defaultImg}'`"
        />
        <!-- <img :src="require('@/assets/images/' + 'user.svg')" /> -->
      </div>

      <ul class="card-actions">
        <slot></slot>
        <!-- <li>
          <button title="Facbook">
            <img :src="require('@/assets/images/' + 'facebook.svg')" />
          </button>
        </li>
        <li>
          <a href="" title="instagram">
            <img :src="require('@/assets/images/' + 'instagram.svg')" />
          </a>
        </li> -->
      </ul>

      <div v-if="withTitle || withDescription" class="details">
        <h4 v-if="withTitle" :title="title" class="details-title cut-1line">
          {{ title }}
        </h4>
        <p
          v-if="withDescription"
          :title="description"
          class="details-description cut-1line"
        >
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { fullPathFileFromServer } from "./../../utils/functions";

export default {
  name: "CustomCard",
  components: {},
  data() {
    return {};
  },
  methods: {
    fullPathFileFromServer(filePath, defaultFile) {
      return fullPathFileFromServer(filePath, defaultFile);
    },
  },
  props: {
    indexBg: {
      type: String,
      default: "",
    },
    className: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    indexStatus: {
      type: Boolean,
      default: true,
    },
    index: {
      default: "",
    },
    imagePath: {
      type: String,
      default: "",
    },
    defaultImg: {
      type: String,
      default: "",
    },
    withTitle: {
      type: Boolean,
      default: true,
    },
    withDescription: {
      type: Boolean,
      default: true,
    },
    withIndex: {
      type: Boolean,
      default: true,
    },
    wrapperHeight: { type: String, default: "300px" },
  },
  watch: {},
  async created() {},
};
</script>
