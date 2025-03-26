import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createApi } from "../../../api/api";

interface UploadFileState {
  url: string;
  errors: string;
  isLoading: boolean;
  status: "idle" | "loading" | "succeeded" | "failed";
  errorMessage: string | null;
}

const initialState: UploadFileState = {
  url: "",
  errors: "",
  isLoading: false,
  status: "idle",
  errorMessage: null,
};

export const uploadFileHandler = createAsyncThunk<
  string,
  FormData,
  { rejectValue: { errorMessage: string } }
>("auth/uploadFile", async (formData, { rejectWithValue }) => {
  try {
    const response = await createApi(
      `/v2/miscellaneous/upload-file`,
      formData,
      true
    );
    return response?.data?.url;
  } catch (error: any) {
    return rejectWithValue({
      errorMessage: error.response?.data?.message || "Failed to upload file",
    });
  }
});

const uploadFileSlice = createSlice({
  name: "uploadFile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(uploadFileHandler.pending, (state) => {
        state.isLoading = true;
        state.errorMessage = null;
        state.status = "loading";
      })
      .addCase(
        uploadFileHandler.fulfilled,
        (state, action: PayloadAction<string>) => {
          state.isLoading = false;
          state.status = "succeeded";
          state.url = action.payload;
          state.errors = "";
          state.errorMessage = null;
        }
      )
      .addCase(uploadFileHandler.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "failed";
        state.errorMessage =
          action.payload?.errorMessage || "Unknown error occurred";
        state.errors = "upload_failed";
      });
  },
});

export default uploadFileSlice.reducer;
