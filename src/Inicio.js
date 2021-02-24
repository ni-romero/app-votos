import React from 'react'
import { Button } from "react-bootstrap"
import { useHistory } from "react-router-dom";
// import { Link } from 'react-router-dom';
import './App.css';

const Inicio = () => {
    let history = useHistory();
    return (
        <>
            <div className="padreInicio">

                <div className="p-4">
                    <br></br>
                    <h1 className="titulo-inicio text-white text-center "> FUERZA FISCAL </h1>
                    <br></br>  <br></br>
                    <div className="content-vacio p-4">
                    </div>
                    <br></br>
                    <Button className="btn-inicio1 my-2 form-control"
                        onClick={() => history.push("/register")} >Registrarse</Button>  <br></br>
                    <Button className="btn-inicio2 my-3 form-control"
                        onClick={() => history.push("/inicio-sesion")} > Iniciar sesión</Button>
                </div>
            </div>
        </>
    )
}

export default Inicio;