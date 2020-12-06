import React from 'react'
import { Button } from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Swal from 'sweetalert2'



const Perfil = () => {

    const MostrarAlerta =() =>{
        Swal.fire(
            'Estoy en la mesa',
            'El horario de ingreso se registró con éxito!!',
            'success'
          )
    }
    const MostrarAlerta2 =() =>{
        Swal.fire(
            'Cierre de votación',
            'El horario de cierre se registró con éxito!!',
            'success'
          )
    }

    let history = useHistory();
    return(

        <>
        <div className="padreInicioSes p-3">
        <div className="estiloregistro p-5">
            <h1 className="text-center"> Bienvenido</h1>
            <h5 className="text-center text-secondary">Juan Perez</h5>
            <br></br>
            <br></br>
            <br></br>
            <Button className="form-control btnEstoy my-2" type="submit" onClick={()=>MostrarAlerta()}>
                Estoy en la mesa</Button>
            <Button className="form-control btnEstoy my-2" type="submit" onClick={()=>MostrarAlerta2()}
            >Cierre de votación</Button>
             <Button className="form-control btnCierre my-2" type="submit"
              onClick={() => history.push("/diputados")}
            > Siguiente</Button>
            </div>
            </div>
        </>
    )
}
export default Perfil;