export default class ActivationStatistics {
  constructor() {
    this.setInitialValue();
  }
  setInitialValue() {
    this.totalCount = 0;
    this.totalActiveCount = 0;
    this.totalArchivedCount = 0;
    this.totalBlockedCount = 0;
    this.totalActivePercentage = 0;
    this.totalActivePercentageText = "";
    this.totalArchivedPercentage = 0;
    this.totalArchivedPercentageText = "";
    this.totalBlockedPercentage = 0;
    this.totalBlockedPercentageText = "";
  }
  fillData(data) {
    if (data) {
      this.totalCount = data.totalCount || 0;
      this.totalActiveCount = data.totalActiveCount || 0;
      this.totalArchivedCount = data.totalArchivedCount || 0;
      this.totalBlockedCount = data.totalBlockedCount || 0;
      this.totalActivePercentage = data.totalActivePercentage || 0;
      this.totalActivePercentageText = data.totalActivePercentageText || "";
      this.totalArchivedPercentage = data.totalArchivedPercentage || 0;
      this.totalArchivedPercentageText = data.totalArchivedPercentageText || "";
      this.totalBlockedPercentage = data.totalBlockedPercentage || 0;
      this.totalBlockedPercentageText = data.totalBlockedPercentageText || "";
    } else {
      this.setInitialValue();
    }
  }
}
