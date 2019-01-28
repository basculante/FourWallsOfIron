import React, { Component } from 'react';
import './App.css';
import Home from './components/Homepage';

class App extends Component {
  render() {
    return (
      <div className="App">
      	<div className="title-banner">
	        <h1 className="vectro">
	        <span className="vectro-body">
	        FOUR WALLS OF IRON
	        </span>
	        <span className="vectro-red">I</span>
	        <span className="vectro-green">I</span>
	        <span className="vectro-blue">I</span>
	        </h1>
        </div>
        <Home />
        <div className="subtitle">
        Find a program.
        </div>
      </div>
    );
  }
}

export default App;
