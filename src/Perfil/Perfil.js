import React from 'react'
import { Button, Form } from 'react-bootstrap'
// import { useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import moment from 'moment'

import "moment/locale/es";


const Perfil = ({fecha}) => {
    const { register, errors, handleSubmit } = useForm();
 

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset();
    }

    const MostrarAlerta = () => {
        Swal.fire(
            
            'Estoy en la mesa',
            'El horario de ingreso se registró con éxito!!',
            'success'
           
        )
        console.log( 'HORA Y FECHA DE INICIO :',
            moment().format("h:mm:ss a, Do [de] MMMM [del] YYYY")
           )
  
    }
    const MostrarAlerta2 = () => {
        Swal.fire(
           
            'Cierre de votación',
            'El horario de cierre se registró con éxito!!' ,
            'success'
            
        )
        console.table( 'HORA Y FECHA DE CIERRE:',
            moment().format("h:mm:ss a, Do [de] MMMM [del] YYYY")
           )
       
      
    }
  

    // let history = useHistory();

    return (

        <>
            <div className="padreInicioSes p-3">
                <div className="estiloregistro p-5">

                    <h1 className="text-center"> Bienvenido</h1>
                    <h5 className="text-center text-secondary">Juan Perez</h5>
                    <br></br>
                    <br></br>
                    <Button className="form-control btnEstoy my-2" type="submit" onClick={() => MostrarAlerta()}>
                        Estoy en la mesa</Button>
                    <Button className="form-control btnEstoy my-2" type="submit" onClick={() => MostrarAlerta2()}
                    >Cierre de votación</Button>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formBasic">
                            <Form.Control
                                className="btnCantidaVot my-2 p-2"
                                type="text"
                                placeholder="Ingrese cantidad de votantes"
                                name="cantidadVotantes"
                                ref={register({
                                    required: {
                                        value: true,
                                        message: 'cantidad de votantes es requerido'
                                    }
                                })}
                            />
                            <span className="text-danger text-small d-block mb-2">
                                {errors.cantidadVotantes && errors.cantidadVotantes.message}
                            </span>
                        </Form.Group>

                        <Button className="form-control btnCierre my-2" type="submit"
                            // onClick={() => history.push("/partidos")}
                        > Siguiente</Button>
                    </Form>
                </div>
            </div>
        </>
    )
}
export default Perfil;