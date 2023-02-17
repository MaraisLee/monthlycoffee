import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  authenticated: false,
  id: "",
};

const loggedState = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginAccount: (state, action) => {
      state.authenticated = true;
      state.id = action.payload.id;
    },
    logoutAccount: (state, action) => {
      state.authenticated = false;
      state.id = "";
    },
  },
});
export const { loginAccount, logoutAccount } = loggedState.actions;
export default loggedState;
