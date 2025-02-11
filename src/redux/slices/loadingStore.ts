import { createSlice } from "@reduxjs/toolkit";

export interface loadingState {
  loading: boolean;
}
const initialState: loadingState = {
  loading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    isLoading: (state) => {
      state.loading = true;
    },
    isStopLoading: (state) => {
      state.loading = false;
    },
  },
});
export const { isLoading, isStopLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
