import { RootState } from "../../store";

export const selectCartBooks = (state: RootState) => state.cartSlice.books;
export const selectTotalQuantity = (state: RootState) => state.cartSlice.totalQuantity;