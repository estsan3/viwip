import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/App";
import { persistor, store } from "./store";
import Navbar from "./components/navbar";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("app")
);
