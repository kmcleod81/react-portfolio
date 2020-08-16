import React, { Component } from 'react';
import './App.css';
import { Portfolio } from './Portfolio/Portfolio';

// function based component (stateless preferred)

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello React</h1>
//     </div>
//   );
// }

// class based components can use states easier, assign once in component

class App extends Component {

  render() {
    return (
      <div className="App">
        <Portfolio />
      </div>
    );
  }
}

export default App;
