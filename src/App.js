import React from 'react';
import Register from "./Register"
import Inicio from "./Inicio"
import InicioSesion from "./InicioSesion"
import {BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import './App.css';

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
          <Route path="/Inicio-sesion" exact>
        
            <InicioSesion />
          </Route>
        
        </Switch>
  
    </Router>
    </div>
  );
}

export default App;
