import React from "react"
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import {Container, Row, Col} from 'react-bootstrap';

import Layout from "../components/layout"
import SEO from "../components/seo"


const PosesPage = () => {

  const imgs = useStaticQuery(graphql`
    {
      img1: file(relativePath: {eq: "poses/ardhaMatsyendrasana.png"}) {
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
          md={4}
          sm={6}
          >
            <Image
              fluid={imgs.img1.sharp.fluid}
              alt="Clases en línea"
              className="mt-4 mb-4"
            />
            <h3>Ardha Matsyendrasana</h3>
          </Col>
          <Col
          md={4}
          sm={6}
          >
            <Image
              fluid={imgs.img1.sharp.fluid}
              alt="Clases en línea"
              className="mt-4 mb-4"
            />
            <h3>Ardha Matsyendrasana</h3>
          </Col>
          <Col
          md={4}
          sm={6}
          >
            <Image
              fluid={imgs.img1.sharp.fluid}
              alt="Clases en línea"
              className="mt-4 mb-4"
            />
            <h3>Ardha Matsyendrasana</h3>
          </Col>
          <Col
          md={4}
          sm={6}
          >
            <Image
              fluid={imgs.img1.sharp.fluid}
              alt="Clases en línea"
              className="mt-4 mb-4"
            />
            <h3>Ardha Matsyendrasana</h3>
          </Col>
        </Row>
      </Container>

    </Layout>
  );
}

export default PosesPage
