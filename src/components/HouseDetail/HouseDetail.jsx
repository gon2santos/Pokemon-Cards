import React from 'react';
import { getHouse } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux'
import CharacterCard from '../CharacterCard/CharacterCard';


const HouseDetail = (props) => {

  const house = useSelector((state) => state.house)
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getHouse(props.match.params.houseId));
  }, [])


  return (
    <div>
      House Detail
      <p>{house.name}</p>
      <p>{house.words}</p>
      <ul>
        {house.characters?.map(m =>
          <li key={m.id}>
         
              <CharacterCard fullName = {m.fullName} id = {m.id} family = {m.family} title = {m.title} imageUrl = {m.imageUrl} />
      
          </li>
          )}
      </ul>
    </div>
  );
};



export default HouseDetail;
