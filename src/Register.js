import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
// import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form'
import './App.css';
const secciones = [
  {
    "departamento": "Burruyacu",
    "ciudadComuna": ["comuna 7 de abril", "Benjamin Araoz y El Tajamar", "El  chanar", "El Naranjo y El Sunchal",
      "El Pustito", "El Timbó", "Gob. Garmendia", "La Ramada y La Cruz", "PiedraBuena", "Villa Padre Monti"]


  },
  {
    "departamento": "Cruz alta",
    "ciudadComuna": ["alderetes", "banda del rio sali", "el delfin gallo", "Colombres",
      "El Bracho y El Cevilar", "El Naranjito", " La florida y Luisiana", "Las Cejas", "Los Bulacio",
      "Los Villagra", "Los Pereyra", "Los Perez", "Los ralos", "Ranchillos", "San Andrés"]
  },
  {
    "departamento": "Graneros",
    "ciudadComuna": ["Comuna La madrid", "Comuna Taco Ralo"]

  },{
    "departamento" : "Simoca",
    "ciudadComuna" : ["Atahona", "Buena Vista", "Ciudacita", "Manuela Pedraza", "Monteagudo", "Pampa Mayo",
     "Rio chico y Nueva Trinidad", "San Pedro y San Antonio", "Santa Cruz y La Tuna", "Villa Chicligasta", "Yerba Buena"]
  }


]
console.log("secciones", secciones)

const Register = () => {
  const [Idcomuna, setIdComuna] = useState(-1)

  const handlerCargarSecciones = function (e) {
    const opcion = e.target.value;
    console.log(opcion)

    setIdComuna(opcion);
  }

  // let history = useHistory();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data)
    e.target.reset();
  }
  return (
    <>
      <div className="registrar p-3">
        <div className="estiloregistro p-5">
          <h2 className="text-center my-3 tituloReg">Registrarme</h2>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="nombre">
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

            <Form.Group>
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

            <Form.Group >
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

            <Form.Group>
              <Form.Control as="select" name="secciones" id="selSecciones" onClick={handlerCargarSecciones}>
                <option value={-1}>Seleccione Seccion/Departamento</option>
                {
                  secciones.map((item, i) => (
                    <option key={"secciones" + i} value={i}>{item.departamento}</option>
                  ))
                }
          

              </Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Control as="select" name="cadaComuna" id="selCadaComuna">
                <option value={-0}>Seleccione ciudado comuna</option>

                {
                  Idcomuna > -1 &&
                  (secciones[Idcomuna].ciudadComuna.map((item, i) => (
                    <option key={"ciudadComuna" + i}>{item}</option>
                  ))
                  )
                }
               


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
              // onClick={() => history.push("/Inicio-sesion")}
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