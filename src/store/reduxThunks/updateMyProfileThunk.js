import { createAsyncThunk } from "@reduxjs/toolkit";
import { userService } from "@/apiServices";
import { setReduxAuthen } from "@/store/reducers/authenReducer";

export const setUpdateMyProfileThunk = createAsyncThunk(
  "setUpdateMyProfileThunk/clear",
  async (data, thunkAPI) => {
    let resProfile = await userService.GET_CUSTOMER_PROFILE();
    if (resProfile && resProfile.statusCode === 1) {
      thunkAPI.dispatch(setReduxAuthen(resProfile.results));
      return { status: 200, data: resProfile.results };
    } else {
      return { status: 400, messages: res.messages };
    }
  }
);
