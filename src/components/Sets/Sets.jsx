import React, { useEffect } from 'react';
import setsImg from '../../img-cp2/sets-img.jpg';
import styled from 'styled-components';
import { getAllSets, getCards } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux'
import { saveAs } from "file-saver";


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

const Sets = (props) => {
  const dispatch = useDispatch();
  const set = useSelector((state) => state.sets)
  const cards = useSelector((state) => state.cards)


  useEffect(() => {
    dispatch(getAllSets(props.match.params.seriesid));
  }, [])



  const saveFile = () => {
    if (cards.data) {
      for (var i = 0; i < cards.data.length; ++i) {
        (function (n) {
          setTimeout(function () {
            saveAs(cards.data[n].images.large, cards.data[n].id);
          }, n * 4000);
        }(i));
      }
    }
  };


  const retrieveCards = (id) => { //pasar el id del set para guardar en el state.cards las cartas
    dispatch(getCards(id))
  };


  return (
    <Wrapper>
      <div>
        <Image src={setsImg} alt='main-img' />
        <div>
          <h3>Select a Set: </h3>
          <ul>
            {/* https://api.pokemontcg.io/v2/cards?q=set.name:Sword%20&%20Shield */} {/* <<-- trae el json de las cartas de un set */}
            {/* https://api.pokemontcg.io/v2/sets?q=series:base */} {/* <<-- trae el json de los sets de una serie */}
            {set.data?.map(s =>
              <li>
                <a href={`https://api.pokemontcg.io/v2/cards?q=set.id:${s.id}`}>{s.name}</a>
                <button onClick={() => dispatch(getCards(s.id))}>Save cards to state</button>
                <button onClick={saveFile}>Download cards images</button>
              </li>
            )}
          </ul>

        </div>
      </div>
    </Wrapper>
  );
};

export default Sets;