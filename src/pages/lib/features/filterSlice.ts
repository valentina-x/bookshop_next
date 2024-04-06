import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IStates {
  subject: string;
  page: number;
}

const initialState: IStates = {
  subject: 'Architecture',
  page: 1,
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSubject: (state, action: PayloadAction<string>) => {
      state.subject = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setSubject, setPage } = filterSlice.actions;

export default filterSlice.reducer;
