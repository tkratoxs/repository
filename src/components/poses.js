import React from 'react';
import PoseComponent from './pose';

const PosesComponent = ({posesArray, setPoseId, wide}) => {

    return ( 
        <>
            {posesArray.map((pose) => (
                <PoseComponent
                    key={pose.slug}
                    pose={pose}
                    setPoseId={setPoseId}
                    wide={wide}
                />
            ))}
        </>
     );
}
 
export default PosesComponent;