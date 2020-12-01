import React from 'react'
import {Button} from "react-bootstrap"
import { useHistory } from "react-router-dom";
// import { Link } from 'react-router-dom';
import './App.css';

const Inicio = () =>{
    let history = useHistory();
    return(
        <>
        <div className="padreInicio">
        
            <div className="p-5">
            <h1 className=" text-white text-center "> Fuerza Fiscal</h1>
           <div className="content-vacio">
               </div> 
    
          <Button className="btn-inicio1 my-2 form-control"
           onClick={() => history.push("/register")} >Registrarse</Button>  <br></br>
          <Button  className="btn-inicio2 my-3 form-control"
           onClick={() => history.push("/inicio-sesion")} > Iniciar sesión</Button>
          </div>
          </div>
         </>
    )
}

export default Inicio;