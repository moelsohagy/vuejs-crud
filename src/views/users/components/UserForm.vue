<template>
  <div class="">
    <form autocomplete="off">
      <div class="my-card">
        <div class="row">
          <CustomInput
            :className="'col-md-6'"
            :id="`${id}-fullCode`"
            :value="user.fullCode"
            v-on:changeValue="user.fullCode = $event"
            :title="$t('Users.code')"
            :imgName="'code.svg'"
          />
          <CustomInput
            :className="'col-md-6'"
            :id="`${id}-userNameAr`"
            :errors="errors_userNameAr"
            :value="user.userNameAr"
            v-on:changeValue="
              user.userNameAr = $event;
              $v.user.userNameAr.$touch();
            "
            :title="$t('Users.nameAr')"
            :imgName="'users.svg'"
          />
          <CustomInput
            :className="'col-md-6'"
            :id="`${id}-userNameEn`"
            :errors="errors_userNameEn"
            :value="user.userNameEn"
            v-on:changeValue="
              user.userNameEn = $event;
              $v.user.userNameEn.$touch();
            "
            :title="$t('Users.nameEn')"
            :imgName="'users.svg'"
          />
          <CustomInput
            :className="'col-md-6'"
            :id="`${id}-userNameUnd`"
            :value="user.userNameUnd"
            v-on:changeValue="user.userNameUnd = $event"
            :title="$t('Users.nameUnd')"
            :imgName="'users.svg'"
          />

          <TextArea
            :className="'col-md-6'"
            :id="`${id}-userDescriptionAr`"
            :errors="errors_userDescriptionAr"
            :value="user.userDescriptionAr"
            v-on:changeValue="
              user.userDescriptionAr = $event;
              $v.user.userDescriptionAr.$touch();
            "
            :title="$t('Users.descriptionAr')"
            :imgName="'description.svg'"
          />
          <TextArea
            :className="'col-md-6'"
            :id="`${id}-userDescriptionEn`"
            :errors="errors_userDescriptionEn"
            :value="user.userDescriptionEn"
            v-on:changeValue="
              user.userDescriptionEn = $event;
              $v.user.userDescriptionEn.$touch();
            "
            :title="$t('Users.descriptionEn')"
            :imgName="'description.svg'"
          />
          <TextArea
            :className="'col-md-6'"
            :id="`${id}-userDescriptionUnd`"
            :value="user.userDescriptionUnd"
            v-on:changeValue="
              user.userDescriptionUnd = $event
            "
            :title="$t('Users.descriptionUnd')"
            :imgName="'description.svg'"
          />
          <TextArea
            :className="'col-md-6'"
            :id="`${id}-userNotes`"
            :value="user.userNotes"
            v-on:changeValue="user.userNotes = $event"
            :title="$t('notes')"
            :imgName="'notes.svg'"
          />
        </div>
      </div>

      <div class="form-actions">
        <div class="icon-submit" @click.prevent="submitForm">
          <img src="@/assets/images/check-icon.svg" :title="submitName" />
        </div>
        <div
          @click.prevent
          class="icon-cancel"
          v-b-modal="`ConfirmCloseSheet-${bottomSheetName}`"
        >
          <img src="@/assets/images/cancel-icon.svg" :title="$t('cancel')" />
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { bottomSheetScrollToTop } from "./../../../../../utils/functions";
import {
  isValidNameAr,
  isValidNameEn,
  isValidTextAr,
  isValidTextEn,
} from "./../../../../../utils/validationHelper";
import CustomInput from "./../../../../../components/general/CustomInput.vue";
import TextArea from "./../../../../../components/general/TextArea.vue";
import generalMixin from "./../../../../../utils/generalMixin";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [generalMixin, validationMixin],
  components: {
    CustomInput,
    TextArea,
  },
  props: {
    user: {
      type: Object,
    },
    submitName: {
      type: String,
    },
    id: {
      type: String,
      default: "id",
    },
    bottomSheetName: {
      type: String,
      default: "",
    },
  },
  validations: {
    user: {
      userNameAr: { required, isValidNameAr },
      userNameEn: { required, isValidNameEn },
      userDescriptionAr: { isValidTextAr },
      userDescriptionEn: { isValidTextEn },
    },
  },
  computed: {
    errors_userNameAr() {
      let errors = [];
      if (this.$v.user.userNameAr.$error) {
        if (
          !this.$v.user.userNameAr.required &&
          !this.$v.user.userNameEn.required
        )
          errors.push(this.$t("validation.fieldIsRequired"));
        else if (
          this.$v.user.userNameAr.required &&
          !this.$v.user.userNameAr.isValidNameAr
        )
          errors.push(this.$t("validation.nameIsRequiredInAr"));
      }
      return errors;
    },
    errors_userNameEn() {
      let errors = [];
      if (this.$v.user.userNameEn.$error) {
        if (
          !this.$v.user.userNameAr.required &&
          !this.$v.user.userNameEn.required
        )
          errors.push(this.$t("validation.fieldIsRequired"));
        else if (
          this.$v.user.userNameEn.required &&
          !this.$v.user.userNameEn.isValidNameEn
        )
          errors.push(this.$t("validation.nameIsRequiredInEn"));
      }
      return errors;
    },
    errors_userDescriptionAr() {
      let errors = [];
      if (this.$v.user.userDescriptionAr.$error) {
        if (!this.$v.user.userDescriptionAr.isValidTextAr)
          errors.push(this.$t("validation.fieldIsRequiredInAr"));
      }
      return errors;
    },
    errors_userDescriptionEn() {
      let errors = [];
      if (this.$v.user.userDescriptionEn.$error) {
        if (!this.$v.user.userDescriptionEn.isValidTextEn)
          errors.push(this.$t("validation.fieldIsRequiredInEn"));
      }
      return errors;
    },
  },
  methods: {
    async submitForm() {
      bottomSheetScrollToTop();
      this.$v.$touch();
      if (
        ((this.$v.user.userNameAr.required &&
          this.$v.user.userNameAr.isValidNameAr) ||
          (this.$v.user.userNameEn.required &&
            this.$v.user.userNameEn.isValidNameEn)) &&
        this.$v.user.userDescriptionAr.isValidTextAr &&
        this.$v.user.userDescriptionEn.isValidTextEn
      ) {
        this.$emit("submitForm");
      }
    },
  },
};
</script>
