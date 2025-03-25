import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { findApi } from "../../../api/api";

export interface State {
  iso2: string;
  name: string;
  _id: string;
}

interface StateListState {
  stateList: State[];
  errors: Partial<State>;
  isLoading: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  errorMessage: string | null;
}

const initialState: StateListState = {
  stateList: [],
  errors: {},
  isLoading: false,
  status: "idle",
  errorMessage: null,
};

export const fetchStateList = createAsyncThunk<
  State[],
  string,
  { rejectValue: Partial<State> }
>("auth/fetchStateList", async (iso2, { rejectWithValue }) => {
  try {
    const response = await findApi(`${`auth/getstatename?country=${iso2}`}`);
    return response.data;
  } catch (error: any) {
    return rejectWithValue({});
  }
});

const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStateList.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
        state.status = "loading";
      })
      .addCase(
        fetchStateList.fulfilled,
        (state, action: PayloadAction<State[]>) => {
          state.isLoading = false;
          state.status = "succeeded";
          state.stateList = action.payload;
          state.errors = {};
          state.errorMessage = null;
        }
      )
      .addCase(fetchStateList.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.errors = action.payload || {};
      });
  },
});

export default stateSlice.reducer;
