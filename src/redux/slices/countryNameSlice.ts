import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findApi } from "../../../api/api";

export interface Country {
  currency: string;
  id: string;
  iso: string;
  iso2: string;
  name: string;
  _id: string;
}

interface CountryListState {
  countryList: Country[];
  errors: Partial<Country>;
  isLoading: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  errorMessage: string | null;
}

const initialState: CountryListState = {
  countryList: [],
  errors: {},
  isLoading: false,
  status: "idle",
  errorMessage: null,
};

export const fetchCountryList = createAsyncThunk<
  Country[],
  void,
  { rejectValue: Partial<Country> }
>("auth/fetchCountryList", async (_, { rejectWithValue }) => {
  try {
    const response = await findApi("/auth/getcountryname");
    return response.data;
  } catch (error: any) {
    return rejectWithValue({});
  }
});

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountryList.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
        state.status = "loading";
      })
      .addCase(
        fetchCountryList.fulfilled,
        (state, action: PayloadAction<Country[]>) => {
          state.isLoading = false;
          state.status = "succeeded";
          state.countryList = action.payload;
          state.errors = {};
          state.errorMessage = null;
        }
      )
      .addCase(fetchCountryList.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.errors = action.payload || {};
      });
  },
});

export default countrySlice.reducer;
