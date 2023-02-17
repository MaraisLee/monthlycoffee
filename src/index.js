import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Provider } from "react-redux";
import store from "reducer/store";
// import "react-tooltip/dist/react-tooltip.css";

// 스토어 export 필수!
export let persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // Provider 필수 store={store}
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
