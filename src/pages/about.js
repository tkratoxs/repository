import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import {Row} from 'react-bootstrap';
import styled from '@emotion/styled';

import Layout from "../componentes/Layout"
import SEO from "../componentes/seo"

const CustomRow = styled(Row)`
  margin-bottom:2rem;
  .col-img{
    width:55%;
  }
  .col-text{
    z-index:2;
    width:45%;
    padding:0 4rem;
  }
  @media only screen and (max-width : 991px) {
    .col-img{
      width:50%;
    }
    .col-text{
      width:50%;
      padding:0 3rem;
    }    
  }
  @media only screen and (max-width : 575px) {
    .col-img{
      width:100%;
      z-index:2;
    }
    .col-text{
      width:100%;
      padding:0 3rem;
    }    
  }
`;


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

        <CustomRow>
          <div
          className="col-img"
          >
            <Image
              fluid={imgs.img1.sharp.fluid}
              alt="Clases de yoga con Gilberto Carrillo"
              className="mt-4 mb-4"
              fadeIn={true}
            />
          </div>
          <div
          className="col-text text-center align-middle"
          data-sal="slide-left"
          data-sal-duration="2000"
          >
            <h3
            className="mt-4"
            >Gilberto Carrillo</h3>
            <p>Inicié mi práctica de yoga en 2007 y desde 2013 impartó clases de manera regular a grupos de todos los niveles de experiencia.</p>
            <p>Practiqué estilos y métodos muy variados e hice dos formaciones en hatha yoga y yoga restaurativo, pero fue la profundidad del yoga Iyengar la que me cautivó.</p>
            <p>Cursé el programa de formación para profesores impartido por Chantal Gómez Jauffred y Paul King. Cuento con la certificación Iyengar, continuo estudiando, preparándome y practicando bajo las enseñanzas de este método.</p>
            <p>He estudiado directamente con la familia Iyengar en Pune, India y he tomado clases y talleres intensivos con profesores senior como David Meloni (Italia), Gloria Goldberg (EUA), Christian Pisano (Francia), Lois Steinberg (EUA), Jawahar Banghera (India), Peter Scott (Australia), Usha Devi (Suiza), Alan Brown (Inglaterra), entre otros además de cursos de filosofía del yoga y sánscrito con el Dr. Roberto García.</p>
            <p>Para mí, el yoga es una vía para conectar con mi interior, una herramienta de transformación no solo a nivel físico sino a niveles más profundos. Trato de que mi enseñanza sea entusiasta, busco combinar el dinamismo y la frescura con la precisión y atención características del método Iyengar.</p>
          </div>
        </CustomRow>

    </Layout>
  );
}

export default AboutPage
