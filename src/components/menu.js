import React from 'react';
import classNames from "classnames";

import "./scss/menuFullScreen.scss";

const Menu = ({menuOpen, fixed}) => {
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
                href="/" 
                data-link-alt="Clases"
                >
                    <span>Clases</span>
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
                <a
                href="/" 
                data-link-alt="Contacto"
                >
                    <span>Contacto</span>
                </a>
            </div>
        </div>
     );
}
 
export default Menu;