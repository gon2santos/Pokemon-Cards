import React from "react"
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main"
import Sets from "./components/Sets/Sets";
import Series from "./components/Series/Series";
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
          <Route exact path="/" component={Main} />
          <Route exact path="/series" component={Series} />
          {/* <Route exact path="/sets" component={Sets} /> */}
          <Route exact path="/sets/:seriesid" component={Sets} />
        </Switch>
      </Wrapper>
    </div>

  )
}



export default App;
