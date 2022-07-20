import React from 'react';
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
          <li><Link to="/sets/Sword%20&%20Shield">Sword &amp; Shield</Link></li>
              <li><Link to="/sets/Sun%20&%20Moon">Sun &amp; Moon</Link></li>
              <li><Link to="/sets/XY">XY</Link></li>
              <li><Link to="/sets/Black%20&%20White">Black &amp; White</Link></li>
              <li><Link to="/sets/HeartGold%20&%20SoulSilver">HeartGold &amp; SoulSilver</Link></li>
              <li><Link to="/sets/Platinum">Platinum</Link></li>
              <li><Link to="/sets/Diamond%20&%20Pearl">Diamond &amp; Pearl</Link></li>
              <li><Link to="/sets/EX">EX</Link></li>
              <li><Link to="/sets/E-Card">E-Card</Link></li>
              <li><Link to="/sets/Neo">Neo</Link></li>
              <li><Link to="/sets/Gym">Gym</Link></li>
              <li><Link to="/sets/Base">Classic Base</Link></li>
              <li><Link to="/sets/POP">POP</Link></li>
              <li><Link to="/sets/Promos">Promos</Link></li>
              <li><Link to="/sets/Trainer">Trainer Kits</Link></li>
              <li><Link to="/sets/Other">Other</Link></li>
              <li><Link to="/sets/Collections">Collections</Link></li>
          </ul>

        </div>
      </div>
    </Wrapper>
  );
};

export default Series;



