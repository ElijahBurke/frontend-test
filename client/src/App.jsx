import React, { useState, useEffect } from 'react';
import './App.scss';
import { Route, Switch } from 'react-router-dom';
import * as apiService from './API/apiService';
import Home from './Components/Home/Home';
import Predict from './Components/Predict/Predict';

function App() {
  const [targets, setTargets] = useState(false);
  const [data, setData] = useState(false);
  const [curr, setCurr] = useState(false);

  useEffect(() => {
    apiService.getListTargets()
      .then((targetsResp) => {
        setTargets(targetsResp);
        setCurr(targetsResp[0]);
      });
    apiService.getData()
      .then(setData);
  }, []);
  return (
    <Switch>
      <Route exact path="/" render={() => <Home curr={curr} data={data} targets={targets} setCurr={setCurr} />} />
      <Route exact path="/predict/:name" render={(routeProps) => <Predict name={routeProps.match.params.name} data={data} />} />
    </Switch>
  );
}

export default App;
