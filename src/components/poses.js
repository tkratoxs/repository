import React from 'react';
import PoseComponent from './pose';
import {Row} from 'react-bootstrap';
import styled from "@emotion/styled";

const CustomRow = styled(Row)`
    @media screen and (min-width: 768px) {
        overflow-y:auto;
        max-height:100vh;
    }
    @media screen and (max-width: 767px) {
        overflow-x:auto;
        -webkit-flex-wrap:nowrap;
        flex-wrap:nowrap;
    }
`;

const PosesComponent = ({filtros}) => {
    //const proyectosWP = useProjectsGrid();
    const posesArray = [{slug:"ardha-matsyendrasana", nombre:"Ardha Matsyendrasana"},{slug:"ardha-matsyendrasana2", nombre:"Ardha Matsyendrasana"},{slug:"ardha-matsyendrasana3", nombre:"Ardha Matsyendrasana"},{slug:"ardha-matsyendrasana4", nombre:"Ardha Matsyendrasana"},{slug:"ardha-matsyendrasana5", nombre:"Ardha Matsyendrasana"}];

    return ( 
        <CustomRow>
            {posesArray.map(pose => (
                <PoseComponent
                key={pose.slug}
                pose={pose}
                />
            ))}
        </CustomRow>
     );
}
 
export default PosesComponent;