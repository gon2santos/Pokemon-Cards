import React, { Component } from 'react';
import { connect } from 'react-redux'
import mainImage from '../../img-cp2/main-image-cp2.jpg';
import { getAllHouses } from '../../redux/actions';
import HouseCard from '../HouseCard/HouseCard';
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


export class Houses extends Component {

  componentDidMount() {
    this.props.getAllHouses()
  }

  render() {
    return (

      <Wrapper>
        <div>
          <Image src={mainImage} alt='main-img' />
          <div>
            <h3>Houses, this should be blue</h3>
            <ul>
              {this.props.houses?.map(m =>
                <div key={m.id}>
                  <HouseCard id={m.id} name={m.name} region={m.region} words={m.words} characters={m.characters} />
                </div>)}
            </ul>
          </div>
        </div>
      </Wrapper>

    )
  }
}

export function mapStateToProps(state) {
  return {
    houses: state.houses
  };
}


export function mapDispatchToProps(dispatch) {
  return {
    getAllHouses: () => dispatch(getAllHouses())
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(Houses)

