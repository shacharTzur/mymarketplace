import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Modal from "react-modal";
import { AuthContextProvider } from './store/auth-context';
import { ReceiverContextProvider } from './store/receiver-context';

Modal.setAppElement("#root");

ReactDOM.render(
  <AuthContextProvider>
    <ReceiverContextProvider>
  <App />,
    </ReceiverContextProvider>
  </AuthContextProvider>,
  document.getElementById("root")
);
