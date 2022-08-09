import { PAGE_SIZE } from "./../../utils/constants";

export default class PaginationData {
  constructor() {
    this.setPaginationInitialValue();
  }
  setPaginationInitialValue() {
    this.totalPages = 1;
    this.totalItems = 0;
    this.countItemsInPage = 0;
    this.selfPage = 1;
    this.page = 1;
    this.firstPage = 1;
    this.prevPage = 0;
    this.nextPage = 0;
    this.lastPage = 1;
    this.pageSize = PAGE_SIZE;
    this.paginationStatus = true;
    this.listSort = [];
    this.sortTokens = [];
    this.currentIndex = 0;
  }
  fillPaginationData(data) {
    if (data) {
      this.totalPages = data.totalPages || 1;
      this.totalItems = data.totalItems || 0;
      this.countItemsInPage = data.countItemsInPage || 0;
      this.selfPage = data.selfPage || 1;
      this.page = data.selfPage || 1;
      this.firstPage = data.firstPage || 1;
      this.prevPage = data.prevPage || 0;
      this.nextPage = data.nextPage || 0;
      this.lastPage = data.lastPage || 1;
      this.pageSize = data.pageSize || this.pageSize || PAGE_SIZE;
      this.paginationStatus = data.paginationStatus || this.paginationStatus;
      this.listSort = data.listSort || this.listSort;
      this.sortTokens = data.sortTokens || this.sortTokens;
      this.currentIndex = data.selfPage
        ? (data.selfPage - 1) * (this.pageSize || PAGE_SIZE)
        : 0;
    } else {
      this.setPaginationInitialValue();
    }
  }
}
