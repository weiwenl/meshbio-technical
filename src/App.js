import React, { Component } from 'react';
import './App.css';

// import components
import AgeInput from './components/inputs/AgeInput';
import GenderInput from './components/inputs/GenderInput'

// import svg
import searchbtn from './search.svg'

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-top">
          <h1 className="App-header">Diagnosis Search</h1>
        </div>

        <div className="Search-wrapper">
          <AgeInput />
          <GenderInput />
          <input type='image' src={searchbtn} alt='Search' style={{'height': '2.5em', 'padding':'0 auto'}} />
        </div>

        <div className="Result-wrapper">
          {/* <Results /> */}
        </div>
      </div>
    );
  }
}

export default App;
