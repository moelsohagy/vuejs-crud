import PaginationData from "./PaginationData";

export default class BaseEntityModelFilter extends PaginationData {
  constructor() {
    super();
    this.setFilterInitialValue();
  }
  setFilterInitialValue() {
    this.filterStatus = true;
    this.textSearch = "";
    this.establishmentToken = "";
    this.creationDateTimeFrom = "";
    this.creationDateTimeTo = "";
    this.lastUpdateDateTimeFrom = "";
    this.lastUpdateDateTimeTo = "";
    this.lastArchiveDateTimeFrom = "";
    this.lastArchiveDateTimeTo = "";
    this.lastBlockedDateTimeFrom = "";
    this.lastBlockedDateTimeTo = "";
    this.creationDateTime = "";
    this.lastUpdateDateTime = "";
    this.lastArchiveDateTime = "";
    this.lastBlockedDateTime = "";
    this.createdByUserToken = "";
    this.lastUpdatedByUserToken = "";
    this.lastArchivedByUserToken = "";
    this.lastBlockedByUserToken = "";
    this.activationTypeTokens = [];
  }
  fillFilterData(data) {
    if (data) {
      this.activationTypeTokens =
        data.activationTypeTokens || this.activationTypeTokens;
      this.fillPaginationData(data);
    } else {
      this.setFilterInitialValue();
    }
  }
}
