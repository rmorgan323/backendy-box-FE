import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Inputs from '../Inputs/Inputs';

class App extends Component {
  render() {
    return (
      <div className="app-component">
        <Header />
        <Inputs />
      </div>
    );
  }
}

export default App;
