/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useState, useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby";
import classNames from "classnames";
import {Modal, Row, Col, Container} from "react-bootstrap";

import Header from "./header";
import HamburgerMenu from "./hamburgerMenu";
import Menu from "./menu";
import ContactoForm from "./contactoForm";

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/layout.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const [menuOpen, setMenuOpen] = useState(false);
  const [fixed, setFixed] = useState(false);
  const [visible, setVisible] = useState(true);
  const [scrollTop, setScrollTop] = useState(0);
  const [prevPos, setPrevPos] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //const handleShow = () => setShow(true);

  const onScroll = (e) => {
    setScrollTop(window.pageYOffset);
  }
  
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    //FIXED
    if(scrollTop>50)
      setFixed(true);
    else
      setFixed(false);

    //HIDE-SHOW NAVBAR
    if(scrollTop < 150){
      setVisible(true);
    }
    else if (prevPos > scrollTop){
      setVisible(true);
    }
    else{
      setVisible(false);
    }
    setPrevPos(scrollTop);

  }, [scrollTop]);

  return (
    <>
      <header
        className="main-header"
      >
        <Header 
          siteTitle={data.site.siteMetadata.title} 
          fixed={fixed}
          visible={visible}
        />
        
        <Menu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          fixed={fixed}
          setVisible={setVisible}
          setShow={setShow}
        />

        <HamburgerMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
          fixed={fixed}
        />
      </header>
      <div
        className={classNames({
            'main-container': true,
            fixed: fixed
          })}
      >
        <main>
          {children}
        </main>
      </div>
      <footer
      className="p-2"
      >
        <Container>
          <Row>
            <Col className="text-center small">
              <p>
                Gilberto Carrillo - Yoga {new Date().getFullYear()}
                <br/>
                <a href="mailto:hola@yogagilberto.com">hola@yogagilberto.com</a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>

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
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
