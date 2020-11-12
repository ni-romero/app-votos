import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Concejales = () => {
    return(
        <>
        <div className="padreInicioSes p-3">
        <div className="estiloregistro p-4">
        <h1 className="text-center">Diputados</h1>
        <Form>
 
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
    <Form.Control type="text" name="afirmativo" placeholder="votos afirmativos" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="text" name="nulo" placeholder="votos nulos" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="text" name="blanco" placeholder="votos en blanco" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="text" name="recurrido" placeholder="votos recurridos" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="text" name="impugnado" placeholder="votos impugnados" />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Control type="total" name="total" placeholder="total" />
  </Form.Group>
  <Button className="form-control btnEstoy my-2" type="submit">
                Enviar</Button>
  </Form>
        </div>
        </div>
        </>
    )
}
export default Concejales;