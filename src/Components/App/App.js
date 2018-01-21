import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Inputs from '../Inputs/Inputs';
import CardContainer from '../CardContainer/CardContainer';

class App extends Component {
  render() {
    return (
      <div className="app-component">
        <Header />
        <Inputs />
        <CardContainer />
      </div>
    );
  }
}

export default App;
