import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'

const SelectPartidos = [
  {
    "partido": "Fuerza Republicana",
    
  },
  {
    "partido": "Juntos por el cambio",
  },
  {
    "partido": "Radicalistas",
  },
  {
    "partido": "cuatros"
  }
]


const Concejales = () => {

  

  const [idPartidos, setIdPartidos] = useState()

  const handlerCargaPartido = function (e) {
    const option = e.target.value
    console.log(option);

    setIdPartidos(option)
  }

  const EnviarDatos = () => {
    Swal.fire(
      'Cantidad de votos enviados',
      'Los datos ingresados se enviaron a la base datos!!',
      'success'
    )
  }

  let history = useHistory();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data)
    e.target.reset();

  }
  return (
    <>
      <div className="padreInicioSes p-3">
        <div className="estiloregistro p-4">
          <h3 className="text-center my-3">Detalle de Votos</h3>
          <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group>
              <Form.Label>Confirme Partido</Form.Label>
              <Form.Control as="select" name="partidos" id="selPartidos" onClick={handlerCargaPartido}>
                <option value={-1}>Seleccione Partido</option>
                {
                  SelectPartidos.map((item, i) => (

                    <option key={"partido" + i} value={i.item}> {item.partido}</option>
                  ))
                }

              </Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Diputados</Form.Label>
              <Form.Control type="text"
                name="diputados"
                placeholder="Ingrese cantidad de votos DIPUTADOS"
                ref={register({
                  required: {
                    value: true,
                    message: 'Cantidad de votos Diputados es requerido'
                  }, maxLength: {
                    value: 10,
                    message: 'No más de 10 carácteres!'
                  }, minLength: {
                    value: 1,
                    message: 'No menos de 1 carácteres!'
                  },
                })}
              />    <span className="text-danger text-small d-block mb-2">
                {errors.diputados && errors.diputados.message}
              </span>
            </Form.Group>
            <Form.Group
              controlId="exampleForm.ControlInput1">
              <Form.Label>Senadores</Form.Label>
              <Form.Control
                type="text"
                name="senadores"
                placeholder="Ingrese Cantidad de votos SENADORES"
                ref={register({
                  required: {
                    value: true,
                    message: 'Cantidad de votos Senadores es requerido'
                  },
                  maxLength: {
                    value: 10,
                    message: 'No más de 10 carácteres!'
                  },
                })}
              /> <span className="text-danger text-small d-block mb-2">
                {errors.senadores && errors.senadores.message}
              </span>

            </Form.Group>
            <Button className="form-control btnEstoy my-2" type="submit" onClick={() => EnviarDatos()}>
              Enviar</Button>
            <Button className="form-control btnSalir my-2" type="submit"
              onClick={() => history.push("/")}>
              Salir</Button>
          </Form>
        </div>
      </div>
    </>
  )
}
export default Concejales;