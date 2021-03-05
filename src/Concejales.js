import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import { useHistory } from 'react-router-dom'

const Concejales = () => {
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
          <h3 className="text-center">Detalle de Votos</h3>
          <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Confirme Partido</Form.Label>
              <Form.Control as="select">
                <option> PARTIDO 1</option>
                <option> PARTIDO 2</option>
                <option>PARTIDO 3</option>
                <option>PARTIDO 4</option>

              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Diputados</Form.Label>
              <Form.Control type="text"
                name="diputados"
                placeholder="Ingrese cantidad de votos DIPUTADOS"
                ref={register({
                  required: {
                      value: true, 
                      message: 'Cantidad de votos Diputados es requerido'
                      }, maxLength: {
                        value: 3,
                        message: 'No más de 3 carácteres!'
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
                        value: 3,
                        message: 'No más de 3 carácteres!'
                      },
                    })}
              /> <span className="text-danger text-small d-block mb-2">
              {errors.senadores && errors.senadores.message}
          </span>
            {/* </Form.Group>
            <Form.Group
              controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="blanco"
                placeholder="votos en blanco"
                ref={register({
                  required: {
                      value: true, 
                      message: 'Cantidad de votos en blanco es requerido'
                      }
                    })}
              />  <span className="text-danger text-small d-block mb-2">
              {errors.blanco && errors.blanco.message}
          </span>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="recurrido"
                placeholder="votos recurridos"
                ref={register({
                  required: {
                      value: true, 
                      message: 'Cantidad de votos recurridos es requerido'
                      }
                    })} />
                     <span className="text-danger text-small d-block mb-2">
              {errors.recurrido && errors.recurrido.message}
          </span>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="impugnado"
                placeholder="votos impugnados"
                ref={register({
                  required: {
                      value: true, 
                      message: 'Cantidad de votos impugnados es requerido'
                      }
                    })}
              />
               <span className="text-danger text-small d-block mb-2">
              {errors.impugnado && errors.impugnado.message}
          </span>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="total"
                name="total"
                placeholder="total"
              /> */}
            </Form.Group>
            <Button className="form-control btnEstoy my-2" type="submit" onClick={() => EnviarDatos()}>
              Enviar</Button>
              <Button className="form-control btnSalir my-2" type="submit" onClick={() => history.push("/")}>
              Salir</Button>
          </Form>
        </div>
      </div>
    </>
  )
}
export default Concejales;