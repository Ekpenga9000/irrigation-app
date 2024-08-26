import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: {
    id: string;
    fullname: string;
    imageLink: string;
  } | null;
}

// set the initial state
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

//create slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(
      state,
      action: PayloadAction<{
        id: string;
        fullname: string;
        imageLink: string;
      }>
    ) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const {loginSuccess, logout} = authSlice.actions; 
export default authSlice.reducer;
