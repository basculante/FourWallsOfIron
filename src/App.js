import React, { Component } from 'react';
import './App.css';
import Home from './components/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="title">FOUR WALLS OF IRON</h1>
        <h2 className="subtitle">Find a Program</h2>
        <Home />
      </div>
    );
  }
}

export default App;
