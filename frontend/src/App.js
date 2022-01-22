import React from "react";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    Routes
  } from "react-router-dom";

function App(){
    return(
      <Router>
      <Switch>
        
          <Route path='/home'> <Home /></Route>
          <Route  path='/dash'> <Dashboard /></Route>
      </Switch>
      </Router>
    )
}

export default App;