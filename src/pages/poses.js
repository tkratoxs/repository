import React, {useState} from "react"
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

import BadgeComponent from "../components/badge"
import PosesComponent from "../components/poses"
import PoseFullComponent from "../components/poseFullComponent"
import Layout from "../components/layout"
import SEO from "../components/seo"

import usePosturas from "../hooks/use-posturas";

const PosesPage = () => {

  const filtros=[];
  const [poseId, setPoseId] = useState(0);

  const posesArray = usePosturas();
  console.log(posesArray);
  return(
    <Layout>
      <SEO title="Home" />

      <Container
      className="mt-4 mb-4"
      >
        <Row>
          <Col>
            <h1>Asanas (Posturas)</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form inline>
              <Row>
                <Col>
                <Form.Control
                  className="mb-2 mr-sm-2"
                  id="inlineFormInputName2"
                  placeholder="Buscar"
                />
                <Button type="submit" className="mb-2">
                  Filtrar
                </Button>
                </Col>
              </Row>
            </Form>
            <BadgeComponent
              text="Ardha"
              type="warning"
            />
            <BadgeComponent
              text="Giro"
              type="warning"
            />
          </Col>
        </Row>
        <Row>
          <Col
          md={3}
          >
            <PosesComponent
              posesArray={posesArray}
              setPoseId={setPoseId}
            />
          </Col>
          <Col>
            <PoseFullComponent
              pose={posesArray[poseId]}
            />
          </Col>
        </Row>
      
      </Container>

    </Layout>
  );
}

export default PosesPage
