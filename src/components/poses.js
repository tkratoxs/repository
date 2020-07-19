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

const PosesComponent = ({posesArray, setPoseId}) => {

    return ( 
        <CustomRow>
            {posesArray.map((pose, index) => (
                <PoseComponent
                    key={pose.slug}
                    pose={pose}
                    index={index}
                    setPoseId={setPoseId}
                />
            ))}
        </CustomRow>
     );
}
 
export default PosesComponent;