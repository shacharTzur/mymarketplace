import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useContext } from 'react';
/* Inner Pages */
import LoginPage from "pages/Login.js";
import ComponentRenderer from "ComponentRenderer.js";

import AuthContext from './store/auth-context';

export default function App() {
  const authCtx = useContext(AuthContext);
  return (
    <Router>
      <Switch>
      {authCtx.isLoggedIn && (
        <Route path="/components/:type/:subtype/:name">
          <ComponentRenderer />
        </Route>
        )};
        <Route path="/components/:type/:name">
          <ComponentRenderer />
        </Route>
        <Route path="/">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
};