import React, { useState } from 'react'
import { Form, Button } from "react-bootstrap"
import { useHistory } from "react-router-dom";
import { useForm } from 'react-hook-form'
import './App.css';
const secciones = [
  {
    "departamento": "Burruyacu",
    "ciudadComuna": ["comuna 7 de abril", "Benjamin Araoz y El Tajamar", "El  chanar", "El Naranjo y El Sunchal",
      "El Pustito", "El Tombó", "Gob. Garmendia", "La Ramada y La Cruz", "PiedraBuena", "Villa Padre Monti"]


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

    setIdComuna(opcion);
  }

  let history = useHistory();
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
              <Form.Control as="select" name="secciones" id="selSecciones" onClick={handlerCargarSecciones}>
                <option value={-1}>Seleccione Seccion/Departamento</option>
                {
                  secciones.map((item, i) => (
                    <option key={"secciones" + i} value={i}>{item.departamento}</option>
                  ))
                }
                {/* <option disabled> Sección 1</option>
                <option value="capital">Capital</option>

                <option disabled> Sección 2 </option>
                <option value="burruyacu">Burruyacú</option>
                <option value="alberdi"> Alberdi</option>
                <option value="cruzAlta">Cruz Alta</option>
                <option value="graneros">Graneros</option>
                <option value="leales"> Leales</option>
                <option value="simoca">Simoca</option>
                <option value="trancas">Trancas</option>

                <option disabled selected> Sección 3</option>
                <option value="alberdi"> Alberdi</option>
                <option value="chicligasta"> Chicligasta</option>
                <option value="famailla"> Famaillá</option>
                <option value="laCocha"> La Cocha</option>
                <option value="lules"> Lules</option>
                <option value="monteros">Monteros</option>
                <option value="tafiDelValle">Tafí del Valle</option>
                <option value="tafiViejo">Tafi Viejo</option>
                <option value="YerbaBuena">Yerba Buena</option> */}

              </Form.Control>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Control as="select" name="cadaComuna" id="selCadaComuna">
                <option value={-0}>Seleccione ciudado comuna</option>

                {
                  Idcomuna > -1 &&
                  (secciones[Idcomuna].ciudadComuna.map((item, i) => (
                    <option key={"ciudadComuna" + i}>{item}</option>
                  ))
                  )
                }
                {/* <option disabled selected>Ciudad/Comuna</option> */}
                {/* <option value="municipio-burruyacu" disabled selected>Municipio Burruyacu</option>
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

                <option value="departamento-cruzAlta" disabled selected>Departamento Cruz ALta</option>
                <option value="munic-alderetes">Municipio Alderetes</option>
                <option value="munic-banda-del-rio">Municipio Banda del Río sali</option>
                <option value="comuna-colombres">Comuna El Colombres</option>
                <option value="comuna-delfinGallo">Comuna Delfin Gallo</option>
                <option value="comuna-elBrachoYcevilar">Comuna El Bracho y El cevilar</option>
                <option value="comuna-elnaranjito">Comuna El naranjito</option>
                <option value="comuna-laFloridaYluisiana">Comuna La Florida y Luisiana</option>
                <option value="comuna-lasCejas">Comuna Las cejas</option>
                <option value="comuna-losBulacioYlosVillagra">Comuna Los Bulacio y Los Villagra</option>
                <option value="comuna-losPereyra">Comuna Los Pereyra</option>
                <option value="comuna-losPerez">Comuna Los Perez</option>
                <option value="comuna-losRalos">Comuna Los Ralos</option>
                <option value="comuna-ranchillos">Comuna Ranchillos</option>
                <option value="comuna-SanAndres">Comuna San Andrés</option>

                <option value="departamento-Graneros" disabled selected>Departamento Graneros</option>
                <option value="comuna-lamadrid">Comuna Lamadrid</option>
                <option value="comuna-tacoRalo">Comuna Taco Ralo</option>

                <option value="departamento-Simoca" disabled selected>Simoca</option>
                <option value="comuna-atahona">Comuna Atahona</option>
                <option value="comuna-buenavista">Comuna Buena Vista</option>
                <option value="comuna-Cuidacita">Comuna Cuidacita</option>
                <option value="comuna-ManuelaPedraza">Comuna Manuela Pedraza</option>
                <option value="comuna-monteagudo">Comuna  Monteagudo</option>
                <option value="comuna-pampamayo">Comuna Pampa Mayo</option>
                <option value="comuna-rioChicoYNvatrinidad">Comuna Rio chico y Nva Trinidad</option>
                <option value="comuna-sanPedroYsanAntonio">Comuna San Pedro Y San Antonio</option>
                <option value="comuna-santacruzYlaTuna">Comuna Santa Cruz y La tuna</option>
                <option value="comuna-villaChicligasta">Comuna Villa Chicligasta</option>
                <option value="comuna-YerbaBuena">Comuna Yerba Buena</option>


                <option value="departamento-Leales" disabled selected>Leales</option>
                <option value="munic-bellavista">Municipio Bella Vista</option>
                <option value="comuna-aguaDulceyLaSoledad">Comuna Agua Dulce y La Soledad</option>
                <option value="comuna-elmojon">Comuna El Mojón</option>
                <option value="comuna-laEsquinayMancopa">Comuna La Esquina y Mancopa</option>
                <option value="comuna-estacAraoz-tacanas">Comuna Estación Araoz y Tacanas</option>
                <option value="comuna-lastalas">Comuna Las Talas</option>
                <option value="comuna-losgomez">Comuna Los Gomez</option>
                <option value="comuna-lospuestos">Comuna Los Puestos</option>
                <option value="comuna-manuelGarFer">Comuna Manuel García Fernandez</option>
                <option value="comuna-quilmesYlosSueldos">Comuna Quilmes y Los Sueldos</option>
                <option value="comuna-RioColorado">Comuna Rio Colorado</option>
                <option value="comuna-staRosaLeales-lagBlanca">Comuna Sta Rosa de Leales y Lag. de Blanca</option>
                <option value="comuna-VilladeLeales">Villa de Leales</option>

                <option value="departamento-Trancas" disabled selected>Trancas</option>
                <option value="comuna-choromoro">Comuna Choromoro</option>
                <option value="comuna-SanPedrodeCol">Comuna San Pedro de Colalao</option>
                <option value="comuna-tapia">Comuna Tapia</option> */}


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
              onClick={() => history.push("/Inicio-sesion")}
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