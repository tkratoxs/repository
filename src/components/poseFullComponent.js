import React from 'react';
import Image from "gatsby-image";
import {Button} from "react-bootstrap";
import styled from "@emotion/styled";

const CerrarLink = styled.a`
    font-weight:700;
    color:#000;
    text-transform:uppercase;
    font-size:10px;
    &:hover{
        color:#000;
    }
`;

const PoseFullComponent = ({pose, setFilters, setPoseId}) => {
    return (
        <> 
            <CerrarLink
            href="#"
            onClick={(e)=>{e.preventDefault();setPoseId(null);}}
            >
                Cerrar
            </CerrarLink>
            <h1>
                {pose.nombreSanscrito}
            </h1>

            <Image
            fluid={pose.imagen.fluid}
            alt={pose.nombreSanscrito}
            className="mt-4 mb-4"
            />
            <p>
                {pose.nombreEspanol}
            </p>
            <p>
                {pose.descripcion}
            </p>
            {pose.familia.split(",").map((familia) => 
                <Button
                    key={familia.trim()}
                    className="button-badge"
                    variant="success"
                    onClick={()=>setFilters([familia.trim()])}
                >
                    {familia.trim()}
                </Button>
            )}
        </>
    );
}
 
export default PoseFullComponent;