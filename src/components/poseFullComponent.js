import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import BadgeComponent from './badge';

const PoseFullComponent = ({poseId}) => {
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
    //const pose = getPoseById();
    const pose = [{slug:"ardha-matsyendrasana", nombre:"Ardha Matsyendrasana", descr:"asdasdafadsdeaadadsd"}];

    return (
        <> 
            <h1>
                {pose[0].nombre}
            </h1>

            <Image
            fluid={imgs.img1.sharp.fluid}
            alt={pose[0].nombre}
            className="mt-4 mb-4"
            />
            <p>
                {pose[0].descr}
            </p>
            <BadgeComponent
                text="Giros"
                type="success"
            />
        </>
    );
}
 
export default PoseFullComponent;