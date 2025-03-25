import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findApi } from "../../../api/api";

export interface City {
  iso2: string;
  name: string;
  _id: string;
}

interface CityListState {
  cityList: City[];
  errors: Partial<City>;
  isLoading: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  errorMessage: string | null;
}

const initialState: CityListState = {
  cityList: [],
  errors: {},
  isLoading: false,
  status: "idle",
  errorMessage: null,
};

export const fetchCityList = createAsyncThunk<
  City[],
  { countryIso2: string; stateIso2: string },
  { rejectValue: Partial<City> }
>(
  "auth/fetchCityList",
  async ({ countryIso2, stateIso2 }, { rejectWithValue }) => {
    try {
      const response = await findApi(
        `auth/getcityname?country=${countryIso2}&state=${stateIso2}`
      );
      return response.data;
    } catch (error) {
      return rejectWithValue({});
    }
  }
);

const citySlice = createSlice({
  name: "city",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCityList.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
        state.status = "loading";
      })
      .addCase(
        fetchCityList.fulfilled,
        (state, action: PayloadAction<City[]>) => {
          state.isLoading = false;
          state.status = "succeeded";
          state.cityList = action.payload;
          state.errors = {};
          state.errorMessage = null;
        }
      )
      .addCase(fetchCityList.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.errors = action.payload || {};
      });
  },
});

export default citySlice.reducer;
