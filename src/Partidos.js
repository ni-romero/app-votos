import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
const Partidos = () => {
    return (
        <>
            <div className="padreInicioSes container-fluid p-4">
               
                <div className="estiloregistro row p-3">
                <h3 className="m-auto">Seleccione partido</h3>
                <Container>
                
                    <Row className="padrePartidos">
                    <Col xs={5} className="paridoUno mb-2">
                      
                    </Col>
                    <Col xs={5} className="paridoUno mb-2"></Col>
                    </Row>
                    <Row className="padrePartidos" >
                    <Col xs={5} className="paridoUno"> </Col>
                    <Col xs={5} className="paridoUno"></Col>
                    </Row>
                </Container>

                </div>
            </div>

        </>
    )
}
export default Partidos;