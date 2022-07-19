import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import setsImg from '../../img-cp2/sets-img.jpg';
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

const Sets = () => {
  return (
    <Wrapper>
      <div>
        <Image src={setsImg} alt='main-img' />
        <div>
          <h3>Select a Set: </h3>
          <ul>
{/*           <Route exact path="/houses/:houseId" component={Sets} />  <<-- usa este formato para pasar ids en los siguientes links */}
              <li><Link to="/series">Sword & Shield</Link></li>
              <li><Link to="/series">Sun & Moon</Link></li>
              <li><Link to="/series">XY</Link></li>
              <li><Link to="/series">Black & White</Link></li>
              <li><Link to="/series">HeartGold & SoulSilver</Link></li>
              <li><Link to="/series">Platinum</Link></li>
              <li><Link to="/series">Diamond & Pearl</Link></li>
              <li><Link to="/series">EX</Link></li>
              <li><Link to="/series">E-Card</Link></li>
              <li><Link to="/series">Neo</Link></li>
              <li><Link to="/series">Gym</Link></li>
              <li><Link to="/series">Classic</Link></li>
              <li><Link to="/series">POP</Link></li>
              <li><Link to="/series">Promos</Link></li>
              <li><Link to="/series">Trainer Kits</Link></li>
              <li><Link to="/series">Other</Link></li>
              <li><Link to="/series">Collections</Link></li>
          </ul>

        </div>
      </div>
    </Wrapper>
  );
};

export default Sets;



