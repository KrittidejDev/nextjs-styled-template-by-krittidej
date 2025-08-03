import axios from "axios";
import { BASE_API } from "./apiConfig";

const getConfig = (token) => {
  let config;
  if (token) {
    config = {
      baseURL: BASE_API,
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    };
  } else {
    config = {
      baseURL: BASE_API,
      headers: {
        "Content-Type": "application/json",
        token: token,
      },
    };
  }

  return config;
};

const getConfigFormData = (token, callback) => {
  const config = {
    baseURL: BASE_API,
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
      token: token,
    },
    onUploadProgress: function (progressEvent) {
      let percentCompleted = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total
      );
      console.log("upload percent", percentCompleted);
      callback && callback(percentCompleted);
    },
  };
  return config;
};

const axiosSuccess = (result) => {
  // console.log('axios success =>', result)
  return result.data;
};

const axiosError = (error) => {
  console.log("axios error =>", error);
  // return error.response.data;
  // if (error?.code === "ERR_NETWORK") {
  //   toast.error(
  //     i18n.language === "en"
  //       ? "Your account has been logged in from a new device"
  //       : "มีการเข้าสู่ระบบบัญชีของคุณจากอุปกรณ์อื่น"
  //   );
  //   store.dispatch(setLogoutThunk());
  //   Router.push("/");
  // }
  return error.response;
};

const axiosService = async (type, url, params, callback) => {
  const config = getConfig(localStorage.getItem("token"));
  const configFormData = getConfigFormData(
    localStorage.getItem("token"),
    callback
  );
  switch (type) {
    case "get":
      if (params) config.params = params;
      return axios.get(url, config).then(axiosSuccess).catch(axiosError);
    case "getDownload":
      if (params) config.params = params;
      return axios
        .get(url, { ...config, responseType: "blob" })
        .then(axiosSuccess)
        .catch(axiosError);
    case "post":
      return axios
        .post(url, params, config)
        .then(axiosSuccess)
        .catch(axiosError);
    case "put":
      return axios
        .put(url, params, config)
        .then(axiosSuccess)
        .catch(axiosError);
    case "patch":
      return axios
        .patch(url, params, config)
        .then(axiosSuccess)
        .catch(axiosError);
    case "delete":
      return axios
        .delete(url, { ...config, data: params })
        .then(axiosSuccess)
        .catch(axiosError);
    case "post_formdata":
      return axios
        .post(url, params, configFormData)
        .then(axiosSuccess)
        .catch(axiosError);
    case "put_formdata":
      return axios
        .put(url, params, configFormData)
        .then(axiosSuccess)
        .catch(axiosError);

    default:
      return false;
  }
};

const Export = {
  get: (url, params) => axiosService("get", url, params),
  getDownload: (url, params) => axiosService("getDownload", url, params),
  post: (url, params) => axiosService("post", url, params),
  put: (url, params) => axiosService("put", url, params),
  delete: (url, params) => axiosService("delete", url, params),
  post_formdata: (url, params, callback) =>
    axiosService("post_formdata", url, params, callback),
  put_formdata: (url, params, callback) =>
    axiosService("put_formdata", url, params, callback),
  patch: (url, params) => axiosService("patch", url, params),
};

export default Export;
