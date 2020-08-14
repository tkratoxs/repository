import React, {useState} from "react"
import { useStaticQuery, graphql, Link } from "gatsby";
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';
import {Container, Row, Col, Modal} from 'react-bootstrap';

import SEO from "../components/seo"
import ContactoForm from "../components/contactoForm"

import "react-multi-carousel/lib/styles.css";
import "../components/scss/index.scss";

import Layout from "../componentes/Layout";

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
  }`);

  return(
    <Layout>
      <SEO title="Home" />

      <ImageBackground 
        fluid={imgs.img1.sharp.fluid}
        alt="Parivrtta Upavista Konasana"
        fadeIn="soft"
      />

    </Layout>
  );
}

export default IndexPage
