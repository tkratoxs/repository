import React, {useState} from 'react';
import {Form, Col, Button} from "react-bootstrap";
import classnames from "classnames";
import styled from '@emotion/styled';
import axios from 'axios';

const Pcol = styled.p`
    text-align:center;
    color:#000;
    font-weight:300;
    margin-bottom:100px;
    a{
        color:#FFF;
        text-decoration:none;
    }
`;
const Titulo = styled.p`
    text-align:center;
    color:#000;
    font-size:2rem;
    font-weight:100;
`;

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
`;
const FormControlTextArea = styled(Form.Control)`
    background-color:#FFF;
    color:#000;
    border-radius:0;
    border:solid 1px #ced4da;
    outline:none !important;
    outline-offset: none !important;
    margin-top:10px;
    margin-bottom:10px;
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
const FormGroupL = styled(Form.Group)`
    padding-right:10%;
    @media only screen and (max-width : 575px) {
        padding-right:0;
    }
`;
const FormGroupR = styled(Form.Group)`
    padding-left:10%;
    @media only screen and (max-width : 575px) {
        padding-left:0;
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
const PmsgForm = styled.p`
    font-weight:500;
    color: #FFF;
    text-align:center;
`;
const PmsgFormError = styled.p`
    font-weight:500;
    color: #FF0000;
    text-align:center;
`;

const Contacto = () => {

    const [formulario, handleFormulario] = useState({nombre:"",compania:"",telefono:"",email:"",pregunta:""});
    const [errorNombre, handleErrorNombre] = useState(false);
    const [errorEmail, handleErrorEmail] = useState(false);

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
            handleFormulario({nombre:"",compania:"",telefono:"",email:"",pregunta:""});
            form.reset();
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
            handleServerResponse(false, r.response.data.error, form);
        });
        
    }

    return ( 
        <>
        <FormStyled
            onSubmit={handleOnSubmit}
        >
            <Titulo>
                Contacto
            </Titulo>
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
                    <Form.Control as="select">
                        <option disabled selected>Selecciona una opción</option>
                        <option>Clases en línea</option>
                        <option>Clases particulares</option>
                    </Form.Control>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Group controlId="formGridTextarea">
                        <FormControlTextArea as="textarea" name="pregunta" cols="12" rows="3" placeholder="Comentarios adicionales" onChange={handleChange} />
                    </Form.Group>
                </Col>
            </Form.Row>
            {serverState.msg!==''?
                <>
                {serverState.status?
                    <PmsgForm>
                        Gracias por ponerte en contacto, en breve recibiras respuesta al correo proporcionado.
                    </PmsgForm>
                :
                    <PmsgFormError>
                        {serverState.msg}
                    </PmsgFormError>
                }
                </>
                :
                <Boton variant="primary" type="submit">
                    Enviar
                </Boton>
            }
        </FormStyled>
        </>
     );
}
 
export default Contacto;