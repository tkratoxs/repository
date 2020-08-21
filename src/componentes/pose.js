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
const Pdescr = styled.p`
    font-size:14px;
    text-align:center;
    margin-bottom:0;
`;
const ColPose = styled(Col)`
    @media screen and (max-width: 767px) {
        padding-left:5px;
        padding-right:5px;
        word-break:break-word;
        margin-bottom:1.5rem;
    }
`;

const PoseComponent = ({pose, setPoseId,wide}) => {

    return ( 
        <ColPose
        md={wide}
        xs={4}
        >
            <PoseLink
            href="#"
            onClick={e=>{e.preventDefault(); setPoseId(pose.index);}}
            >
                <Image
                fluid={pose.imagen.fluid}
                alt={pose.nombreSanscrito}
                className="mt-4 mb-1"
                />
                <Pdescr>
                    {pose.nombreSanscrito}
                </Pdescr>
            </PoseLink>
        </ColPose>
    );
}
 
export default PoseComponent;