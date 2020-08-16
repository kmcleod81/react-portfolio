import React, { Component } from 'react';
import './App.css';

//function based component (stateless preferred)

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello React</h1>
//     </div>
//   );
// }

// class based components can use states easier, assign once in component

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React</h1>
      </div>
    );
  }
}

export default App;
