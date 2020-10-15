import React from 'react'
import {Form, Button} from "react-bootstrap"
import { useForm } from 'react-hook-form'
import { useHistory } from "react-router-dom";
import './App.css';

const InicioSesion = () => {

    let history = useHistory();
    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset();
    }
    return(
        <>
        <div className="padreInicioSes p-3">

            <div className="estiloregistro p-4">

            <h2 className="text-center tituloInciarSes my-2"> Iniciar Sesion</h2>
            {/* <div className="d-flex justify-content-center img-inSesion">
            <i className="fas fa-user text-center fa-5x"></i>
            </div> */}
           <div className="img-inSesion"></div>
         
            
            <Form onSubmit={handleSubmit(onSubmit)}>
  <Form.Group controlId="formBasicNombre">
    <Form.Control
    className="mt-3"
     type="nombre"
      placeholder="Ingrese nombre"
       name="nombre"
       ref={register({
        required: {
            value: true, 
            message: 'Nombre es requerido'
            }, 
        maxLength: {
            value: 30, 
            message: 'No más de 30 carácteres!'
            },
        minLength: {
            value: 4, 
            message: 'Mínimo 4 carácteres'
            }
    })}
 />
 <span className="text-danger text-small d-block mb-2">
    {errors.nombre && errors.nombre.message}
</span>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control
     type="contrasena"
      placeholder="Ingrese contraseña"
       name="contrasena"
       ref={register({
        required: {
            value: true, 
            message: 'Contraseña es requerido'
            }, 
        maxLength: {
            value: 30, 
            message: 'No más de 30 carácteres!'
            },
        minLength: {
            value: 5, 
            message: 'Mínimo 5 carácteres'
            }
    })}
        />
        <span className="text-danger text-small d-block mb-2">
    {errors.contrasena && errors.contrasena.message}
</span>
  </Form.Group>
  <Button className="form-control btnRegistro my-2" type="submit"
  onClick={() => history.push("/")}>Enviar</Button>

  </Form>
            </div>
        </div>
        
        </>
    )
}
export default InicioSesion;