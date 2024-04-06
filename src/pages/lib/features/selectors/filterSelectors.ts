import { RootState } from "../../store";

export const selectSubject = (state: RootState) => state.filterSlice.subject;
export const selectPage = (state: RootState) => state.filterSlice.page;