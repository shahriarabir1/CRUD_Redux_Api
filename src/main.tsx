import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/common/Navbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
