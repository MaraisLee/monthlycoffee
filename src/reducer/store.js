import { configureStore } from "@reduxjs/toolkit";
// sessionStorage 저장 라이브러리
import storageSession from "redux-persist/lib/storage/session";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import loggedState from "./loggedState";

const reducers = combineReducers({
  user: loggedState.reducer,
});

const persistConfig = {
  key: "root",
  // storage
  storage: storageSession,
  whitelist: ["user"],
};

const presistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: presistedReducer,
  // 임시로 middleware 체크 기능 제거
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
