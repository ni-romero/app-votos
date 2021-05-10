import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import { useHistory } from "react-router-dom";
const Partidos = () => {
    let history = useHistory();
    return (
        <>
            <div className="padreInicioSes container-fluid p-4">
               
                <div className="estiloregistro row p-3">
                <h3 className="m-auto">Seleccione partido</h3>
                <Container>
                
                    <Row className="padrePartidos">
                    
                    <Col xs={5} className="partidoUno mb-3">
                    <Button className="btnAzul" onClick={() => history.push("/diputados")}>Partido 1</Button>
                    </Col>
                    <Col xs={5} className="partidoDos mb-3">
                    <Button className="btnCel" onClick={() => history.push("/diputados")}>Partido 2</Button>
                    </Col>
                    
                    </Row>
                    <Row className="padrePartidos" >
                    <Col xs={5} className="partidoTres">
                        <Button className="btnRojo" onClick={() => history.push("/diputados")}>Partido 3</Button>
                     </Col>
                    <Col xs={5} className="partidoCua">
                    <Button className="btnAma" onClick={() => history.push("/diputados")}>Partido 4</Button>
                   
                    </Col>
                    </Row>
                </Container>

                </div>
            </div>

        </>
    )
}
export default Partidos;