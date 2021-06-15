import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from '../src/Redux/redux-store'
import { Provider } from "react-redux";

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
      <Provider store={store}>
        <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
  reportWebVitals();

