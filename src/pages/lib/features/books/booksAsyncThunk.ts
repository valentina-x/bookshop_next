import { createAsyncThunk } from '@reduxjs/toolkit';
import fetchBooks from '../books/fetchBooks';

interface FetchBooksArgs {
	subject: string;
	page: number;
  }

export const fetchBooksAsync = createAsyncThunk(
	'books/fetchBooks',
	async ({ subject, page }: FetchBooksArgs, { rejectWithValue }) => {
	  try {
		const response = await fetchBooks(subject, page);
		return response.data;
	  } catch (error) {
		if (error instanceof Error) {
		  return rejectWithValue(error.message || 'Ошибка при загрузке книг');
		} else {
		  return rejectWithValue('Неизвестная ошибка при загрузке книг');
		}
	  }
	},
  );
  
  