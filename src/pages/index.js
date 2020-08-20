import React, {useState} from "react"
import { useStaticQuery, graphql } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import { Row, Col, Modal} from 'react-bootstrap';

import SEO from "../components/seo"

import "react-multi-carousel/lib/styles.css";
import "../components/scss/index.scss";

import ContactoForm from "../components/contactoForm"
import Layout from "../componentes/Layout";
import Clase from "../componentes/Clase";

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
      z-index:2;
    }
    @media only screen and (max-width : 319px) {
      height:300px;
    }
`;

const Banner = styled.div`
  position:relative;
  .quote-container{
    position:absolute;
    top: 50%;
    transform:translateY(-50%);
    left:55%;
    z-index:3;
    padding:0 50px;
    h2{
      font-size:1.6rem;
    }
    h3{
      font-size:1.1rem;
    }
    @media screen and (max-width: 991px) {
      left:50%;
    }
    @media screen and (max-width: 767px) {
      padding:0 25px;      
    }
    @media screen and (max-width: 575px) {
      position:relative;
      top:unset;
      left:unset;
      transform:none;
      overflow:hidden;
      h2{
        text-align:center;
      }
      h3{
        text-align:center;
      }
    }
  }
`;

const RowClases = styled(Row)`
  margin-top:4rem;
  margin-bottom:4rem;
  .col-clase{
    z-index:1;
  }
`;

const IndexPage = () => {
  const imgs = useStaticQuery(graphql`
  {
    img1: file(relativePath: {eq: "poses/parvrittaUpavistaKonasanaY.png"}) {
      sharp: childImageSharp {
        fluid(quality:90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imgClase1: file(relativePath: {eq: "poses/index1.png"}) {
      sharp: childImageSharp {
        fluid(quality:90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    imgClase2: file(relativePath: {eq: "poses/index3.png"}) {
      sharp: childImageSharp {
        fluid(quality:90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }`);

  const [show, setShow] = useState(false);
  const [opcionModal, setOpcionModal] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <Layout>
      <SEO title="Home" />

      <Banner>
        <ImageBackground 
          fluid={imgs.img1.sharp.fluid}
          alt="Parivrtta Upavista Konasana"
          fadeIn="soft"
        />
      
        <div 
        className="quote-container"
        >
          <h2
            className="mt-4 mb-4"
            data-sal="slide-left"
            data-sal-duration="2000"
            data-sal-delay="2000"
          >
              "Tu cuerpo existe en el pasado y tu mente en el futuro. En yoga ellos están juntos en el presente."
          </h2>
          <h3
            className="mt-3 mb-4"
            data-sal="slide-left"
            data-sal-duration="2000"
            data-sal-delay="2000"
          >
            Yogacharya B.K.S. Iyengar
          </h3>
        </div>
      </Banner>

      <RowClases>
        <Col 
        sm={6} 
        className="col-clase"
        data-sal="slide-right"
        data-sal-delay="300"
        data-sal-duration="1000"
        >
          <Clase
            titulo="clases online"
            txt1="Lunes, miércoles y jueves de 19 a 20:15hrs"
            txt2="En estas clases puedo observarte y darte seguimiento."
            txt3="Donativo Voluntario"
            imagen={imgs.imgClase2}
            handleShow={handleShow}
            opcionModal="claseszoom"
            setOpcionModal={setOpcionModal}
          />
        </Col>
        <Col 
        sm={6} 
        className="col-clase"
        data-sal="slide-left"
        data-sal-delay="300"
        data-sal-duration="1000"
        >
          <Clase
            titulo="clases privadas"
            txt1="En línea y presenciales"
            txt2="Clases impartidas según tus necesidades y nivel de experiencia."
            txt3=""
            imagen={imgs.imgClase1}
            handleShow={handleShow}
            opcionModal="clasespar"
            setOpcionModal={setOpcionModal}
          />
        </Col>
      </RowClases>
    
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
            opcionSelect={opcionModal}
            handleClose={handleClose}
          />
        </Modal.Body>
      </Modal>
      
    </Layout>
  );
}

export default IndexPage
