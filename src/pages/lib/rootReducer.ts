import { combineReducers } from '@reduxjs/toolkit';
import filterSlice from '../lib/features/filterSlice';
// <reference types="redux-persist" />
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import cartSlice from './features/cartSlice';
import books from './features/booksSlice';
import authSlice from './features/authSlice';

const persistConfig = {
    key: 'root', // Название ключа в localStorage
	storage,
}

const rootReducer = combineReducers({
	cartSlice: cartSlice,
	books: books,
	filterSlice: filterSlice,
	authSlice: authSlice
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export default rootReducer;