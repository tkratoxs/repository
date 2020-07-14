import React from 'react';
import classNames from "classnames";

import "./scss/hamburgerMenu.scss";

const HamburgerMenu = ({menuOpen, setMenuOpen, fixed}) => {
    return ( 
        <button 
        className={classNames({
            menu: true,
            open: menuOpen,
            fixed: fixed
          })}
        onClick={() => setMenuOpen(!menuOpen)}
        >
            <div className="icon-left"></div>
            <div className="icon-right"></div>
        </button>
    );
}
 
export default HamburgerMenu;