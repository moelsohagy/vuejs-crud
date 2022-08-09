import ActivationStatistics from "./../general/ActivationStatistics";
import User from "./User";
import UsersFilter from "./UsersFilter";

export default class Users {
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.status = 0;
    this.msg = "";
    this.activationStatistics = new ActivationStatistics();
    this.usersData = [];
    this.user = new User();
    this.filterData = new UsersFilter();
  }
  fillData(data) {
    if (data) {
      this.status = data.status;
      this.msg = data.msg;
      this.activationStatistics.fillData(data.activationStatistics);
      let filter = { ...this.filterData, ...data.pagination };
      this.filterData.fillData(filter);
      this.usersData = data.usersData || [];
    } else {
      this.setInitialValue();
    }
  }
}
