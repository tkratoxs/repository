import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {Navbar} from "react-bootstrap";

import Menu from './Menu'
import HamburgerMenu from './HamburgerMenu';

import "./scss/header.scss";

const Header = ({menuOpen, setMenuOpen}) => {
    
    const imgs = useStaticQuery(graphql`
    {
        imgHeader: file(relativePath: {eq: "GIL_HZTnoBG.png"}) {
            sharp: childImageSharp {
                fluid(quality:90) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }`);

    return ( 

        <header>
            <Navbar>
                <AniLink
                fade
                hex="#FCE202"
                to="/" 
                className="navbar-brand"
                >
                    <Image
                        fluid={imgs.imgHeader.sharp.fluid}
                        alt="Logo"
                        className="imgHeader"
                    />
                    <div className="halfCircle"></div>
                    <h4 className="align-center">Gilberto Carrillo</h4>
                </AniLink>
                
                <Menu
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />

                <HamburgerMenu
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />

            </Navbar>
        </header>

    );
}
 
export default Header;