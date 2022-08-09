import { METHOD, request } from "./../utils/request";
import { Users } from "./api";

async function getAll(params) {
  return request(Users.getAll, METHOD.GET, params);
}
async function add(data) {
  return request(Users.add, METHOD.POST, data);
}
async function update(data) {
  return request(Users.update, METHOD.POST, data);
}
async function finalDelete(data) {
  return request(Users.finalDelete, METHOD.POST, data);
}

export default {
  getAll,
  add,
  update,
  finalDelete,
};
