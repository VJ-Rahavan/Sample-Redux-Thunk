import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  voiceText: '',
  voiceModalState: false,
};

const voiceDetailsReducer = createSlice({
  name: 'voiceDetails',
  initialState,
  reducers: {
    storeVoiceText: (state, action) => {
      state.voiceText = action.payload;
    },
    storeVoiceModalState: (state, action) => {
      state.voiceModalState = action.payload;
    },
  },
});

export const {storeVoiceModalState, storeVoiceText} =
  voiceDetailsReducer.actions;

export default voiceDetailsReducer.reducer;
