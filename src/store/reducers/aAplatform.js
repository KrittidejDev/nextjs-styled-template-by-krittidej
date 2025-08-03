import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {userService} from '../../apiService';

const initialState = {
  value: 0,
};

export const fetchUsers = createAsyncThunk(
  'aAplatform/fetchUsers',
  async (data, thunkAPI) => {
    // console.log('thunkAPI', thunkAPI.getState());
    thunkAPI.dispatch(increment());
    const res = await userService.POST_LOGIN(data);
    return res.status === 200 ? res : false;

    // try {
    //   const res = await userService.GET_CHECK_TOKEN_EXPIRE();
    //   return res.status === 200 ? res : false;
    // } catch (error) {
    //   return 'nono';
    // }
  },
);

export const aAplatformSlice = createSlice({
  name: 'aAplatform',
  initialState,
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
      return state;
    },
    decrement: state => {
      state.value -= 1;
      return state;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
      return state;
    },
  },
  // extraReducers(builder) {
  //   builder.addCase(fetchUsers.fulfilled, (state, action) => {
  //     console.log('state====>', state.posts, action);
  //     // return action.payload;
  //   });
  // },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} =
  aAplatformSlice.actions;

export default aAplatformSlice.reducer;
