import UserCreatedData from "./UserCreatedData";

export default class BaseEntityModel {
  constructor() {
    this.setInitialValueBaseEntityModel();
  }
  setInitialValueBaseEntityModel() {
    this.dailyCode = "";
    this.fullCode = "";
    this.activationTypeToken = "";
    this.activationTypeNameCurrent = "";
    this.activationTypeNameAr = "";
    this.activationTypeNameEn = "";
    this.activationTypeNameUnd = "";
    this.timeZoneName = "";
    this.establishmentToken = "";

    this.userCreatedData = new UserCreatedData();
    this.createdByUserToken = "";
    this.creationDateTime = "";
    this.creationDateTimeCustomized = "";
    this.creationDate = "";
    this.creationTime = "";

    this.userLastUpdatedData = new UserCreatedData();
    this.lastUpdatedByUserToken = "";
    this.lastUpdateDateTime = "";
    this.lastUpdateDateTimeCustomized = "";
    this.lastUpdateDate = "";
    this.lastUpdateTime = "";

    this.userLastActivedData = new UserCreatedData();
    this.lastActivedByUserToken = "";
    this.lastActivedDateTime = "";
    this.lastActivedDateTimeCustomized = "";
    this.lastActivedDate = "";
    this.lastActivedTime = "";

    this.userLastArchivedData = new UserCreatedData();
    this.lastArchivedByUserToken = "";
    this.lastArchivedDateTime = "";
    this.lastArchivedDateTimeCustomized = "";
    this.lastArchivedDate = "";
    this.lastArchivedTime = "";

    this.userLastBlockedData = new UserCreatedData();
    this.lastBlockedByUserToken = "";
    this.lastBlockedDateTime = "";
    this.lastBlockedDateTimeCustomized = "";
    this.lastBlockedDate = "";
    this.lastBlockedTime = "";
  }
  fillDataBaseEntityModel(data) {
    if (data) {
      this.dailyCode = data.dailyCode || "";
      this.fullCode = data.fullCode || "";
      this.activationTypeToken = data.activationTypeToken || "";
      this.activationTypeNameCurrent = data.activationTypeNameCurrent || "";
      this.activationTypeNameAr = data.activationTypeNameAr || "";
      this.activationTypeNameEn = data.activationTypeNameEn || "";
      this.activationTypeNameUnd = data.activationTypeNameUnd || "";
      this.timeZoneName = data.timeZoneName || "";
      this.establishmentToken = data.establishmentToken || "";

      this.userCreatedData.fillDataUserCreatedData(
        data.userCreatedData || new UserCreatedData()
      );
      this.createdByUserToken = data.createdByUserToken || "";
      this.creationDateTime = data.creationDateTime || "";
      this.creationDateTimeCustomized = data.creationDateTimeCustomized || "";
      this.creationDate = data.creationDate || "";
      this.creationTime = data.creationTime || "";

      this.userLastUpdatedData.fillDataUserCreatedData(
        data.userLastUpdatedData || new UserCreatedData()
      );
      this.lastUpdatedByUserToken = data.lastUpdatedByUserToken || "";
      this.lastUpdateDateTime = data.lastUpdateDateTime || "";
      this.lastUpdateDateTimeCustomized =
        data.lastUpdateDateTimeCustomized || "";
      this.lastUpdateDate = data.lastUpdateDate || "";
      this.lastUpdateTime = data.lastUpdateTime || "";

      this.userLastActivedData.fillDataUserCreatedData(
        data.userLastActivedData || new UserCreatedData()
      );
      this.lastActivedByUserToken = data.lastActivedByUserToken || "";
      this.lastActivedDateTime = data.lastActivedDateTime || "";
      this.lastActivedDateTimeCustomized =
        data.lastActivedDateTimeCustomized || "";
      this.lastActivedDate = data.lastActivedDate || "";
      this.lastActivedTime = data.lastActivedTime || "";

      this.userLastArchivedData.fillDataUserCreatedData(
        data.userLastArchivedData || new UserCreatedData()
      );
      this.lastArchivedByUserToken = data.lastArchivedByUserToken || "";
      this.lastArchivedDateTime = data.lastArchivedDateTime || "";
      this.lastArchivedDateTimeCustomized =
        data.lastArchivedDateTimeCustomized || "";
      this.lastArchivedDate = data.lastArchivedDate || "";
      this.lastArchivedTime = data.lastArchivedTime || "";

      this.userLastBlockedData.fillDataUserCreatedData(
        data.userLastBlockedData || new UserCreatedData()
      );
      this.lastBlockedByUserToken = data.lastBlockedByUserToken || "";
      this.lastBlockedDateTime = data.lastBlockedDateTime || "";
      this.lastBlockedDateTimeCustomized =
        data.lastBlockedDateTimeCustomized || "";
      this.lastBlockedDate = data.lastBlockedDate || "";
      this.lastBlockedTime = data.lastBlockedTime || "";
    } else {
      this.setInitialValueBaseEntityModel();
    }
  }
}
