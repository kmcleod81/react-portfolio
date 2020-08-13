import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Nav from './components/Nav'
import Header from "./components/Header";


function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <div className="App-header">
        <Header></Header>
      </div>
    </div>
  );
}

export default App;
