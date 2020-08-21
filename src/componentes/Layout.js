import React, {useState} from 'react';
import {Modal} from "react-bootstrap";

import ContactoForm from "../componentes/contactoForm"
import Header from './header/Header';
import SideBar from './SideBar';
import Footer from './Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './layout.scss';

const Layout = ({children}) => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [show, setShow] = useState(false);
  
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return ( 
        <>
            <SideBar
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
            />

            <Header 
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                handleShow={handleShow}
            />

            <main>
                {children}
            </main>

            <Footer />
            
            <Modal 
            className="modal-contacto"
            show={show}
            onHide={handleClose}
            size="xl"
            >
                <Modal.Header closeButton>
                    Contacto
                </Modal.Header>
                <Modal.Body>
                    <ContactoForm
                    opcionSelect="no"
                    handleClose={handleClose}
                    />
                </Modal.Body>
            </Modal>
        </>
    );
}
 
export default Layout;