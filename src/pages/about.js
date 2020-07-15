import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import {Container, Row, Col} from 'react-bootstrap';

import Layout from "../components/layout"
import SEO from "../components/seo"


const AboutPage = () => {

  const imgs = useStaticQuery(graphql`
    {
      img1: file(relativePath: {eq: "poses/aboutme.png"}) {
        sharp: childImageSharp {
          fluid(quality:90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }`);

  return(
    <Layout>
      <SEO title="Home" />

      <Container
      className="mt-4 mb-4"
      >
        <Row>
          <Col
          sm={6}
          >
            <Image
              fluid={imgs.img1.sharp.fluid}
              alt="Clases en línea"
              className="mt-4 mb-4"
            />
          </Col>
          <Col
          sm={6}
          className="text-center align-middle"
          >
            <h3
            className="mt-4"
            >Gilberto Carrillo</h3>
            <p>Inicié mi práctica de yoga en 2007 y desde 2013 impartó clases de manera regular a grupos de todos los niveles de experiencia.</p>
            <p>Practiqué estilos y métodos muy variados e hice dos formaciones en hatha yoga y yoga restaurativo, pero fue la profundidad del yoga Iyengar la que me cautivó.</p>
            <p>Cursé el programa de formación para profesores impartido por Chantal Gómez Jauffred y Paul King. Cuento con la certificación Iyengar, continuo estudiando, preparándome y practicando bajo las enseñanzas de este método.</p>
            <p>He estudiado directamente con la familia Iyengar en Pune, India y he tomado clases y talleres intensivos con profesores senior como Gloria Goldberg (EUA), Christian Pisano (Francia), David Meloni (Italia), Jawahar Banghera (India), Peter Scott (Australia), Usha Devi (Suiza), Alan Brown (Inglaterra), entre otros además de cursos de filosofía del yoga y sánscrito con el Dr. Roberto García.</p>
            <p>Para mí, el yoga es una vía para conectar con mi interior, una herramienta de transformación no solo a nivel físico sino a niveles más profundos. Trato de que mi enseñanza sea entusiasta, busco combinar el dinamismo y la frescura con la precisión y atención características del método Iyengar.</p>
          </Col>
        </Row>
      </Container>

    </Layout>
  );
}

export default AboutPage
