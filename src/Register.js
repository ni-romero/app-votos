import React from 'react'
import {Form, Button} from "react-bootstrap"
import './App.css';

const Register = () =>{
    return(
        <>
        <div className="registrar p-5">
        <h2 className="text-center my-3">Registrarse</h2>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="nombre" placeholder="Nombre" name="nombre" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control type="dni" placeholder="Dni" name="dni"/>
  </Form.Group>

 <Form.Group controlId="formBasicPassword">
    <Form.Control type="contrasena" placeholder="Contraseña" name="contrasena" />
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control as="select" name="seccion">
      <option> Sección 1</option>
      <option> Sección 2</option>
      <option> Sección 3</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control type="escuela" placeholder="Escuela" name="escuela" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control type="mesa" placeholder="Num. de mesa" name="mesa" />
  </Form.Group>


  <Button className="form-control" variant="primary" type="submit">
  Enviar
  </Button>

</Form>

</div>
        </>
    )
}
export default Register;