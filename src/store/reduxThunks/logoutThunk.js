import { createAsyncThunk } from "@reduxjs/toolkit";
import { setReduxAuthenClear } from "../reducers/authenReducer";

export const setLogoutThunk = createAsyncThunk(
  "setLogoutThunk/clear",
  (data, thunkAPI) => {
    localStorage.clear();
    thunkAPI.dispatch(setReduxAuthenClear());
    return true;
  }
);
