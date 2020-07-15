import React from 'react';
import {Col} from 'react-bootstrap';
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

const PoseComponent = ({pose}) => {
    const imgs = useStaticQuery(graphql`
    {
        img1: file(relativePath: {eq: "poses/ardhaMatsyendrasana.png"}) {
        sharp: childImageSharp {
            fluid(quality:90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
            }
        }
        }
    }`);

    return ( 
        <Col
        md={12}
        xs={3}
        >
            <Image
              fluid={imgs.img1.sharp.fluid}
              alt={pose.nombre}
              className="mt-4 mb-4"
            />
            <p>
                {pose.nombre}
            </p>
        </Col>
    );
}
 
export default PoseComponent;