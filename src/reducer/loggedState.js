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
      state.refreshToken = data.refreshToken;
    },
    logoutAccount: (state, action) => {
      state.authenticated = false;
      state.id = "";
      state.nickname = "";
      state.profileImage = "";
      state.authorization = "";
      state.refreshToken = "";
    },
  },
});
export const { loginAccount, logoutAccount } = loggedState.actions;
export default loggedState;
