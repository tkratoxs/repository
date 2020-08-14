import React, {useState} from 'react';

import Header from './header/Header';
import SideBar from './SideBar';


const Layout = ({children}) => {

    const [menuOpen, setMenuOpen] = useState(false);

    return ( 
        <>
            <SideBar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />

            <Header 
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />

            <main>
                {children}
            </main>

            <footer>
                
            </footer>
        </>
    );
}
 
export default Layout;