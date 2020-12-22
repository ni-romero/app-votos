import React from 'react'
import {Form, Button} from "react-bootstrap"
// import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form'
import './App.css';


const Register = () =>{

    // let history = useHistory();
  const {register, errors, handleSubmit} = useForm();

  const onSubmit = (data, e) => {
      console.log(data)
      e.target.reset();
  }
    return(
        <>
        <div className="registrar p-3">
            <div className="estiloregistro p-5">
        <h2 className="text-center my-3 tituloReg">Registrarme</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
  <Form.Group controlId="formBasicEmail">
    <Form.Control
     type="nombre"
      placeholder="Nombre"
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
     type="dni"
      placeholder="Dni"
       name="dni"
       ref={register({
        required: {
            value: true, 
            message: 'Dni es requerido'
            }, 
        maxLength: {
            value: 9, 
            message: 'No más de 9 carácteres!'
            },
        minLength: {
            value: 7, 
            message: 'Mínimo 7 carácteres'
            }
    })}
       />
       <span className="text-danger text-small d-block mb-2">
    {errors.dni && errors.dni.message}
</span>
  </Form.Group>

 <Form.Group controlId="formBasicPassword">
    <Form.Control
     type="contrasena"
      placeholder="Contraseña"
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

  <Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Control as="select" name="seccion">
      <option disabled selected> Sección 1</option>
      <option value="alberdi"> Alberdi</option>
      <option value="chicligasta"> Chicligasta</option>
      <option value="famailla"> Famaillá</option>
      <option value="laCocha"> La Cocha</option>
      <option value="lules"> Lules</option>
      <option value="monteros">Monteros</option>
      <option value="tafiDelValle">Tafí del Valle</option>
      <option value="tafiViejo">Tafi Viejo</option>
      <option value="YerbaBuena">Yerba Buena</option>
      
      <option disabled> Sección 2 </option>
      <option value="burruyacu">Burruyacú</option>
      <option value="alberdi"> Alberdi</option>
      <option value="cruzAlta">Cruz Alta</option>
      <option value="graneros">Graneros</option>
      <option value="leales"> Leales</option>
      <option value="simoca">Simoca</option>
      <option value="trancas">Trancas</option>
     
      <option disabled> Sección 3</option>
      <option value="capital">Capital</option>
    </Form.Control>
  </Form.Group>

  <Form.Group controlId="exampleForm.ControlSelect2">
    <Form.Control as="select" name="seccion">
    <option disabled selected>Ciudad/Comuna</option>
      <option value="municipio-burruyacu">Municipio Burruyacu</option>
      <option value="comuna7abril"> Comuna 7 de abril</option>
      <option value="comuna-benj-araoz">Comuna Benjamin Araoz y El tajamar</option>
      <option value="comuna-elchanar">Comuna El Chañar</option>
      <option value="comuna-elnaranjo">Comuna El Naranjo y El Sunchal</option>
      <option value="comuna-elpuestito">Comuna El puestito</option>
      <option value="comuna-eltimbo">Comuna El Timbó</option>
      <option value="comuna-garmendia">Comuna Gorb. Garmendia</option>
      <option value="comuna-laramada">Comuna La ramada y La cruz</option>
      <option value="comuna-piedrabuena">Comuna Piedrabuena</option>
      <option value="comuna-laramada">Comuna Villa padre Monti</option>
    </Form.Control>
  </Form.Group>

  
          
      



  <Form.Group controlId="formBasicPassword">
    <Form.Control
     type="escuela"
      placeholder="Escuela" 
      name="escuela"
      ref={register({
        required: {
            value: true, 
            message: 'Escuela es requerido'
            }, 
        maxLength: {
            value: 30, 
            message: 'No más de 30 carácteres!'
            },
        minLength: {
            value: 6, 
            message: 'Mínimo 6 carácteres'
            }
    })}
       />
       <span className="text-danger text-small d-block mb-2">
    {errors.escuela && errors.escuela.message}
</span>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control
     type="mesa"
      placeholder="Num. de mesa"
       name="mesa"
       ref={register({
        required: {
            value: true, 
            message: 'Mesa es requerido'
            }, 
        maxLength: {
            value: 2, 
            message: 'No más de 3 carácteres!'
            },
        minLength: {
            value: 1, 
            message: 'Mínimo 1 carácteres'
            }
    })}
        />
        <span className="text-danger text-small d-block mb-2">
    {errors.mesa && errors.mesa.message}
</span>
  </Form.Group>


  <Button className="form-control btnRegistro" type="submit"
    >
  Enviar
  </Button>

</Form>
</div>
</div>
        </>
    )
}
export default Register;