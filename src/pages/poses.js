import React, {useState, useEffect} from "react"
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

import PosesComponent from "../components/poses"
import PoseFullComponent from "../components/poseFullComponent"
import Layout from "../components/layout"
import SEO from "../components/seo"

import usePosturas from "../hooks/use-posturas";

const PosesPage = () => {

  const posesArray = usePosturas();
  const [poseId, setPoseId] = useState(0);
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

  useEffect(() => {
    let posturasFiltradas = posesArray;
    filters.forEach(filtro => {
      posturasFiltradas = posturasFiltradas.filter(elm => 
        elm.nombreSanscrito.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(filtro.toLowerCase()) !== -1
        ||
        elm.nombreEspanol.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(filtro.toLowerCase()) !== -1
        ||
        elm.familia.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(filtro.toLowerCase()) !== -1
        ||
        elm.descripcion.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().indexOf(filtro.toLowerCase()) !== -1
      );
    });
    setPosesFiltered(posturasFiltradas);
    
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
        <Row>
          <Col>
            <Form inline>
              <Row>
                <Col>
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
                <Button type="submit" className="mb-2"
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
          <Col
          md={3}
          >
            {posesFiltered.length===0?
              <p>
                No hay resultados
              </p>
            :
              <PosesComponent
                posesArray={posesFiltered}
                setPoseId={setPoseId}
              />
            }
          </Col>
          <Col>
            <PoseFullComponent
              pose={posesArray[poseId]}
              setFilters={setFilters}
            />
          </Col>
        </Row>
      
      </Container>

    </Layout>
  );
}

export default PosesPage
