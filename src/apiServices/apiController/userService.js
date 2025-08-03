import apiService from "../apiService";

const apiPath = "/api/v1";

export const userService = {
  POST_LOGIN: (params) => {
    return apiService.post(`${apiPath}/login`, params);
  },
  POST_LOGOUT: (params) => {
    return apiService.post(`${apiPath}/login/logout`, params);
  },

  POST_SIGNUP: (params) => {
    return apiService.post(`${apiPath}/member/register`, params);
  },
};
// TEMPLATE
// GET_NEW_TEACHER_LIST: (queryString) => {
//   return apiService.get(
//     `${apiPath}/new-teacher${queryString ? queryString : ""}`
//   );
// },
// GET_NEW_TEACHER_DETAIL: (id) => {
//   return apiService.get(`${apiPath}/new-teacher/${id}`);
// },
// POST_TEACHER_HOMEWORK_CREATE: (params) => {
//   return apiService.post(`${apiPath}/homework/teacher`, params);
// },
// PUT_TEACHER_HOMEWORK_UPDATE: (id, params) => {
//   return apiService.put(`${apiPath}/homework/teacher/${id}`, params);
// },
// DELETE_CETIFICATE_DETAIL: (id) => {
//   return apiService.delete(`${apiPortalPath}/certificate/${id}`);
// },
