import React, { Component } from 'react';
import './App.css';
import { Portfolio } from './Portfolio/Portfolio';
import { Footer } from './Footer/Footer';

import { about } from './../data/About';
import { skills } from './../data/Skills';
import { projects } from './../data/Projects';
// import { contact } from '../components/Contact/Contact';



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
      skills: null,
      projects: null,
      // contact: null,
    };
  }

  componentWillMount() {
    this.setState({
      about,
      skills,
      projects,
      // contact,
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
          skills={this.state.skills}
          projects={this.state.projects}
        // contact={this.state.contact}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
