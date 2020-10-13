import React from 'react'
import {Button} from "react-bootstrap"
// import { Link } from 'react-router-dom';
import './App.css';

const Inicio = () =>{
    return(
        <>
        <div className="padreInicio">
        
            <div className="p-5">
            <h1 className=" text-white text-center ">Bienvenidos</h1>
           <div className="content-vacio"></div> 
    
          <Button className="btn-inicio1 mb-1 form-control ">Registrarse</Button>  <br></br>
          <Button  className="btn-inicio2 form-control" > Iniciar sesión</Button>
          </div>
          </div>
         </>
    )
}

export default Inicio;