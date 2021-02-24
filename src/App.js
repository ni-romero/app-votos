import React from 'react';
import Register from "./Register"
import Inicio from "./Inicio"
import InicioSesion from "./InicioSesion"
import Perfil from "./Perfil/Perfil"
import Concejales from "./Concejales"
import Senadores from "./Senadores"
import Partidos from "./Partidos"
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
          <Route path="/Perfil" exact>
            <Perfil/>
          </Route>
          <Route path="/diputados" exact>
            <Concejales/>
          </Route>
          <Route path="/senadores" exact>
            <Senadores/>
          </Route>
          <Route path="/partidos" exact>
            <Partidos/>
          </Route>
        
        </Switch>
  
    </Router>
    </div>
  );
}

export default App;
