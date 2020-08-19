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
        imgInst: file(relativePath: {eq: "icons/instagramIcon.png"}) {
            sharp: childImageSharp {
                fixed(width:16, height:16) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        imgInstMob: file(relativePath: {eq: "icons/instagramIcon.png"}) {
            sharp: childImageSharp {
                fixed(width:32, height:32) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        imgYoutube: file(relativePath: {eq: "icons/youtubeIcon.png"}) {
            sharp: childImageSharp {
                fixed(width:16, height:16) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
        imgYoutubeMob: file(relativePath: {eq: "icons/youtubeIcon.png"}) {
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
            <div className="link-social">
                <a href="https://www.instagram.com/gilbertoyogai/" target="_blank">
                    <Image
                        fixed={imgs.imgInst.sharp.fixed}
                        alt="Logo"
                        className="imgHeader d-none d-md-block"
                    />
                    <Image
                        fixed={imgs.imgInstMob.sharp.fixed}
                        alt="Logo"
                        className="imgHeader d-md-none"
                    />
                </a>
                <a href="https://www.facebook.com/gilbertoyogai" target="_blank">
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
                </a>
                <a href="/">
                    <Image
                        fixed={imgs.imgYoutube.sharp.fixed}
                        alt="Logo"
                        className="imgHeader d-none d-md-block"
                    />
                    <Image
                        fixed={imgs.imgYoutubeMob.sharp.fixed}
                        alt="Logo"
                        className="imgHeader d-md-none"
                    />
                </a>
            </div>
        </Nav>

    );
}
 
export default Menu;