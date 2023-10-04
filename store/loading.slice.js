import { createSlice } from '@reduxjs/toolkit';

const loaderState = {
  loading: false,
  sectionLoader: false,
};
const loadingSlice = createSlice({
  name: 'loading',
  initialState: loaderState,
  reducers: {
    startLoading: (state, { payload }) => {
      return { ...state, ...payload };
    },
    stopLoader: (state) => {
      return { ...state, ...loaderState };
    },
  },
});

export const { startLoading, stopLoader } = loadingSlice.actions;
export default loadingSlice.reducer;
