import React, { Component } from 'react';
import './App.css';

// import components
import Search from './container/search/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-top">
          <h1 className="App-header">Diagnosis Search</h1>
        </div>

        <div className="Search-wrapper">
          <Search />
        </div>

        <div className="Result-wrapper">
          {/* <Results /> */}
        </div>
      </div>
    );
  }
}

export default App;
