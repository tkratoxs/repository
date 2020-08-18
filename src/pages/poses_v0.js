import React, {useState, useEffect} from "react"
import {Container, Row, Col, Form, Button} from 'react-bootstrap';
import styled from "@emotion/styled";


import PosesComponent from "../components/poses"
import PoseFullComponent from "../components/poseFullComponent"
import PoseComponent from '../components/pose';
import Layout from "../componentes/Layout";
import SEO from "../components/seo";

import usePosturas from "../hooks/use-posturas";


const CustomRow = styled(Row)`
    @media screen and (min-width: 768px) {
        overflow-y:auto;
        max-height:100vh;
    }
    @media screen and (max-width: 767px) {
        overflow-x:auto;
        -webkit-flex-wrap:nowrap;
        flex-wrap:nowrap;
    }
`;

const PosesPage = () => {

  const posesArray = usePosturas();
  const [poseId, setPoseId] = useState(null);
  const [filterInput, setFilterInput] = useState("");
  const [filters, setFilters] = useState([]);
  const [posesFiltered, setPosesFiltered] = useState(posesArray);

  const handleChange = () => {
    setFilterInput(document.querySelector("#filterInput").value);
  }

  const applyFilter = () => {
    if(!filters.includes(filterInput)){
      setFilters([...filters, filterInput.normalize("NFD").replace(/[\u0300-\u036f]/g, "")]);
    }
    document.querySelector("#filterInput").value="";
  }

  const normalizar = str => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

  useEffect(() => {
    let posturasFiltradas = posesArray;
    filters.forEach(filtro => {
      posturasFiltradas = posturasFiltradas.filter(elm => 
        normalizar(elm.nombreSanscrito).indexOf(normalizar(filtro)) !== -1
        ||
        normalizar(elm.nombreEspanol).indexOf(normalizar(filtro)) !== -1
        ||
        normalizar(elm.familia).indexOf(normalizar(filtro)) !== -1
        ||
        normalizar(elm.descripcion).indexOf(normalizar(filtro)) !== -1
      );
    });
    setPosesFiltered(posturasFiltradas);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

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
        <Row
        className="mb-4"
        >
          <Col>
            <Form>
              <Row>
                <Col
                md={4}
                sm={5}
                xs={12}
                >
                  <Form.Control
                    className="mb-2 mr-sm-2"
                    id="filterInput"
                    placeholder="Buscar"
                    name="filterInput"
                    onChange={handleChange}
                    onKeyDown={e => {if (e.key === 'Enter'||e.key === ' '){ 
                                e.preventDefault();
                                applyFilter();}
                              }}
                  />
                </Col>
                <Col
                md={3}
                sm={4}
                xs={12}>
                  <Button type="submit" className="mb-2" block
                  onClick={e =>{e.preventDefault(); applyFilter();}}>
                    Filtrar
                  </Button>
                </Col>
              </Row>
            </Form>
            {
              filters.map((filtro)=>
                <Button
                  variant="warning"
                  className="button-badge"
                  key={filtro}
                  onClick={()=>
                    setFilters(filters.filter((filtroText)=>filtro!==filtroText))}
                >
                    {filtro} <strong>x</strong>
                </Button>
              )
            }
          </Col>
        </Row>
        <Row>
          {poseId!==null?
            <Col md={3}>
              {posesFiltered.length===0?
                <p>
                  No hay resultados
                </p>
                :
                <CustomRow>
                  <PosesComponent
                    posesArray={posesFiltered}
                    setPoseId={setPoseId}
                    wide={12}
                  />
                </CustomRow>
              }
            </Col>
          :
            <>
            {posesFiltered.length===0?
              <Col>
                <p>
                  No hay resultados
                </p>
              </Col>
              :
              <>
                {posesFiltered.map((pose) => (
                  <PoseComponent
                      key={pose.slug}
                      pose={pose}
                      setPoseId={setPoseId}
                      wide={3}
                  />
                ))}
              </>
            }
            </>
          }
          {poseId!==null?
            <Col>
              <PoseFullComponent
                pose={posesArray[poseId]}
                setFilters={setFilters}
                setPoseId={setPoseId}
              />
            </Col>
          :null}
        </Row>
      
      </Container>

    </Layout>
  );
}

export default PosesPage
