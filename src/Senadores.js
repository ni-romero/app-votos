import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const Senadores = () => {

  // let history = useHistory();
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data)
    e.target.reset();
  }
  return (
    <>
      <div className="padreInicioSes p-3">
        <div className="estiloregistro p-4">
          <h1 className="text-center">Senadores</h1>
          <Form onSubmit={handleSubmit(onSubmit)}>

            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Seleccione partido</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>

              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control type="text"
                name="afirmativo"
                placeholder="votos afirmativos"
                ref={register({
                  required: {
                      value: true, 
                      message: 'Cantidad de votos afirmativos es requerido'
                      }
                    })}
              />    <span className="text-danger text-small d-block mb-2">
              {errors.afirmativo && errors.afirmativo.message}
          </span>
            </Form.Group>
            <Form.Group
              controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                name="nulo"
                placeholder="votos nulos"
                ref={register({
                  required: {
                      value: true, 
                      message: 'Cantidad de votos nulos es requerido'
                      }
                    })}
              /> <span className="text-danger text-small d-block mb-2">
              {errors.nulo && errors.nulo.message}
          </span>
            </Form.Group>
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
              />
            </Form.Group>
            <Button className="form-control btnEstoy my-2" type="submit">
              Enviar</Button>
          </Form>
        </div>
      </div>
    </>
  )
}
export default Senadores;