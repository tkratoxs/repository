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

import Header from "./header";
import HamburgerMenu from "./hamburgerMenu";
import Menu from "./menu";

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

  const onScroll = (e) => {
    setScrollTop(window.pageYOffset);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  },[]);

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
        />

        <HamburgerMenu
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
      </header>
      <div
        className={classNames({
            'main-container': true,
            fixed: fixed
          })}
      >
        <main>{children}</main>
      </div>
      <footer>
        © {new Date().getFullYear()}
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
