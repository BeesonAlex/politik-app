import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/home/Home';
import Content from './components/content/Content';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/country-select" exact component={Content} />
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
