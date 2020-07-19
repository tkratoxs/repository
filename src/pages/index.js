import React, {useState} from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import Image from "gatsby-image";
import styled from '@emotion/styled';
import {Container, Row, Col, Modal} from 'react-bootstrap';
import Carousel from "react-multi-carousel";

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactoForm from "../components/contactoForm"

import "react-multi-carousel/lib/styles.css";
import "../components/scss/index.scss";

const ImageBackground = styled(BackgroundImage)`
    height:600px;
    @media only screen and (max-width : 1199px) {
      height:500px;
    }
    @media only screen and (max-width : 991px) {
      height:450px;
    }
    @media only screen and (max-width : 767px) {
      height:400px;
    }
    @media only screen and (max-width : 575px) {
      height:350px;
    }
    @media only screen and (max-width : 319px) {
      height:300px;
    }
`;

const responsive = {
  desktop: {
    breakpoint: { max: 4000, min: 768 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1
  }
};

const LinkButton = styled(Link)`
  background-color:#ffe300;
  color:#000;
  padding:10px 30px;
  &:hover{
    color:#000;
    text-decoration:none;
  }
`;

const IndexPage = () => {

  const imgs = useStaticQuery(graphql`
    {
      img1: file(relativePath: {eq: "poses/parvrittaUpavistaKonasana.png"}) {
        sharp: childImageSharp {
          fluid(quality:90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgZoom: file(relativePath: {eq: "zoomClases.jpg"}) {
        sharp: childImageSharp {
          fluid(quality:90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgCar1: file(relativePath: {eq: "poses/index1.png"}) {
        sharp: childImageSharp {
          fluid(quality:90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgCar2: file(relativePath: {eq: "poses/index2.png"}) {
        sharp: childImageSharp {
          fluid(quality:90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgCar3: file(relativePath: {eq: "poses/index3.png"}) {
        sharp: childImageSharp {
          fluid(quality:90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }`);

    const [show, setShow] = useState(false);
    const [opcionSelect, setOpcionSelect] = useState('');
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return(
    <Layout>
      <SEO title="Home" />

      <ImageBackground 
        fluid={imgs.img1.sharp.fluid}
        alt="Parivrtta Upavista Konasana"
        fadeIn="soft"
      />

      <Container
      className="mt-4 mb-4"
      >
        <Row>
          <Col
          className="text-center"
          >
            <h2
            className="mt-4 mb-4"
            >
              "Tu cuerpo existe en el pasado y tu mente en el futuro. En yoga ellos están juntos en el presente."
            </h2>
            <h3
            className="mt-3 mb-4 font-italic"
            >
              Yogacharya B.K.S. Iyengar
            </h3>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col
          sm={6}
          >
            <Image
              fluid={imgs.imgZoom.sharp.fluid}
              alt="Clases en línea"
              className="mt-4 mb-4"
            />
          </Col>
          <Col
          sm={6}
          className="text-center align-middle"
          >
            <p
            className="mt-4"
            >Estoy compartiendo clases en línea a través de Zoom.</p>
            <p>Mantente seguro y en casa.</p>
            <p>Mantente practicando!!</p>
            <p
            className="font-weight-bold"
            >Donativo Voluntario</p>
            <LinkButton
              to="/"
              onClick={
                (e) => {
                  e.preventDefault();
                  setOpcionSelect('claseszoom');
                  handleShow();
                }
              }
            >
              Registrarse
            </LinkButton>
          </Col>
        </Row>
        <hr/>
        <Row>
          <Col
          className="text-center align-middle"
          >
            <h2
            className="mt-4"
            >
              Clases privadas
            </h2>
            <h4>
              En línea o presenciales
            </h4>
            <Carousel
              swipeable={true}
              draggable={false}
              showDots={true}
              arrows={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={false}
              keyBoardControl={true}
              customTransition="all 1"
              transitionDuration={1000}
              containerClass="carousel-container"
              //removeArrowOnDeviceType={["tablet", "mobile"]}
              //deviceType={this.props.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              <div
              className="p-4"
              onClick={
                () => {
                  setOpcionSelect('clasesparres');
                  handleShow();
                }
              }
              role="button"
              >
                <Image
                  fluid={imgs.imgCar3.sharp.fluid}
                  alt="Yoga Restaurativo"
                />
                <h3>Restaurativo</h3>
                <p>
                  Ideal para las personas que una práctica de yoga usual presente un reto considerable. También para los días con poca energía, cuando se tiene alguna lesión o alguna condición particular de salud.
                </p>
              </div>
              <div
              className="p-4"
              onClick={
                () => {
                  setOpcionSelect('clasespar');
                  handleShow();
                }
              }
              role="button"
              >
                <Image
                  fluid={imgs.imgCar2.sharp.fluid}
                  alt="Yoga Principiantes"
                />
                <h3>Principiantes</h3>
                <p>
                  Clase diseñada para quienes han tenido poca o nula experiencia con el yoga, se revisa con gran detalle cada movimiento y se hace mucho énfasis en la alineación.
                </p>
              </div>
              <div
              className="p-4"
              onClick={
                () => {
                  setOpcionSelect('clasespar');
                  handleShow();
                }
              }
              role="button"
              >
                <Image
                  fluid={imgs.imgCar1.sharp.fluid}
                  alt="Yoga Avanzados"
                />
                <h3>Intermedios / Avanzados</h3>
                <p>
                  Esta clase es para quienes tienen un entendimiento sólido de las posturas básicas y hay curiosidad de hacer un estudio más profundo en la práctica.
                </p>
              </div>
            </Carousel>
          </Col>
        </Row>
      </Container>

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
            opcionSelect={opcionSelect}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>

    </Layout>
  );
}

export default IndexPage
