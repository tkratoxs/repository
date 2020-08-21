import React from "react"

import Layout from "../componentes/Layout"
import SEO from "../componentes/seo"
import styled from '@emotion/styled';

const CustomDiv = styled.div`
  height:calc(100vh - 170px);
  padding:15px;
`;

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <CustomDiv>
      <h1>Ups...</h1>
      <p>
        La página que estás buscando no existe.
      </p>
    </CustomDiv>
  </Layout>
)

export default NotFoundPage
