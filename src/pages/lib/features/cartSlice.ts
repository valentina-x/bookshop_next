import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from './types';

interface CartState {
  books: Book[];
  totalQuantity: number;
}

const initialState: CartState = {
  books: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Book | Book[]>) => {
      const newBooks = Array.isArray(action.payload) ? action.payload : [action.payload];
      state.books.push(...newBooks);
      state.totalQuantity += newBooks.length;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const bookIndex = state.books.findIndex((book) => book.id === action.payload);
      if (bookIndex !== -1) {
        state.books.splice(bookIndex, 1);
        state.totalQuantity--;
      }
    },
    clearCart: (state) => {
      state.books = []; 
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
