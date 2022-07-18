/* import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      HENRY GOT
    </div>
  );
}

export default App; */


import React from "react"
import Nav from "./components/Nav/Nav";
import Houses from "./components/Houses/Houses"
import HouseDetail from "./components/HouseDetail/HouseDetail";
import CreateHouse from "./components/CreateHouse/CreateHouse";
import { Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Houses} />
        <Route exact path="/houses/:houseId" component={HouseDetail} />
        <Route exact path="/house/create" component={CreateHouse} />
      </Switch>
    </div>

  )
}



export default App;
