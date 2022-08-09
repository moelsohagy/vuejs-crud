import {
  STATUS,
  BASE_URL,
  LANGUAGES,
  VIEW_TYPES,
  DEFAULT_DIGITS,
  USER_TYPE, LINK_TARGETS,
} from "./constants";
import store from "./../store";
import i18n from "./../i18n";
import LogoImg from "./../assets/images/logo.png";

//#region Date & Time
export const convertValueToMilliSeconds = (value, convertFrom) => {
  /*
  convertFrom :
  1 => Seconds case
  2 => Minutes case
  3 => Hours case
  4 => Days case
  */
  let response = {
    data: {
      status: STATUS.ERROR,
      msg: i18n.t("failedOperation"),
      data: "",
    },
  };
  value = value == "" || value == undefined ? 0 : value;
  if (isNaN(value)) {
    response.data.msg = value + " " + i18n.t("mustBeNumber");
    return response;
  }
  value = parseFloat(value);
  if (!Number.isInteger(value)) {
    response.data.msg = value + " " + i18n.t("mustBeInteger");
    return response;
  }
  switch (convertFrom) {
    case 1:
      if (value < 0 || value > 59) {
        response.data.msg =
          value + " " + i18n.t("mustBeGreaterThan0AndLessThan59");
        return response;
      }
      response.data.data = value * 1000;
      break;
    case 2:
      if (value < 0 || value > 59) {
        response.data.msg =
          value + " " + i18n.t("mustBeGreaterThan0AndLessThan59");
        return response;
      }
      response.data.data = value * 60 * 1000;
      break;
    case 3:
      if (value < 0 || value > 23) {
        response.data.msg =
          value + " " + i18n.t("mustBeGreaterThan0AndLessThan23");
        return response;
      }
      response.data.data = value * 60 * 60 * 1000;
      break;
    case 4:
      response.data.data = value * 24 * 60 * 60 * 1000;
      break;
    default:
      return response;
  }
  response.data.status = STATUS.SUCCESS;
  response.data.msg = i18n.t("successOperation");
  return response;
};
export const convertToMilliSeconds = (seconds, minutes, hours, days) => {
  let response = {
    data: {
      status: STATUS.SUCCESS,
      msg: i18n.t("successOperation"),
      data: "",
    },
  };
  let check1 = convertValueToMilliSeconds(seconds, 1);
  if (check1.data.status != STATUS.SUCCESS) return check1;

  let check2 = convertValueToMilliSeconds(minutes, 2);
  if (check2.data.status != STATUS.SUCCESS) return check2;

  let check3 = convertValueToMilliSeconds(hours, 3);
  if (check3.data.status != STATUS.SUCCESS) return check3;

  let check4 = convertValueToMilliSeconds(days, 4);
  if (check4.data.status != STATUS.SUCCESS) return check4;

  response.data.data =
    check1.data.data + check2.data.data + check3.data.data + check4.data.data;
  return response;
};
export const convertMilliSecondsToTime = (value) => {
  let response = {
    data: {
      status: STATUS.ERROR,
      msg: i18n.t("failedOperation"),
      data: "",
    },
  };
  value = value == "" || value == undefined ? 0 : value;
  if (isNaN(value)) {
    value = 0;
  }
  value = parseFloat(value);
  if (!Number.isInteger(value)) {
    value = 0;
  }
  if (value < 0) value = 0;

  var days = Math.floor(value / (24 * 60 * 60 * 1000));
  var remainderOfDays = value % (24 * 60 * 60 * 1000);
  var hours = Math.floor(remainderOfDays / (60 * 60 * 1000));
  var remainderOfHours = remainderOfDays % (60 * 60 * 1000);
  var minutes = Math.floor(remainderOfHours / (60 * 1000));
  var remainderOfMinutes = remainderOfHours % (60 * 1000);
  var seconds = Math.round(remainderOfMinutes / 1000);

  var string = `${days} ${i18n.t("days")}, `;
  string += `${hours} ${i18n.t("hours")}, `;
  string += `${minutes} ${i18n.t("minutes")}, `;
  string += `${seconds} ${i18n.t("seconds")}`;
  let data = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    string: string,
  };

  response.data.status = STATUS.SUCCESS;
  response.data.msg = i18n.t("successOperation");
  response.data.data = data;
  return response;
};
export const convertTimeAndDaysToString = (seconds, minutes, hours, days) => {
  let response = {
    data: {
      status: STATUS.SUCCESS,
      msg: i18n.t("successOperation"),
      data: "",
    },
  };
  seconds = seconds == "" || seconds == undefined ? 0 : seconds;
  if (isNaN(seconds)) seconds = 0;
  seconds = parseFloat(seconds);
  if (seconds < 0) seconds = 0;

  minutes = minutes == "" || minutes == undefined ? 0 : minutes;
  if (isNaN(minutes)) minutes = 0;
  minutes = parseFloat(minutes);
  if (minutes < 0) minutes = 0;

  hours = hours == "" || hours == undefined ? 0 : hours;
  if (isNaN(hours)) hours = 0;
  hours = parseFloat(hours);
  if (hours < 0) hours = 0;

  days = days == "" || days == undefined ? 0 : days;
  if (isNaN(days)) days = 0;
  days = parseFloat(days);
  if (days < 0) days = 0;

  var string = `${days} ${i18n.t("days")}, `;
  string += `${hours} ${i18n.t("hours")}, `;
  string += `${minutes} ${i18n.t("minutes")}, `;
  string += `${seconds} ${i18n.t("seconds")}`;
  let data = {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
    string: string,
  };

  response.data.data = data;
  return response;
};

export const getDayOfDate = (date = "") => {
  let dayNumber = "";
  if (date) dayNumber = new Date(date).getDay();
  else dayNumber = new Date().getDay();

  let day = "";
  if (dayNumber == 0) day = i18n.t("daysOfWeek.Sunday");
  else if (dayNumber == 1) day = i18n.t("daysOfWeek.Monday");
  else if (dayNumber == 2) day = i18n.t("daysOfWeek.Tuesday");
  else if (dayNumber == 3) day = i18n.t("daysOfWeek.Wednesday");
  else if (dayNumber == 4) day = i18n.t("daysOfWeek.Thursday");
  else if (dayNumber == 5) day = i18n.t("daysOfWeek.Friday");
  else if (dayNumber == 6) day = i18n.t("daysOfWeek.Saturday");
  return day;
};
export const customFormateDateTime = (date, time) => {
  if (date && time) return `${date} - ${time}`;
  else return i18n.t("notFound");
};
export const getObjectOfDateTime = (dateTime = "") => {
  let response = {
    dateTimeUTC: "",
    dateTime: "",
    dateTime12: "",
    date: "",
    time: "",
    time12: "",
    timeCustomized: "",
  };

  // let theDateTime = dateTime ? new Date(dateTime) : new Date();
  let theDateTime = new Date(dateTime);
  if (!dateTime || theDateTime == "Invalid Date") return response;

  let year = theDateTime.getFullYear();
  let month = theDateTime.getMonth() + 1;
  let day = theDateTime.getDate();
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  let hours = theDateTime.getHours();
  let minutes = theDateTime.getMinutes();
  let seconds = theDateTime.getSeconds();
  let m = "AM";
  let hours12;
  if (hours >= 12) {
    m = "PM";
    hours12 = hours % 12 < 10 ? `0${hours % 12}` : hours % 12;
  } else {
    hours12 = hours % 12 < 10 ? `0${hours}` : hours;
  }
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  let date = `${year}/${month}/${day}`;
  let time24 = `${hours}:${minutes}:${seconds}`;
  let time12 = `${hours12}:${minutes}:${seconds} ${m}`;
  let timeCustomized = `${hours12}:${minutes} ${m}`;
  let fullDateTime = `${date} ${time24}`;
  let fullDateTime12 = `${date} ${time12}`;

  response.dateTimeUTC = theDateTime;
  response.dateTime = fullDateTime;
  response.dateTime12 = fullDateTime12;
  response.date = date;
  response.time = time24;
  response.time12 = time12;
  response.timeCustomized = timeCustomized;
  return response;
};
//#endregion Date & Time

//#region General
export const setDataMultiLang = (lang, dataAr, dataEn, dataUnd = "") => {
  if (lang == LANGUAGES.arEG) return dataAr;
  else if (lang == LANGUAGES.enUS) return dataEn;
  else return "";
};
export const isDataExist = (data) => {
  return data || data === 0 ? data : i18n.t("notFound");
};
export const moneyFormat = (money) => {
  return (typeof money !== "undefined" ? money : 0) + i18n.t("currency");
};
export const numberToAr = (number) => {
  if (number.toString().indexOf("0") > -1)
    number = number.toString().replace(/0/g, "٠");
  if (number.toString().indexOf("1") > -1)
    number = number.toString().replace(/1/g, "١");
  if (number.toString().indexOf("2") > -1)
    number = number.toString().replace(/2/g, "٢");
  if (number.toString().indexOf("3") > -1)
    number = number.toString().replace(/3/g, "٣");
  if (number.toString().indexOf("4") > -1)
    number = number.toString().replace(/4/g, "٤");
  if (number.toString().indexOf("5") > -1)
    number = number.toString().replace(/5/g, "٥");
  if (number.toString().indexOf("6") > -1)
    number = number.toString().replace(/6/g, "٦");
  if (number.toString().indexOf("7") > -1)
    number = number.toString().replace(/7/g, "٧");
  if (number.toString().indexOf("8") > -1)
    number = number.toString().replace(/8/g, "٨");
  if (number.toString().indexOf("9") > -1)
    number = number.toString().replace(/9/g, "٩");
  return number;
};
export const numberToEn = (number) => {
  if (number.toString().indexOf("٠") > -1)
    number = number.toString().replace(/٠/g, "0");
  if (number.toString().indexOf("١") > -1)
    number = number.toString().replace(/١/g, "1");
  if (number.toString().indexOf("٢") > -1)
    number = number.toString().replace(/٢/g, "2");
  if (number.toString().indexOf("٣") > -1)
    number = number.toString().replace(/٣/g, "3");
  if (number.toString().indexOf("٤") > -1)
    number = number.toString().replace(/٤/g, "4");
  if (number.toString().indexOf("٥") > -1)
    number = number.toString().replace(/٥/g, "5");
  if (number.toString().indexOf("٦") > -1)
    number = number.toString().replace(/٦/g, "6");
  if (number.toString().indexOf("٧") > -1)
    number = number.toString().replace(/٧/g, "7");
  if (number.toString().indexOf("٨") > -1)
    number = number.toString().replace(/٨/g, "8");
  if (number.toString().indexOf("٩") > -1)
    number = number.toString().replace(/٩/g, "9");
  return number;
};
export const getDeviceName = () => {
  return navigator.userAgent;
};
export const getBrowserName = () => {
  let userAgent = navigator.userAgent;

  if (userAgent.includes("Firefox") && !userAgent.includes("Seamonkey"))
    return "Firefox";
  else if (userAgent.includes("Seamonkey")) return "Seamonkey";
  else if (userAgent.includes("OPR") || userAgent.includes("Opera"))
    return "Opera";
  else if (userAgent.includes("MSIE") || userAgent.includes("Trident"))
    return "Internet Explorer";
  else if (userAgent.includes("Chrome") && !userAgent.includes("Chromium"))
    return "Chrome";
  else if (userAgent.includes("Chromium")) return "Chromium";
  else if (
    userAgent.includes("Safari") &&
    (!userAgent.includes("Chrome") || !userAgent.includes("Chromium"))
  )
    return "Safari";
  else return "Unkonwn";
};
export const checkIfImageExists = (url, callback) => {
  const img = new Image();
  img.src = url;
  if (img.complete) {
    callback(true);
  } else {
    img.onload = () => callback(true);
    img.onerror = () => callback(false);
  }
};

export const objectToFormData = (object = {}) => {
  let form_data = new FormData();

  for (let key in object) {
    if (typeof object[key] == "object") {
      if (Array.isArray(object[key])) {
        for (let arrKey in object[key]) {
          if (typeof object[key][arrKey] == "object") {
            for (let objKey in object[key][arrKey]) {
              form_data.append(
                `${key}[${arrKey}].${objKey}`,
                object[key][arrKey][objKey]
              );
            }
          } else {
            form_data.append(`${key}[${arrKey}]`, object[key][arrKey]);
          }
        }
      } else if (object[key] == null) {
        // nothing
      } else if (object[key] instanceof File) {
        // (object[key] instanceof File) OR (typeof object[key].name == "string")
        form_data.append(key, object[key]);
      } else {
        for (let objKey in object[key]) {
          form_data.append(`${key}.${objKey}`, object[key][objKey]);
        }
      }
    } else {
      form_data.append(key, object[key]);
    }
  }
  return form_data;
};

export const DEFAULT_QUERY_SELECTORS = {
  appContent: ".app-content",
  bottomSheet: ".bottom-sheet__content-data",
};
export const scrollToTop = (selectors = "") => {
  const allSelectors = document.querySelectorAll(selectors);
  if (allSelectors != undefined && allSelectors.length != 0) {
    allSelectors.forEach(function (item) {
      item.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
};
export const appContentScrollToTop = () => {
  scrollToTop(DEFAULT_QUERY_SELECTORS.appContent);
};
export const bottomSheetScrollToTop = () => {
  scrollToTop(DEFAULT_QUERY_SELECTORS.bottomSheet);
};
export const checkOnlineStatus = () => {
  return navigator.onLine;
  // const checkOnlineStatus = async () => {
  //   try {
  //     const online = await fetch("/1pixel.png");
  //     return online.status >= 200 && online.status < 300; // either true or false
  //   } catch (err) {
  //     return false; // definitely offline
  //   }
  // };
};

export const approximate = (num, digits = DEFAULT_DIGITS) => {
  return parseFloat(num.toFixed(digits));
};
//#endregion General

//#region lang
export const getValidLanguage = (lang, withoutUndLang = false) => {
  switch (lang) {
    case LANGUAGES.arEG:
      return LANGUAGES.arEG;
    case LANGUAGES.enUS:
      return LANGUAGES.enUS;
    case LANGUAGES.und:
      if (withoutUndLang == true) return LANGUAGES.default;
      else return LANGUAGES.und;
    case LANGUAGES.default:
    default:
      return LANGUAGES.default;
  }
};
export const setLanguage = (language = LANGUAGES.default) => {
  language = getValidLanguage(language, false);
  localStorage.setItem("userLanguage", language);
  window.location.reload();
};
export const getLanguage = () => {
  let appLanguage = localStorage.getItem("userLanguage");
  return getValidLanguage(appLanguage, false);
};
export const getUserAuthorizeToken = () => {
  return store.getters.userAuthorizeToken || "";
};
//#endregion lang

//#region api
export const viewFileFromServer = (filePath) => {
  window.open(`${BASE_URL}${filePath}`, "_blank");
};
export const fullPathFileFromServer = (filePath, defaultFile = "") => {
  if (filePath) return `${BASE_URL}${filePath}`;
  else if (defaultFile) return defaultFile;
  else return LogoImg;
};
//#endregion api

export const numToStrOfXDigits = (number, digits = 1) => {
  if (String(number).length >= digits) {
    return `${number}`;
  } else {
    let zerosString = "";
    for (let i = 0; i < digits - String(number).length; i++) zerosString += "0";
    return `${zerosString}${number}`;
  }
};
