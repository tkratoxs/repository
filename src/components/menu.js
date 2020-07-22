import React from 'react';
import classNames from "classnames";
import { Link } from 'gatsby';
import AniLink from "gatsby-plugin-transition-link/AniLink";

import "./scss/menuFullScreen.scss";

const Menu = ({menuOpen,setMenuOpen, fixed, setVisible, setShow}) => {
    return ( 
        <div
        className={classNames({
            overlay: true,
            open: menuOpen,
            fixed: fixed
          })}
        >
            <div className="overlay-bg"></div>
            <div className="overlay-content">
                <AniLink
                fade
                hex="#FCE202"
                to="/" 
                data-link-alt="Inicio"
                >
                    <span>Inicio</span>
                </AniLink>
                <AniLink
                fade
                hex="#FCE202"
                to="/about" 
                data-link-alt="Sobre mí"
                >
                    <span>Sobre mí</span>
                </AniLink>
                <AniLink
                fade
                hex="#FCE202"
                to="/" 
                data-link-alt="Vídeos"
                >
                    <span>Clases</span>
                </AniLink>
                <AniLink
                fade
                hex="#FCE202"
                to="/poses" 
                data-link-alt="Posturas"
                >
                    <span>Posturas</span>
                </AniLink>
                <Link
                to="/contacto" 
                data-link-alt="Contacto"
                /*state={{
                    modal: true
                }}*/
                onClick={(e)=>{
                    e.preventDefault();
                    setMenuOpen(false);
                    setVisible(false);
                    setShow(true);
                }}
                >
                    <span>Contacto</span>
                </Link>
            </div>
        </div>
     );
}
 
export default Menu;