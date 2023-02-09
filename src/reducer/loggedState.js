import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  miId: "",
  miName: "",
  miNickname: "",
  miBirth: "",
  miGen: "",
  miPhoneNum: "",
  miAddress: "",
  miDetailAddress: "",
  miBusinessNum: "",
  miSeq: "",
  miStatus: "",
  miGroup: "",
  memberId: "",
};

const loggedState = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginAccount: (state, action) => {
      state.miId = action.payload.data.miId;
      state.miName = action.payload.data.miName;
      state.miNickname = action.payload.data.miNickname;
      state.miBirth = action.payload.data.miBirth;
      state.miPhoneNum = action.payload.data.miPhoneNum;
      state.miAddress = action.payload.data.miAddress;
      state.miDetailAddress = action.payload.data.miDetailAddress;
      state.miBusinessNum = action.payload.data.miBusinessNum;
      state.miSeq = action.payload.data.miSeq;
      state.miStatus = action.payload.data.miStatus;
      state.miGroup = action.payload.data.miGroup;
      state.memberId = action.payload.memberId;
    },
    logoutAccount: (state, action) => {
      state.miId = "";
      state.miName = "";
      state.miNickname = "";
      state.miBirth = "";
      state.miPhoneNum = "";
      state.miAddress = "";
      state.miDetailAddress = "";
      state.miBusinessNum = "";
      state.miSeq = "";
      state.miStatus = "";
      state.miGroup = "";
      state.memberId = "";
    },
  },
});
export const { loginAccount, logoutAccount } = loggedState.actions;
export default loggedState;
