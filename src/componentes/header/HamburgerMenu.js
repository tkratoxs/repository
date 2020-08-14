import React from 'react';
import classNames from "classnames";

import "./scss/hamburgerMenu.scss";

const HamburgerMenu = ({menuOpen, setMenuOpen}) => {
    return ( 
        <button 
        className={classNames({
            menu: true,
            open: menuOpen
          })}
        onClick={() => setMenuOpen(!menuOpen)}
        >
            <div className="icon-left"></div>
            <div className="icon-right"></div>
        </button>
    );
}
 
export default HamburgerMenu;