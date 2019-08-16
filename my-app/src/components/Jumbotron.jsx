import React from 'react';
import {Jumbotron as Jumbos,Container} from 'react-bootstrap';
import styled from 'styled-components';
import artImg from '../asset/artImg.png';

const Style = styled.div`
    background: url(${artImg}) no-repeat fixed bottom;
    background-size: cover;
    color: #ccc;
    height: 200px;
    position: relative;
    z-index: -2;
`;

const Overlay = styled.div`
    background-color: #000;
    opasity: 0.6;
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
`;

export const Jumbotron = () => (
  <Style>
    <Jumbos fluid className="Jumbos">
      <Overlay className="Overlay"></Overlay>
        <Container>
          <h1> Welcome </h1>
          <p> The company's hardware products include the iPhone smartphone </p>
        </Container>
      </Jumbos>
    </Style>
  )
export default Jumbotron;
