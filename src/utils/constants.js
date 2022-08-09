export const BASE_URL = "https://api-pls-dev-1.3.premcoprecast.com";
export const USER_PLATFORM_SESSION_VERSION_NUMBER = "1.0";
export const ESTABLISHMENT_TOKEN = "f92dfb74-9cb9-44ad-b5ad-a946c3d1018f";

export const PAGE_SIZE = 50;
export const IMPOSSIBLE_TOKEN = 0;
export const MAX_ROWS_TEXTAREA = 100;
export const DEFAULT_DIGITS = 2;

export const STATUS = {
  SUCCESS: 200, // success operation
  INVALID_TOKEN: 498, //invalid token
  CATCH: 500, // catch
  NO_CONTENT: 204, // no data
  ERROR: 406, // validation
  VERSION: 306, // error version
  NO_INTERNET: 420, // error version
  INVALID_LOGIN_CODE: 499, // error login code
};

//#region DefaultPages & Languages
export const DEFAULT_PAGES = {
  notLoggedIn: "Home",
  loggedIn: "Users",
};

// ##duplicated in functions file
export const LANGUAGES = {
  default: "ar-EG",
  arEG: "ar-EG",
  enUS: "en-US",
  defaultCountryCode: "+20",
  defaultCountryCodeName: "EG",
};
//#endregion DefaultPages & Languages

// #region USERS
const USER_TYPE_TOKEN_SIMPOL = "UTT_";
export const USER_TYPE = {
  MasterAdmin: USER_TYPE_TOKEN_SIMPOL + "12400", // MasterAdmin مالك النظام
  Employee: USER_TYPE_TOKEN_SIMPOL + "12500", // Employee موظف
  Student: USER_TYPE_TOKEN_SIMPOL + "12800", // Student طالب
  VechileOwner: USER_TYPE_TOKEN_SIMPOL + "12900", // VechileOwner مالك المركبة
};
// #endregion USERS

// #region ActivationType
const ACTIVATION_TYPE_TOKEN_SIMPOL = "AST-";
export const ACTIVATION_TYPE = {
  default: ACTIVATION_TYPE_TOKEN_SIMPOL + "17400",
  Active: ACTIVATION_TYPE_TOKEN_SIMPOL + "17400",
  Archived: ACTIVATION_TYPE_TOKEN_SIMPOL + "17500",
  Blocked: ACTIVATION_TYPE_TOKEN_SIMPOL + "17600",
};
// #endregion ActivationType

export const VALIDATION = {
  MIN_LENGTH_NAME: 3,
  MAX_LENGTH_NAME: 400,
  MIN_LENGTH_TEXT: 0,
  MAX_LENGTH_TEXT: 1000000,
};

export const KEY_CODE = {
  backspace: 8,
  backspaceMob: 229,
  left: 37,
  up: 38,
  right: 39,
  down: 40,
};
