import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  authenticated: false,
  id: "",
  nickname: "",
  profileImage: "",
};
const loggedState = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginAccount: (state, action) => {
      const data = action.payload;
      const profile = data.properties;
      state.authenticated = true;
      state.profileImage = profile.profile_image;
    },
    serverDataIn: (state, action) => {
      const data = action.payload;
      state.id = data.data.id;
      state.nickname = data.data.nickname;
    },
    logoutAccount: (state, action) => {
      state.authenticated = false;
      state.id = "";
      state.nickname = "";
      state.profileImage = "";
    },
  },
});
export const { loginAccount, logoutAccount, serverDataIn } =
  loggedState.actions;
export default loggedState;
