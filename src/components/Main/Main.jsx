import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import mainImage from '../../img-cp2/main-image-cp2.jpg';
import styled from 'styled-components';


// tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

const Wrapper = styled.div`
  width: 50%;
  border: 2px solid #333;
  border-color: Lavender;
  border-radius: 4px;
  margin: auto;
  padding: 10px;
  overflow: hidden;
  background-color: #000033;
  color: Lavender;
`;

const Image = styled.img`
  width: 100%;
  float: left;
  border-radius: 10px;
`;


export class Main extends Component {


  render() {
    return (

      <Wrapper>
        <div>
          <Image src={mainImage} alt='main-img' />
          <div>
            <h3>Services</h3>
            <Link to="/series">Get a set of cards</Link>
          </div>
        </div>
      </Wrapper>

    )
  }
}



export default Main;

