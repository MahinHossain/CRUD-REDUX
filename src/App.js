import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from "react-google-login";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShowData from "./component/ShowData";
import From from "./component/Form";
import Nav from "./Nav";
import EditItem from "./component/EditItem";
import axios from "axios";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {}, []);

  return (
    <Router>
      <Nav />

      <Switch>
        <div className="container">
          {" "}
          <Route exact path="/">
            <From />
          </Route>
          <Route path="/ShowData">
            <ShowData />
          </Route>
          <Route path="/edit/:id">
            <EditItem />
          </Route>{" "}
        </div>
      </Switch>
    </Router>
  );
}

export default App;
