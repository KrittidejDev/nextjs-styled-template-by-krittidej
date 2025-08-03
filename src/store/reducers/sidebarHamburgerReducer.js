import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isExpand: true,
};

export const sidebarHamburgerSlice = createSlice({
  name: "authenReducer",
  initialState,
  reducers: {
    setReduxExpandCollapeSidebar: (state, action) => {
      state = { isExpand: !state.isExpand };
      return state;
    },
  },
});

export const { setReduxExpandCollapeSidebar } = sidebarHamburgerSlice.actions;

export default sidebarHamburgerSlice.reducer;
