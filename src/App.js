import React from 'react';
import './App.css';
import Register from "./Register"
import Inicio from "./Inicio"
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
     
 
        <Switch>
          <Route path="/" exact>
            <Inicio />
          </Route>
          <Route path="/register" exact>
        
            <Register />
          </Route>
        
        </Switch>
  
    </Router>
    </div>
  );
}

export default App;
