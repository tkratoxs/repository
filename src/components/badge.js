import React from 'react';
import {Badge} from 'react-bootstrap';
import styled from '@emotion/styled';

const BadgeStyled = styled(Badge)`
    cursor:pointer;
    margin-right:5px;
    &:first-letter{
        text-transform:uppercase;
    }
`;

const BadgeComponent = ({text, type}) => {
    return ( 
        <BadgeStyled pill variant={type}>
            {text}
            {type==="warning"?' x':null}
        </BadgeStyled>
     );
}
 
export default BadgeComponent;