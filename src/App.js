import React from "react"
import Nav from "./components/Nav/Nav";
import Houses from "./components/Houses/Houses"
import HouseDetail from "./components/HouseDetail/HouseDetail";
import CreateHouse from "./components/CreateHouse/CreateHouse";
import { Route, Switch } from 'react-router-dom';
import styled from 'styled-components';


const Wrapper = styled.div`
  width: 100%;
  background-color: #000033;
  color: Lavender;
`;


function App() {
  return (
    <div>
      <Wrapper>
        <Nav />
        <Switch>
          <Route exact path="/" component={Houses} />
          <Route exact path="/houses/:houseId" component={HouseDetail} />
          <Route exact path="/house/create" component={CreateHouse} />
        </Switch>
      </Wrapper>
    </div>

  )
}



export default App;
