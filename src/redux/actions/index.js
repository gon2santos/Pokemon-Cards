export const GET_ALL_SETS = "GET_ALL_SETS";
export const GET_CARDS = "GET_CARDS";


// Fijarse que la sintaxis de nuestra Action creator es distinta a lo que venimos haciendo. Esto es
// debido al uso del middleware "thunk", el cual nos permite trabajar con acciones asincrónicas.
// Necesitamos hacer uso de este middleware ya que nuestras peticiones al back siempre son asincrónicas,
// por lo tanto, necesitamos ese "delay" para despachar nuestra action hasta que la data nos llegue.
// Vas a tener que usar la funcion "dispatch" recibida en la funcion interna para despachar la action que
// va a llegar a nuestro reducer.
// Acá pueden ver un poco mejor la explicación y algunos ejemplos: https://github.com/reduxjs/redux-thunk

// Usar ruta 'http://localhost:3001/houses' para buscar todas las houses en nuestro back.
// Esto lo vas a poder hacer utilizando fetch.
// export const getAllHouses = () => dispatch => {};

export function getAllSets(id) {
    return async function(dispatch) {
      return fetch(`https://api.pokemontcg.io/v2/sets?q=series:${id}`)
        .then(response => response.json())
        .then(response => {
          dispatch({ type: GET_ALL_SETS, payload: response});
        });
    };
  }

// Usar ruta 'http://localhost:3001/houses/:id' para buscar una house por el id pasado
// como parámetro de la action creator.
// Donde :id, el id recibido como argumento de la action creator.
// Ojo, hacer un console.log de la respuesta desde el back. En nuestro reducer esperamos un objeto;
// export const getHouse = () => dispatch => {};

export function getCards(id) {
    return async function(dispatch) {
      return fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${id}`)
        .then(response => response.json())
        .then(response => {
          dispatch({ type: GET_CARDS, payload: response});
        })
        .then(console.log(`Trayendo cartas desde https://api.pokemontcg.io/v2/cards?q=set.id:${id} ...`))
    };
  }