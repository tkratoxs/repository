import React from 'react';
import Image from "gatsby-image";
import {Button} from "react-bootstrap";
import styled from "@emotion/styled";

/*import PoseComponent from './pose';

const CerrarLink = styled.a`
    font-weight:700;
    color:#000;
    text-transform:uppercase;
    font-size:10px;
    &:hover{
        color:#000;
    }
`;*/
const PoseDiv = styled.div`
    text-align:left;
`;
const ImagePose = styled(Image)`
    width:60%;
    margin:0 auto;
    @media screen and (max-width: 575px) {
        width:80%;
    }
`;

const PoseFullComponent = ({pose, setFilters, setPoseId}) => {
    /*
    const CerrarLinkComponent = 
        <CerrarLink
        href="#"
        onClick={(e)=>{e.preventDefault();setPoseId(null);}}
        >
            Cerrar
        </CerrarLink>;*/

    return (
        <PoseDiv> 
            
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

            <ImagePose
                fluid={pose.imagen.fluid}
                alt={pose.nombreSanscrito}
                className="mt-4 mb-4"
            />
            <h1>
                {pose.nombreSanscrito}
            </h1>
            <p>
                {pose.nombreEspanol}
            </p>

            <p>
                {pose.descripcion}
            </p>
        </PoseDiv>
    );
}
 
export default PoseFullComponent;