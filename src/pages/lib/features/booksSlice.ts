import { createSlice } from "@reduxjs/toolkit";
import { fetchBooksAsync } from "./books/booksAsyncThunk";


interface booksState {
  books: [];
  loading: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
}

const booksSlice = createSlice({
  name: "books",
  initialState: {
    books: [],
    loading: "idle",
    error: null,
  } as booksState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooksAsync.pending, (state) => {
        state.loading = "pending";
      })
      .addCase(fetchBooksAsync.fulfilled, (state, action) => {
        state.loading = "succeeded";
        state.books = action.payload;
      })
      .addCase(fetchBooksAsync.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message ?? "An error occurred";
      });
  },
});

export { fetchBooksAsync };

export default booksSlice.reducer;
