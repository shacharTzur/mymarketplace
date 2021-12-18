import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { AuthContextProvider } from './store/auth-context';

Modal.setAppElement("#root");

ReactDOM.render(
  <AuthContextProvider>
  <App />,
  </AuthContextProvider>,
  document.getElementById("root")
);
