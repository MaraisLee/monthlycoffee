import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  authenticated: false,
  id: "",
  nickname: "",
  profileImage: "",
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
      state.profileImage = profile.profile_image;
      if (!state.nickname) {
        state.nickname = profile.nickname;
      }
    },
    serverDataIn: (state, action) => {
      const data = action.payload;
      state.refreshToken = data.headers.refreshtoken;
      state.id = data.data.id;
      state.nickname = data.data.nickname;
    },
    logoutAccount: (state, action) => {
      state.authenticated = false;
      state.id = "";
      state.nickname = "";
      state.profileImage = "";
      state.refreshToken = "";
    },
    // refreshTokenIn: (state, action) => {
    //   state.refreshToken = action.payload.refreshToken;
    // },
    // refreshTokenOut: (state, action) => {
    //   state.refreshToken = "";
    // },
  },
});
export const {
  loginAccount,
  logoutAccount,
  serverDataIn,
  refreshTokenIn,
  refreshTokenOut,
} = loggedState.actions;
export default loggedState;
