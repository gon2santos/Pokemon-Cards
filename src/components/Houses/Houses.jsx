import React, { Component } from 'react';
import {connect} from 'react-redux'
import mainImage from '../../img-cp2/main-image-cp2.jpg';
import { getAllHouses } from '../../redux/actions';
import HouseCard from '../HouseCard/HouseCard';


// Fijense en los test que SI O SI tiene que ser un class component, de otra forma NO VAN A PASAR LOS TEST.

export class Houses extends Component {

  componentDidMount(){
    this.props.getAllHouses()
  }

  render() {
    return (
      <div>
        <h1>Game of Thrones</h1>
        <img src={mainImage} alt='main-img' />
        <h3>Houses</h3>



        <ul>
          {this.props.houses?.map(m =>
            <div key={m.id}>
              <HouseCard id= {m.id} name= {m.name} region= {m.region} words= {m.words} characters= {m.characters}/>
            </div>)}
        </ul>
      </div>
     
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


export default connect(mapStateToProps,mapDispatchToProps)(Houses)

