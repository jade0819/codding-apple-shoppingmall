import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import store2 from "./store2/store2.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider> */}

    <Provider store={store2}>
      <BrowserRouter>
        <App2 />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
