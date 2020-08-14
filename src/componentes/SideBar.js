import React from 'react';
import styled from '@emotion/styled';
import classNames from "classnames";

const DivBG = styled.div`
    background-color:#ffe003;
    width:45%;
    height:100%;
    z-index:1;
    position:fixed;
    top:0;
    right:0;
    @media screen and (max-width: 991px) {
        width:50%;
        transition:0.35s;
    }
    @media screen and (max-width: 767px) {
        &.open{
            width:100%;
        }
    }
`;

const SideBar = ({menuOpen}) => {
    return ( 
        <DivBG
            className={classNames({
                open: menuOpen
            })}
        ></DivBG>
    );
}
 
export default SideBar;