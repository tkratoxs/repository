import React from 'react';
import {Col} from 'react-bootstrap';
import Image from "gatsby-image";
import styled from "@emotion/styled";

const PoseLink = styled.a`
    color:#000;
    cursor:pointer;
    &:hover{
        color:#000;
        text-decoration:none;
    }
`;

const PoseComponent = ({pose, index, setPoseId}) => {

    return ( 
        <Col
        md={12}
        xs={3}
        >
            <PoseLink
            href="#"
            onClick={e=>{e.preventDefault(); setPoseId(index);}}
            >
                <Image
                fluid={pose.imagen.fluid}
                alt={pose.nombreSanscrito}
                className="mt-4 mb-4"
                />
                <p>
                    {pose.nombreSanscrito}
                </p>
            </PoseLink>
        </Col>
    );
}
 
export default PoseComponent;