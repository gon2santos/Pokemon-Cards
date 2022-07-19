import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import seriesImg from '../../img-cp2/series-img.jpg';
import styled from 'styled-components';

// SI O SI FUNCTIONAL COMPONENT! SE ROMPEN LOS TEST EN CASO CONTRARIO!!


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
  text-decoration: none;`;

const Image = styled.img`
  width: 100%;
  float: left;
  border-radius: 10px;
`;

const Series = () => {
  return (
    <Wrapper>
      <div>
        <Image src={seriesImg} alt='main-img' />
        <div>
          <h3>Select a Series: </h3>
          <ul>
              <li><Link to="/sets">Sword & Shield</Link></li>
              <li><Link to="/sets">Sun & Moon</Link></li>
              <li><Link to="/sets">XY</Link></li>
              <li><Link to="/sets">Black & White</Link></li>
              <li><Link to="/sets">HeartGold & SoulSilver</Link></li>
              <li><Link to="/sets">Platinum</Link></li>
              <li><Link to="/sets">Diamond & Pearl</Link></li>
              <li><Link to="/sets">EX</Link></li>
              <li><Link to="/sets">E-Card</Link></li>
              <li><Link to="/sets">Neo</Link></li>
              <li><Link to="/sets">Gym</Link></li>
              <li><Link to="/sets">Classic</Link></li>
              <li><Link to="/sets">POP</Link></li>
              <li><Link to="/sets">Promos</Link></li>
              <li><Link to="/sets">Trainer Kits</Link></li>
              <li><Link to="/sets">Other</Link></li>
              <li><Link to="/sets">Collections</Link></li>
          </ul>

        </div>
      </div>
    </Wrapper>
  );
};

export default Series;



