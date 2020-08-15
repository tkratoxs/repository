import React from 'react';
import styled from '@emotion/styled';
import Image from "gatsby-image";

const ClaseDiv = styled.div`
    z-index:2;
    h3{
        text-align:center;
        text-decoration:underline;
        text-transform:uppercase;
        font-size:1.5rem;
    }
    p{
        text-align:center;
        font-size:1rem;
        padding:0 2rem;
    }
    button{
        padding:5px 25px;
        color:#FFF;
        background-color:#000;
        font-size:1.2rem;
        border:solid 1px #000;
        text-transform:uppercase;
        margin:0 auto;
        display:block;
    }
    @media screen and (max-width: 575px) {
        margin-bottom:4rem;
    }
`;
const ImagenClase = styled(Image)`
    width:60%;
    margin: 0 auto;
`;

const Clase = ({titulo, txt1, txt2, txt3, imagen, handleShow, opcionModal, setOpcionModal}) => {

    return ( 

        <ClaseDiv>
            <h3>{titulo}</h3>
            <ImagenClase
              fluid={imagen.sharp.fluid}
              alt={titulo}
              className="mt-4 mb-4"
            />

            <p
            className="font-weight-bold"
            >
                {txt1}
            </p>
            <p
            className=""
            >
                {txt2}
            </p>
            <p
            className="font-weight-bold"
            >
                {txt3}
            </p>
            <button
                onClick={()=>{
                    setOpcionModal(opcionModal);
                    handleShow();
                }}
            >
                Registro
            </button>
        </ClaseDiv>

    );
}
 
export default Clase;