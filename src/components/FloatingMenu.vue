<template>
  <div class="fmenu-item" :class="className">
    <div class="trigger-menu" :class="open ? 'open' : ''" @click="open = !open">
      <!-- <i class="fa fa-cog"></i> -->
      <i class="fas fa-sliders-h"></i>
    </div>
    <ul class="floating-menu" :class="open ? 'open' : ''">
      <slot></slot>
      <!-- <li>
        <a href="#" title="Facebook">
          <img :src="require('@/assets/images/' + 'facebook.svg')" />
        </a>
      </li>
      <li>
        <a href="#" title="Twitter">
          <img :src="require('@/assets/images/' + 'twitter.svg')" />
        </a>
      </li> -->
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      open: false,
    };
  },
  methods: {},
  props: {
    className: {
      type: String,
      default: "",
    },
  },
  watch: {},
  created() {},
};
</script>
