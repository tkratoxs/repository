import React from 'react';
import styled from '@emotion/styled';
import classNames from "classnames";

const DivBG = styled.div`
    background-color:#ffe003;
    width:45%;
    z-index:1;
    position:absolute;
    height:calc(100% - 48px);
    top:0;
    animation-name: loadSideBar;
    animation-duration: 1s;
    animation-fill-mode:forwards;
    @keyframes loadSideBar {
        from {
            right:-45%;
        }
        to {
            right:0;
        }
    }
    @media screen and (max-width: 991px) {
        width:50%;
        transition:0.35s;
    }
    @media screen and (max-width: 767px) {
        &.open{
            width:100%;
            height:100%;
            z-index:9;
        }
    }
    @media screen and (max-width: 575px) {
        height:calc(100% - 66px);
        width: 68px;
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