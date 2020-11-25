import React, { useEffect } from "react";
import Header from "../Header/Header";
import Home from "../Home/Home";
import Checkout from "../Checkout/Checkout";
import Login from "../Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from "../firebase.js";
import "./App.css";
import { useStateValue } from "../StateProvider";
import Payment from "../Payment/Payment";
export default function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("USER", authUser);

      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
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
          <Route path="/payment">
            <Header />
            <Payment />
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
