import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const authenSlice = createSlice({
  name: "authenReducer",
  initialState,
  reducers: {
    setReduxAuthen: (state, action) => {
      state = action.payload;
      return state;
    },
    setReduxAuthenClear: (state) => {
      state = false;
      return state;
    },
  },
});

export const { setReduxAuthen, setReduxAuthenClear } = authenSlice.actions;

export default authenSlice.reducer;
