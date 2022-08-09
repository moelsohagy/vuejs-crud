import { METHOD, request } from "./../utils/request";
import { Auth } from "./api";

async function login(params) {
  return request(Auth.login, METHOD.POST, params);
}

export default { login };
