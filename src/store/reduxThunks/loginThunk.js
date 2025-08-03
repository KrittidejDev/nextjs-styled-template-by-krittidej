import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "@/apiServices";
import { setReduxAuthen } from "@/store/reducers/authenReducer";
import { sendGTMEvent } from "@next/third-parties/google";

const renderLoginApi = (e) => {
  return new Promise(async (resolve) => {
    let res;
    switch (e.service) {
      case "oho_system":
        res = await userService.POST_LOGIN(e);
        resolve(res);
        break;
      case "google":
        res = await userService.POST_GOOGLE_LOGIN(e.access_token, e);
        resolve(res);
        break;
      case "facebook":
        res = await userService.POST_FACEBOOK_LOGIN(e.access_token, e);
        resolve(res);
        break;
      case "apple":
        res = await userService.POST_APPLE_LOGIN(e.access_token, e);
        resolve(res);
        break;
      default:
        break;
    }
  });
};

export const setLoginThunk = createAsyncThunk(
  "setLoginThunk/login",
  async (data, thunkAPI) => {
    let res = await renderLoginApi(data);
    if (res && res.statusCode === 1) {
      sendGTMEvent({
        event: "login",
        authentication_method:
          data.service === "oho_system" ? "email" : data.service,
        user_id: res.results.uid,
      });
      localStorage.setItem("token", res.results.token);
      let resProfile = await userService.GET_CUSTOMER_PROFILE();
      if (resProfile && resProfile.statusCode === 1) {
        thunkAPI.dispatch(setReduxAuthen(resProfile.results));
        return { status: 200, data: resProfile.results };
      } else {
        return { status: 400, messages: res.messages };
      }
    } else {
      return { status: 400, messages: res.messages };
    }
  }
);
