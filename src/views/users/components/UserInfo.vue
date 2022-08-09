<template>
  <CustomBottomSheet
    :refName="'UserInfo'"
    size="xl"
    :headerText="$t('Users.data')"
    :headerIcon="user.icon"
  >
    <div class="row">
      <DataLabelGroup
        :className="'col-md-6'"
        :value="user.fullCode"
        :title="$t('Users.code')"
        :imgName="'code.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="user.userNameAr"
        :title="$t('Users.nameAr')"
        :imgName="'users.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="user.userNameEn"
        :title="$t('Users.nameEn')"
        :imgName="'users.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="user.userNameUnd"
        :title="$t('Users.nameUnd')"
        :imgName="'users.svg'"
      />

      <DataLabelGroup
        :className="'col-md-6'"
        :value="user.userDescriptionAr"
        :title="$t('Users.descriptionAr')"
        :imgName="'description.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="user.userDescriptionEn"
        :title="$t('Users.descriptionEn')"
        :imgName="'description.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="user.userDescriptionUnd"
        :title="$t('Users.descriptionUnd')"
        :imgName="'description.svg'"
      />
      <DataLabelGroup
        :className="'col-md-6'"
        :value="user.userNotes"
        :title="$t('notes')"
        :imgName="'notes.svg'"
      />
    </div>
  </CustomBottomSheet>
</template>

<script>
import CustomBottomSheet from "./../../../../../components/general/CustomBottomSheet.vue";
import DataLabelGroup from "./../../../../../components/general/DataLabelGroup.vue";

export default {
  components: {
    CustomBottomSheet,
    DataLabelGroup,
  },
  props: ["user"],
};
</script>
