import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Nav from './components/Nav'
import Header from "./components/Header";
import About from './components/About';



function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="App-header">
        <Header></Header>
      </div>
      <div className='About'>
        <About></About>
      </div>
    </div>
  );
}

export default App;
