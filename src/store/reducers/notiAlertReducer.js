import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const notiAlertSlice = createSlice({
  name: "notiAlertReducer",
  initialState,
  reducers: {
    setReduxNotiAlert: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setReduxNotiAlert } = notiAlertSlice.actions;

export default notiAlertSlice.reducer;
