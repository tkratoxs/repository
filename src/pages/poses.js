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
const DivPoses = styled.div`
    display:flex;
    flex-wrap:wrap-reverse;
`;
const ColPose = styled.div`
    width: 55%;
    padding:15px;
    z-index:2;
    @media screen and (max-width: 991px) {
        width:50%;
    }
    @media screen and (max-width: 767px) {
        width:100%;
    }
`;
const ColPoses = styled.div`
    width: 45%;
    padding:15px;
    z-index:2;
    @media screen and (max-width: 991px) {
        width:50%;
    }
    @media screen and (max-width: 767px) {
        width:100%;
    }
`;

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
    
  }, [filters]);

  return(
    <Layout>
      <SEO title="Home" />

        <DivPoses>
            <ColPose>
                <PoseFullComponent
                pose={posesArray[poseId]}
                setFilters={setFilters}
                setPoseId={setPoseId}
                />
            </ColPose>
          
            <ColPoses>
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
                {posesFiltered.length===0?
                <p>
                    No hay resultados
                </p>
                :
                <CustomRow>
                    <PosesComponent
                    posesArray={posesFiltered}
                    setPoseId={setPoseId}
                    wide={4}
                    />
                </CustomRow>
                }
            </ColPoses>
        </DivPoses>

    </Layout>
  );
}

export default PosesPage
