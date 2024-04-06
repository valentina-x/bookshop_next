import { RootState } from "../../store";

export const selectBooks = (state: RootState) => state.books.books;
export const selectLoading = (state: RootState) => state.books.loading;
export const selectError = (state: RootState) => state.books.error;
