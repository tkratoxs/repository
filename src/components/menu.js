import React from 'react';
import classNames from "classnames";
import { Link } from 'gatsby';

import "./scss/menuFullScreen.scss";

const Menu = ({menuOpen,setMenuOpen, fixed, setVisible}) => {
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
                <a
                href="/" 
                data-link-alt="Inicio"
                >
                    <span>Inicio</span>
                </a>
                <a 
                href="/about" 
                data-link-alt="Sobre mí"
                >
                    <span>Sobre mí</span>
                </a>
                <a
                href="/poses" 
                data-link-alt="Posturas"
                >
                    <span>Posturas</span>
                </a>
                <a
                href="/" 
                data-link-alt="Vídeos"
                >
                    <span>Vídeos</span>
                </a>
                <Link
                to="/contacto" 
                data-link-alt="Contacto"
                state={{
                    modal: true
                }}
                onClick={()=>{
                    setMenuOpen(false);
                    setVisible(false);
                }}
                >
                    <span>Contacto</span>
                </Link>
            </div>
        </div>
     );
}
 
export default Menu;