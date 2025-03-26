"use client";

import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../slices/loadingStore";
import countryReducer from "../slices/countryNameSlice";
import stateReducer from "../slices/stateNameSlice";
import cityReducer from "../slices/cityNameSlice";
import uploadFile from "../slices/uploadFileSlice";
export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    country: countryReducer,
    state: stateReducer,
    city: cityReducer,
    uploadFile: uploadFile,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
