import BaseEntityModelFilter from "./../general/BaseEntityModelFilter";

export default class UsersFilter extends BaseEntityModelFilter {
  constructor() {
    super();
    this.setInitialValue();
  }
  setInitialValue() {
    this.userTypeToken = "";
    this.userToken = "";
  }
  fillData(data) {
    if (data) {
      this.fillFilterData(data);
      this.userTypeToken = data.userTypeToken || "";
      this.userToken = data.userToken || "";
    }
  }
}
