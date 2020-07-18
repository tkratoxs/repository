import React, {useState, useEffect} from 'react';
import {Form, Col, Button} from "react-bootstrap";
import classnames from "classnames";
import styled from '@emotion/styled';
import DayPicker, { DateUtils } from 'react-day-picker';

import 'react-day-picker/lib/style.css';

const FormControl = styled(Form.Control)`
    background-color:#FFF;
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
        background-color:#FFF;
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
    background-color:#FFF;
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
        background-color:#FFF;
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
        color:#FFF;
        background-color:#FCE202 !important;
        border-color:#FCE202 !important;
        border-radius:0;
        padding:5px 30px;
        border-width:0;
        text-align:center;
    }
`;
const encode = data => {
    return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactoForm = ({opcionSelect}) => {

    const disabledDays = [
        {before: new Date()},
        {daysOfWeek: [0,2,5,6]}
    ];
    const [formulario, handleFormulario] = useState({nombre:"",telefono:"",email:"", opcion:opcionSelect,diasClase:[],pregunta:""});
    const [selectedDays, setSelectedDays] = useState([]);
    const [errorNombre, handleErrorNombre] = useState(false);
    const [errorEmail, handleErrorEmail] = useState(false);

    const handleDayClick = (day, { selected }) => {
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
    }, [selectedDays]);

    const handleChange = e => {
        handleFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    }

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

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                formulario,
            }),
        })
        .then(() => alert("OK"))
        .catch(error => alert(error));
        
    }

    return ( 
        <>
        <FormStyled
            name="contacto-gilbertoyoga"
            onSubmit={handleOnSubmit}
            data-netlify="true"
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
                    <Form.Group controlId="formGridTel">
                        <FormControl type="number" placeholder="Teléfono" name="telefono" onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <FormControl name="opcion" as="select" value={formulario.opcion} onChange={handleChange}>
                        <option value="no" disabled>Estoy interesado(a) en:</option>
                        <option value="claseszoom">Clases en línea</option>
                        <option value="clasesplin">Clases particulares en línea</option>
                        <option value="clasespprn">Clases particulares presenciales</option>
                        <option value="otro">Otro</option>
                    </FormControl>
                </Col>
            </Form.Row>
            {formulario.opcion==="claseszoom"?
            <Form.Row>
                <Col>
                    <DayPicker
                    selectedDays={selectedDays}
                    onDayClick={handleDayClick}
                    disabledDays={disabledDays}
                    />
                </Col>
            </Form.Row>
            :null}
            <Form.Row>
                <Col>
                    <Form.Group controlId="formGridTextarea">
                        <FormControlTextArea as="textarea" name="pregunta" cols="12" rows="3" placeholder="Comentarios adicionales" onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Form.Row>
            <Boton variant="primary" type="submit">
                Enviar
            </Boton>
        </FormStyled>
        </>
     );
}
 
export default ContactoForm;