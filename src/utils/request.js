import axios from "axios";
import store from "./../store";
import { BASE_URL, STATUS } from "./constants";
import {
  getLanguage,
  getUserAuthorizeToken,
  checkOnlineStatus,
} from "./functions";
import i18n from "./../i18n";

axios.defaults.baseURL = BASE_URL;
axios.defaults.timeout = 60000;

const METHOD = {
  GET: "get",
  POST: "post",
};

async function request(url, method, params, config) {
  const qs = require("qs");
  const headers = {
    userAuthorizeToken: getUserAuthorizeToken(),
    authorizeLanguage: getLanguage(),
  };

  if (!checkOnlineStatus()) {
    let response = {
      data: {
        status: STATUS.NO_INTERNET,
        msg: i18n.t("internetConnectionFailed"),
      },
    };
    return response;
  } else {
    let response;
    switch (method) {
      case METHOD.POST:
        response = await axios.post(url, params, { headers, ...config });
        break;
      case METHOD.GET:
      default:
        response = await axios.get(url, {
          params,
          paramsSerializer: (params) => {
            return qs.stringify(params, { arrayFormat: "repeat" });
          },
          headers,
          ...config,
        });
        break;
    }
    return response;
  }
}

export { METHOD, request };
