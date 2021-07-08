import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from '../src/Redux/redux-store'
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
  ReactDOM.render(
    <React.StrictMode>
      <HashRouter>
      <Provider store={store}>
        <App />
        </Provider>
      </HashRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
  reportWebVitals();

