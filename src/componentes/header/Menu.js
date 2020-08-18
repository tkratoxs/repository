import React from 'react';
import {Nav} from 'react-bootstrap';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import classNames from "classnames";
import Image from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

import "./scss/menu.scss";

const Menu = ({menuOpen, setMenuOpen, handleShow}) => {
    
    const imgs = useStaticQuery(graphql`
    {
        imgFace: file(relativePath: {eq: "icons/facebookIcon.png"}) {
            sharp: childImageSharp {
                fixed(width:16, height:16) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        imgFaceMob: file(relativePath: {eq: "icons/facebookIcon.png"}) {
            sharp: childImageSharp {
                fixed(width:32, height:32) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }`);
    return ( 

        <Nav 
            className={classNames({
                open: menuOpen
              })}
        >
            <AniLink
            fade
            hex="#FCE202"
            to="/about" 
            className="nav-link"
            >
                Sobre mí
            </AniLink>
            <AniLink
            fade
            hex="#FCE202"
            to="/" 
            className="nav-link"
            >
                Clases
            </AniLink>
            <AniLink
            fade
            hex="#FCE202"
            to="/poses" 
            className="nav-link"
            >
                Posturas
            </AniLink>
            <a
            href="/" 
            className="nav-link"
            onClick={e=>{
                e.preventDefault();
                setMenuOpen(false);
                handleShow();
            }}
            >
                Contacto
            </a>
            <Nav.Link href="/">
                <Image
                    fixed={imgs.imgFace.sharp.fixed}
                    alt="Logo"
                    className="imgHeader d-none d-md-block"
                />
                <Image
                    fixed={imgs.imgFaceMob.sharp.fixed}
                    alt="Logo"
                    className="imgHeader d-md-none"
                />
            </Nav.Link>
        </Nav>

    );
}
 
export default Menu;