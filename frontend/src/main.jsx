import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/styles/index.css";
import { BrowserRouter as Routers } from "react-router-dom";
import {Provider} from "react-redux"
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Routers>
      <Provider store={store}>
      <App />
      </Provider>
    </Routers>
  </React.StrictMode>
);
