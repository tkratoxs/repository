import React from 'react';
import Image from "gatsby-image";
import {Button} from "react-bootstrap";

const PoseFullComponent = ({pose, setFilters}) => {
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
            {pose.familia.split(",").map((familia) => 
                <Button
                    key={familia}
                    className="button-badge"
                    variant="success"
                    onClick={()=>setFilters([familia])}
                >
                    {familia}
                </Button>
            )}
        </>
    );
}
 
export default PoseFullComponent;