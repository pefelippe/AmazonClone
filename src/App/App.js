import React from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Checkout from "../Checkout/Checkout";
import Login from "../Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
