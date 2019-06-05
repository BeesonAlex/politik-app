import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from './components/nav-bar/NavBarHome';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <main className="main-wrapper">
      <Switch>
      <Home />

      
      </Switch>
      
      </main>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
