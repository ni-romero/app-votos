import React from 'react'
import {Button, Image} from "react-bootstrap"
import { Link } from 'react-router-dom';
import './App.css';

const Inicio = () =>{
    return(
        <>
        <div className="padreInicio">
        
            <div className="p-5">
            <h1 className=" text-white text-center ">Bienvenidos</h1>
        
         <br></br>
          <Button className="btn-inicio1 mt-5 form-control ">Registrarse</Button>  <br></br>
          <Button  className="btn-inicio2  mt-1 form-control" > Iniciar sesión</Button>
          </div>
          </div>
         </>
    )
}

export default Inicio;