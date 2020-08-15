import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import {Navbar} from "react-bootstrap";
import classNames from "classnames";

import Menu from './Menu'
import HamburgerMenu from './HamburgerMenu';

import "./scss/header.scss";

const Header = ({menuOpen, setMenuOpen, handleShow}) => {
    
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
                        className={classNames({
                            imgHeader:true,
                            open: menuOpen
                        })}
                    />
                    <div className="halfCircle"></div>
                    <h4 className="text-center">Gilberto Carrillo</h4>
                    <h3 className="text-center">Yoga</h3>
                </AniLink>
                
                <Menu
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                    handleShow={handleShow}
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