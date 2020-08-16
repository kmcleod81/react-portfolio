import React, { Component } from 'react';
import './App.css';
import { Portfolio } from './Portfolio/Portfolio';
import { about } from './../data/About';


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
  constructor() {
    super();

    this.state = {
      selectedSection: "",
      selectedHeading: "",
      selectedQuote: "",
      about: null,
    };
  }

  componentWillMount() {
    this.setState({
      about,
      selectedHeading: about.heading,
      selectedQuote: about.quote,
      selectedSection: "about"
    });
  }

  handleSectionClick = (section) => {
    this.setState({
      selectedSection: section,
      selectedHeading: this.state[section].heading,
      selectedQuote: this.state[section].quote
    })
  }

  render() {
    return (
      <div className="App">
        <Portfolio
          handleSectionClick={this.handleSectionClick}
          selectedSection={this.state.selectedSection}
          selectedHeading={this.state.selectedHeading}
          selectedQuote={this.state.selectedQuote}
          about={this.state.about}
        />
      </div>
    );
  }
}

export default App;
