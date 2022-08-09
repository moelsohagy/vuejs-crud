<template>
  <div
    class="select-box-with-img select-box-with-img-multiple"
    :class="className + (errors.length == 0 ? '' : ' form-group--error')"
  >
    <span
      v-if="isSync"
      class="sync-icon"
      @click="sync()"
      :class="{ rotate: isClicked }"
      :title="$t('synchronization')"
    >
      <img class="sync-image" :src="require('@/assets/images/sync.svg')" />
    </span>

    <multiselect
      v-model="theValue"
      :placeholder="title ? title : $t('notFound')"
      label="text"
      track-by="value"
      :options="options"
      :option-height="104"
      :show-labels="true"
      :selectedLabel="$t('selectBox.selectedLabel')"
      :selectLabel="$t('selectBox.selectLabel')"
      :deselectLabel="$t('selectBox.deselectLabel')"
      :multiple="true"
      :close-on-select="false"
    >
      <template slot="singleLabel" slot-scope="props">
        <div class="image"></div>
        <label class="label" :for="id">{{
          title ? title : $t("notFound")
        }}</label>
        <div class="select-box-container">
          <!-- <img
            v-if="props.option.image"
            class="option__image"
            :src="props.option.image"
            :onerror="`this.src='${require('@/assets/images/' + imgName)}'`"
          /> -->
          <span class="option__desc">
            <span class="option__title">{{ props.option.text }}</span>
          </span>
        </div>
      </template>
      <template slot="option" slot-scope="props"
        ><img
          v-if="props.option.image"
          class="option__image"
          :src="props.option.image"
          :onerror="`this.src='${require('@/assets/images/' + imgName)}'`"
        />
        <div class="option__desc">
          <span class="option__title">{{ props.option.text }}</span>
        </div>
      </template>
      <template slot="noOptions">
        {{ $t("selectBox.noOptions") }}
      </template>
      <template slot="noResult">
        {{ $t("selectBox.noElementsFoundOfThisSearch") }}
      </template>
    </multiselect>

    <img
      class="placeholder-image"
      :src="require('@/assets/images/' + imgName)"
    />
    <span class="error" v-for="(error, index) in errors" :key="index">
      {{ error }}
    </span>
  </div>
</template>

<script>
import Multiselect from "vue-multiselect";

export default {
  components: {
    Multiselect,
  },
  data() {
    return {
      theValue: [],
      currentValue: [],
      arrayOfObjects: [],
      arrayOfValues: [],
      isClicked: false,
    };
  },
  methods: {
    getCurrentItems(arrayOfValues) {
      if (arrayOfValues.length) {
        let currentValue = [];
        for (let i in arrayOfValues) {
          let index = this.options.findIndex(
            (x) => x.value == arrayOfValues[i]
          );

          if (index > -1) {
            currentValue.push({
              value: this.options[index].value,
              text: this.options[index].text,
              // image: this.options[index].image,
            });
          }
        }
        if (JSON.stringify(this.theValue) != JSON.stringify(currentValue))
          this.theValue = currentValue;
      }
    },
    changeValue(val) {
      this.arrayOfObjects = val;
      this.arrayOfValues = val.map((x) => x.value);

      if (this.returnArrayOfObjects)
        this.$emit("changeValue", this.arrayOfObjects);
      else this.$emit("changeValue", this.arrayOfValues);
    },
    sync() {
      this.isClicked = true;
      this.$emit("synchronization", "");
    },
  },
  props: {
    className: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "CustomSelectBoxMultiple",
    },
    isSync: {
      default: false,
    },
    value: {
      type: Array,
      default: null,
    },
    title: {
      type: String,
      default: "title",
    },
    imgName: {
      type: String,
      default: "man.svg",
    },
    options: {
      type: Array,
    },
    returnArrayOfObjects: {
      type: Boolean,
      default: true,
    },
    errors: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    theValue: function (val) {
      this.changeValue(val);
    },
    value: function (arrayOfValues) {
      this.getCurrentItems(arrayOfValues);
    },
    options: function () {
      this.getCurrentItems(this.value);
    },
  },
  created() {
    this.getCurrentItems(this.value);
  },
};
</script>
