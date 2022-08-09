export default class UserCreatedData {
  constructor() {
    this.setInitialValueUserCreatedData();
  }
  setInitialValueUserCreatedData() {
    this.userToken = "";
    this.userNameCurrent = "";
    this.fullCode = "";
    this.userPhoneWithCC = "";
    this.userImagePath = "";
    this.userTypeToken = "";
    this.userTypeNameCurrent = "";
    this.userJobToken = "";
    this.userJobNameCurrent = "";
    this.userJobImagePath = "";
    this.userSectorToken = "";
    this.userSectorNameCurrent = "";
    this.userSectorImagePath = "";
  }
  fillDataUserCreatedData(data) {
    if (data) {
      this.userToken = data.userToken || "";
      this.userNameCurrent = data.userNameCurrent || "";
      this.fullCode = data.fullCode || "";
      this.userPhoneWithCC = data.userPhoneWithCC || "";
      this.userImagePath = data.userImagePath || "";
      this.userTypeToken = data.userTypeToken || "";
      this.userTypeNameCurrent = data.userTypeNameCurrent || "";
      this.userJobToken = data.userJobToken || "";
      this.userJobNameCurrent = data.userJobNameCurrent || "";
      this.userJobImagePath = data.userJobImagePath || "";
      this.userSectorToken = data.userSectorToken || "";
      this.userSectorNameCurrent = data.userSectorNameCurrent || "";
      this.userSectorImagePath = data.userSectorImagePath || "";
    } else {
      this.setInitialValueUserCreatedData();
    }
  }
}
