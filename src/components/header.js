import PropTypes from "prop-types";
import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import {Navbar} from 'react-bootstrap';
import classNames from "classnames";

import "./scss/header.scss";

const Header = ({ siteTitle, fixed }) => {
  
  
  const imgs = useStaticQuery(graphql`
    {
      img1: file(relativePath: {eq: "GIL_HZT.png"}) {
        sharp: childImageSharp {
          fixed(width:135, height:147) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      imgHeader: file(relativePath: {eq: "GIL_HZTnoBG.png"}) {
        sharp: childImageSharp {
          fluid(quality:90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }`);
  
  return (
      <Navbar
      className={classNames({
          "navbar-header": true,
          fixed: fixed
        })}
      >
        <Navbar.Brand 
          href="/"
        >
          <Image
            fluid={imgs.imgHeader.sharp.fluid}
            alt="Logo"
            className="imgHeader"
          />
          <div className="halfCircle"></div>
          <h4 className="align-center">Gilberto Carrillo</h4>
          <h3>Yoga</h3>
        </Navbar.Brand>
      </Navbar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

