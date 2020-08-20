import React from 'react'
import styled from '@emotion/styled';
import {Row, Col} from 'react-bootstrap';

const FooterDiv = styled(Row)`
    background-color: #000;
    color:#FFF;
    padding: 15px;
    font-size:12px;
    div:nth-of-type(2){
        text-align:right;
    }
    p{
        margin-bottom:0;
        
    }
    a{
        color: #FFF;
        font-weight:normal;
        &:hover{
            color:#FFF;
            text-align:right;
        }
    }
    @media screen and (max-width: 575px) {
        div{
            p, a{
                text-align:center;
            }
        }
    }
`;

const Footer = () => {
    return (
        <footer>  
            <FooterDiv>
                <Col sm={6}>
                    <p>Gilberto Carrillo - Yoga {(new Date()).getFullYear()}</p>
                </Col>
                <Col sm={6}>
                    <p><a href="mailto:hola@yogagil.com">contacto@gilbertoyoga.com</a></p>
                </Col>
            </FooterDiv>
        </footer>
    );
}
 
export default Footer;