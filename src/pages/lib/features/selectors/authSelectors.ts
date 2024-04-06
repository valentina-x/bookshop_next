import { RootState } from "../../store";

export const selectIsAuthenticated = (state: RootState) => state.authSlice.isAuthenticated;