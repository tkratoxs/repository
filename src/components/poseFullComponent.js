import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import BadgeComponent from './badge';

const PoseFullComponent = ({pose}) => {
    return (
        <> 
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
            {pose.familia.map((familia) => 
                <BadgeComponent
                    key={familia}
                    text={familia}
                    type="success"
                />
            )}
        </>
    );
}
 
export default PoseFullComponent;