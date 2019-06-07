import React from 'react';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Home from './components/home/Home';
import CountrySelect from './components/country-select/CountrySelect';
import Country from './components/country/Country';
import Party from './components/party/Party';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/countries" exact component={CountrySelect} />
      <Route path="/countries/:id" exact component={Country} />
      <Route path="/countries/:id/parties/:id" exact component={Party} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
