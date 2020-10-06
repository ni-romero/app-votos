import React from 'react'
import {Button} from "react-bootstrap"
import './App.css';

const Inicio = () =>{
    return(
        <>
        <div className="padreInicio ">
            <div className="p-5">
        <h1 className="text-center my-5 text-white">Bienvenidos</h1>
        {/* <img src="https://images.unsplash.com/photo-1592437923107-f91c5679e70b?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
         className="img-inicio"></img>     */}
         <br></br>
          <Button className="btn-inicio1 mt-4 form-control">Registrarse</Button>  <br></br>
          <Button  className="btn-inicio2 mt-4 form-control">Iniciar sesión</Button>
          </div>
          </div>
         </>
    )
}

export default Inicio;