import React, { useState } from "react";
import MainNavbar from "./MainNavbar";
import Home from "./pages/Home";
import About from "./pages/About";
import ListPresidents from "./pages/ListPresidents";
import PresidentDetail from "./pages/PresidentDetail";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Switch>
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/list-presidents" component={ListPresidents} />
          {/* <Route path="/president-detail" component={PresidentDetail} /> */}
          <Route
            path="/president-detail"
            render={props => (
              <PresidentDetail info={props.location.president_info} />
            )}
          />
        </div>
      </Switch>
    </div>
  );
}

export default App;
