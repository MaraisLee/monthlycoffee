import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  authenticated: false,
  id: "",
  nickname: "",
  profileImage: "",
  authorization: "",
  refreshToken: "",
};
const loggedState = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginAccount: (state, action) => {
      const data = action.payload;
      const profile = data.properties;
      state.authenticated = true;
      state.id = data.id;
      state.nickname = profile.nickname;
      state.profileImage = profile.profile_image;
      state.authorization = data.authorization;
    },
    logoutAccount: (state, action) => {
      state.authenticated = false;
      state.id = "";
      state.nickname = "";
      state.profileImage = "";
      state.authorization = "";
    },
    refreshTokenIn: (state, action) => {
      state.refreshToken = action.payload.refreshToken;
    },
    refreshTokenOut: (state, action) => {
      state.refreshToken = "";
    },
  },
});
export const { loginAccount, logoutAccount, refreshTokenIn, refreshTokenOut } =
  loggedState.actions;
export default loggedState;