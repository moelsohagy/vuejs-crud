<template>
  <div class="phone-picker" :class="className">
    <CustomSelectBox
      :className="'country-code'"
      :id="`${id}-phoneCCWithCCName`"
      :value="phoneCCWithCCName || `${phoneCCName} ${phoneCC}`"
      :options="countriesCodes"
      v-on:changeValue="phoneCCWithCCName = $event"
      :title="$t('PhonePicker.countrySelectorLabel')"
      :imgName="'earth.svg'"
      :isDisabled="isDisabled"
    />
    <CustomInput
      :className="'phone-number'"
      :id="`${id}-thePhoneNumber`"
      :value="thePhoneNumber"
      v-on:changeValue="
        thePhoneNumber = $event;
        valueChanged();
      "
      :title="title ? title : $t('PhonePicker.phoneNumberLabel')"
      :imgName="imgName ? imgName : 'phone.svg'"
      :isDisabled="isDisabled"
    />
  </div>
</template>

<script>
import CustomInput from "@/components/general/CustomInput.vue";
import CustomSelectBox from "@/components/general/CustomSelectBox.vue";
import { LANGUAGES } from "./../../utils/constants";

export default {
  name: "CustomPhonePicker",
  components: {
    CustomInput,
    CustomSelectBox,
  },
  // computed: {
  //   phoneCCWithCCName() {
  //     return this.countryCodeName && this.countryCode
  //       ? `${this.countryCodeName} ${this.countryCode}`
  //       : "";
  //   },
  // },
  data() {
    return {
      LANGUAGES,
      thePhoneNumber: this.phoneNumber,
      phoneCCWithCCName: "",
      phoneCC: this.countryCode,
      phoneCCName: this.countryCodeName,
      countriesCodes: [
        // { value: "", text: this.$t("selectCountryCode") },
        { value: "EG +20", text: this.$t("countryCodes.egypt") },
        { value: "GB +44", text: this.$t("countryCodes.uk") },
        { value: "US +1", text: this.$t("countryCodes.usa") },
        { value: "SA +966", text: this.$t("countryCodes.sa") },
      ],
    };
  },
  methods: {
    valueChanged() {
      let returnObject = {
        phoneNumber: this.thePhoneNumber,
        CCWithCCName: this.phoneCCWithCCName,
        countryCode: this.phoneCC,
        countryCodeName: this.phoneCCName,
      };
      this.$emit("changeValue", returnObject);
    },
    setPhoneCCWithCCName() {
      console.log("countryCodeName", this.countryCodeName);
      console.log("countryCode", this.countryCode);
      console.log("phoneCC", this.phoneCC);
      console.log("phoneCCName", this.phoneCCName);
      this.phoneCCWithCCName =
        this.countryCodeName && this.countryCode
          ? `${this.countryCodeName} ${this.countryCode}`
          : "";
      console.log("phoneCCWithCCName", this.phoneCCWithCCName);
    },
  },
  props: {
    className: {
      type: String,
      default: "",
    },
    id: {
      type: String,
      default: "phonePicker",
    },
    phoneNumber: {
      default: "",
    },
    countryCode: {
      default: "",
    },
    countryCodeName: {
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
    imgName: {
      type: String,
      default: "",
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    phoneNumber: function (val) {
      this.thePhoneNumber = val;
    },
    countryCode: function (val) {
      this.phoneCC = val;
      this.setPhoneCCWithCCName();
    },
    countryCodeName: function (val) {
      this.phoneCCName = val;
      // this.setPhoneCCWithCCName();
    },

    phoneCCWithCCName: function (val) {
      let cc = val.split(" ");
      this.phoneCC = cc[1];
      this.phoneCCName = cc[0];
    },
    phoneCC: function () {
      this.valueChanged();
    },
    phoneCCName: function () {
      this.valueChanged();
    },
  },
  async created() {},
};
</script>
