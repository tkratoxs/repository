import {graphql, useStaticQuery} from 'gatsby';

const usePosturas = () => {
    
    const data = useStaticQuery(graphql`
    query{
        allDatoCmsPostura {
            nodes {
              slug
              nombreSanscrito
              nombreEspanol
              familia
              imagen {
                fluid {
                    ...GatsbyDatoCmsFluid
                }
              }
              descripcion
            }
        }
    }
    `);

    const arreglo = data.allDatoCmsPostura.nodes.map(postura => ({
        slug: postura.slug,
        nombreSanscrito: postura.nombreSanscrito,
        nombreEspanol: postura.nombreEspanol,
        familia: postura.familia,
        imagen: postura.imagen,
        descripcion: postura.descripcion
    }));

    return arreglo.sort((a, b) => {
        if (a.nombreSanscrito > b.nombreSanscrito) {
            return 1;
        }
        if (a.nombreSanscrito < b.nombreSanscrito) {
            return -1;
        }
        // a must be equal to b
        return 0;
    });
}
 
export default usePosturas;