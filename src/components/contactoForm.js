import React, {useState, useEffect} from 'react';
import {Form, Col, Button} from "react-bootstrap";
import classnames from "classnames";
import styled from '@emotion/styled';
import DayPicker, { DateUtils } from 'react-day-picker';
import axios from 'axios';

import 'react-day-picker/lib/style.css';

const FormControl = styled(Form.Control)`
    background-color:#eee;
    color:#000;
    border-width:0;
    border-radius:0;
    border-bottom:solid 1px #ced4da;
    outline:none !important;
    outline-offset: none !important;
    margin-bottom:20px;
    &::placeholder{
        color:#000;
    }
    &:focus{
        background-color:#eee;
        color:#000;
        outline:none !important;
        outline-offset: none !important;
        box-shadow: inset 0 -1px 0 #ced4da;
    }
    &.form-control-error{
        border-color:red;
        color:red;
        &::placeholder{
            color:red;
        }
    }
`;
const FormControlTextArea = styled(Form.Control)`
    background-color:#eee;
    color:#000;
    border-radius:0;
    border-width:0;
    border-bottom:solid 1px #ced4da;
    outline:none !important;
    outline-offset: none !important;
    margin-top:10px;
    margin-bottom:10px;
    resize:none;
    &::placeholder{
        color:#000;
    }
    &:focus{
        background-color:#eee;
        color:#000;
        outline:none !important;
        outline-offset: none !important;
        box-shadow: inset 0 -1px 0 #ced4da;
    }
`;
const FormStyled = styled(Form)`
    padding-left:15%;
    padding-right:15%;
    padding-bottom:50px;
    text-align:center;
    @media only screen and (max-width : 575px) {
        padding-left:0;
        padding-right:0;
    }
`;
const Boton = styled(Button)`
    &, &:hover, &:focus, &:active{
        color:#000;
        background-color:#FCE202 !important;
        border-color:#FCE202 !important;
        border-radius:0;
        padding:5px 30px;
        border-width:0;
        text-align:center;
        width:100%;
    }
`;

const PmsgForm = styled.p`
    font-weight:500;
    color: #000;
    text-align:center;
`;

const ContactoForm = ({opcionSelect, handleClose}) => {

    const disabledDays = [
        {before: new Date()},
        {daysOfWeek: [0,2,5,6]}
    ];
    const [formulario, handleFormulario] = useState({nombre:"",email:"", opcion:opcionSelect,diasClase:[],claseparticular:"",pregunta:""});
    const [selectedDays, setSelectedDays] = useState([]);
    const [errorNombre, handleErrorNombre] = useState(false);
    const [errorEmail, handleErrorEmail] = useState(false);
    const [errorClasesZoom, handleErrorClasesZoom] = useState(false);

    const handleDayClick = (day, { selected }) => {
        handleErrorClasesZoom(false);
        if (selected) {
            setSelectedDays(selectedDays.filter(selectedDay =>
                !DateUtils.isSameDay(selectedDay, day))
            );
        } else {
            //selectedDays.push(day);
            setSelectedDays([...selectedDays, day]);
        }
        //setSelectedDays(selectedDays);
    }

    useEffect(() => {
        handleFormulario({
            ...formulario,
            "diasClase": selectedDays
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedDays]);

    const handleChange = e => {
        handleFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    }
    const [serverState, setServerState] = useState({
        submitting: false,
        status: null,
        msg: ''
    });
    const handleServerResponse = (ok, msg, form) => {
        setServerState({
          submitting: true,
          status: ok,
          msg: msg
        });
        if (ok) {
            handleErrorNombre(false);
            handleErrorEmail(false);
            //handleFormulario({nombre:"",telefono:"",email:"", opcion:"no",diasClase:[],pregunta:""});
            form.reset();
            if(handleClose!==null){
                setTimeout(handleClose.bind(this), 2500);
            }
        }
    };

    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const {nombre, email} = formulario;
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(nombre===""){
            handleErrorNombre(true);
            return;
        }
        if(email===""||!re.test(String(email).toLowerCase())){
            handleErrorEmail(true);
            return;
        }
        if(formulario.opcion==="claseszoom"){
            if(formulario.diasClase.length===0){
                handleErrorClasesZoom(true);
                return;
            }
        }

        setServerState({ 
            submitting: true,
            status: null,
            msg: '' 
        });
        
        axios({
            method: "post",
            url: "https://getform.io/f/4d0512a6-6d47-4c53-a372-a64d32fab71e",
            data: new FormData(form)
        }).then(r => {
            handleServerResponse(true, "OK!", form);
        }).catch(r => {
            handleServerResponse(false, r.response, form);
        });
        
    }

    return ( 
        <>
        {serverState.status?
            <PmsgForm>
                {
                formulario.opcion==="claseszoom"?"Gracias, en un lapso no mayor a 24 horas recibirás en el correo proporcionado el enlace para conectarte a la clase.":"Gracias, te contactaremos por el correo proporcionado."
                }
            </PmsgForm>
        :
            <FormStyled
            name="contacto-gilbertoyoga"
            onSubmit={handleOnSubmit}
        >
            <Form.Row>
                <Col>
                    <Form.Group controlId="formGridNombre">
                        <FormControl type="text" placeholder="Nombre" name="nombre" className={classnames({"form-control-error": errorNombre})} onChange={handleChange} onClick={() => handleErrorNombre(false)} />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formGridEmail">
                        <FormControl type="mail" placeholder="Email" name="email" className={classnames({"form-control-error": errorEmail})} onChange={handleChange} onClick={() => handleErrorEmail(false)} />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <FormControl name="opcion" as="select" value={formulario.opcion} onChange={handleChange}>
                        <option value="no" disabled>Estoy interesado(a) en:</option>
                        <option value="claseszoom">Clases en línea</option>
                        <option value="clasespar">Clases particulares</option>
                        <option value="clasesparres">Clases particulares restaurativa</option>
                        <option value="otro">Otro</option>
                    </FormControl>
                </Col>
            </Form.Row>
            {formulario.opcion==="claseszoom"?
            <>
                <Form.Row>
                    <Col
                    className={classnames({
                        "msg-error": errorClasesZoom
                    })}
                    >
                        Elige los días que tomarás clase<br/>
                        las clases son lunes, miércoles y jueves de 19 a 20:15 hrs
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <DayPicker
                        selectedDays={selectedDays}
                        onDayClick={handleDayClick}
                        disabledDays={disabledDays}
                        />
                    </Col>
                </Form.Row>
            </>
            :null}
            {formulario.opcion==="clasespar"||formulario.opcion==="clasesparres"?
                <Form.Row>
                    <Col>
                        <Form.Check inline defaultChecked label="Presencial" type="radio" name="claseparticular" />
                        <Form.Check inline label="En línea" type="radio" name="claseparticular" />
                    </Col>
                </Form.Row>
            :null}
            <Form.Row>
                <Col>
                    <FormControl type="hidden" name="diasClase" value={formulario.diasClase} />
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formGridTextarea">
                        <FormControlTextArea as="textarea" name="pregunta" cols="12" rows="3" placeholder="Comentarios adicionales" onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Form.Row>
            {(errorNombre||errorEmail||errorClasesZoom)?
            <Form.Row>
                <Col className="msg-error">
                    Por favor rellena los campos obligatorios
                </Col>
            </Form.Row>
            :null}
            <Boton variant="primary" type="submit">
                {serverState.submitting?
                    "Enviando"
                :
                    "Enviar"
                }
            </Boton>
        </FormStyled>
        }
        </>
     );
}
 
export default ContactoForm;