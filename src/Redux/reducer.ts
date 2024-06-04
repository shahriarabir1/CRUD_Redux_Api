import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  isLoading: boolean;
  data: any;
  isError: boolean;
}

const initialState: ProductState = {
  isLoading: false,
  data: null,
  isError: false,
};

export const fetchdata = createAsyncThunk(
  "data/fetchdata",
  async (_, thunkAPI) => {
    try {
      // Your asynchronous logic goes here, for example:
      const response = await fetch("/api/data.json");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      // Specify the type of error or use type assertion
      const errorMessage = typeof error === "string" ? error : "Unknown error";
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
const Product = createSlice({
  name: "Products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchdata.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchdata.rejected, (state, action) => {
        console.error("Error fetching data:", action.error.message);
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchdata.fulfilled, (state, action: PayloadAction<any>) => {
        state.isLoading = false;
        state.data = action.payload;
        state.isError = false;
      });
  },
});

export default Product.reducer;
