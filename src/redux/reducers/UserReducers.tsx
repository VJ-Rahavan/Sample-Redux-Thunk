import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  userDetails: {},
};

const userDetailsReducer = createSlice({
  name: 'userDetails',
  initialState,
  reducers: {
    storeUserDetails: (state, action) => {
      state.userDetails = {...action.payload};
    },
  },
});

export const {storeUserDetails} = userDetailsReducer.actions;

export default userDetailsReducer.reducer;
