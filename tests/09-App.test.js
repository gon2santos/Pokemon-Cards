import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import * as data from "../db.json";
import App from "../src/App";
import Nav from "../src/components/Nav/Nav";
import Houses from "../src/components/Houses/Houses";
import HouseDetail from "../src/components/HouseDetail/HouseDetail";
import CreateHouse from "../src/components/CreateHouse/CreateHouse";
import axios from 'axios';
import nock from 'nock';
import nodeFetch from 'node-fetch';
axios.defaults.adapter = require('axios/lib/adapters/http');

configure({ adapter: new Adapter() });

describe("<App />", () => {
  global.fetch = nodeFetch;

  let store;
  const routes = ["/", "/otraRuta", "/houses", "/houses/1", "/house/create"];
  const mockStore = configureStore([thunk]);
  const state = {
    houses: data.houses,
    house: data.houses[0],
  };

  beforeEach(async () => {
    // Mockeo de la request a la api
    const apiMock = nock('http://localhost:3001').persist();

    apiMock.get('/houses').reply(200, data.houses);

    apiMock.get(/\/houses\/\d/).reply(200, (uri, requestBody) => {
      const idStr = uri.split('/').pop();
      const id = Number(idStr);
      return data.houses.find((house) => house.id === id);
    })

    store = mockStore(state);
  });

  const componentToUse = (route) => {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
  };

  describe("El componente Nav debe ser renderizado en todas las rutas", () => {
    it('Debería ser renderizado en la ruta "/"', () => {
      const app = mount(componentToUse(routes[0]));
      expect(app.find(Nav)).toHaveLength(1);
    });

    it('Debería ser renderizado en la ruta "/otraRuta"', () => {
      const app = mount(componentToUse(routes[1]));
      expect(app.find(Nav)).toHaveLength(1);
    });
  });

  it('El componente "Houses" se debería renderizar solamente en la ruta "/"', () => {
    const app = mount(componentToUse(routes[0]));
    expect(app.find(Houses)).toHaveLength(1);
    expect(app.find(Nav)).toHaveLength(1);
  });

  it('El componente "HouseDetail" se debería renderizar solamente en la ruta "/houses/:houseId"', () => {
    const app = mount(componentToUse(routes[3]));
    expect(app.find(HouseDetail)).toHaveLength(1);
    expect(app.find(Houses)).toHaveLength(0);
    expect(app.find(Nav)).toHaveLength(1);
  });

  it('El componente "CreateHouse" se debería renderizar solamente en la ruta "/house/create"', () => {
    const app = mount(componentToUse(routes[4]));
    expect(app.find(CreateHouse)).toHaveLength(1);
    expect(app.find(Houses)).toHaveLength(0);
    expect(app.find(Nav)).toHaveLength(1);
  });
});
