import React, { Component } from 'react';
import './App.css';

// import components
import Search from './container/search/Search';
import Results from './container/results/Results';

// import json data
import json_data from './dataset.json';

class App extends Component {
  constructor(props) {
    super()
    this.state = {
      firstAge: '',
      lastAge: '',
      gender: '',
      filterData: [],
      invalidSelection: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onChangeHandler(e) {
    if(e.target.name === 'fage') {
      this.setState({
        firstAge: parseInt(e.target.value)
      });
    }

    else if(e.target.name === 'lage'){
      this.setState({
        lastAge: parseInt(e.target.value)
      });
    }
    else if(e.target.name === 'gender'){
      this.setState({ //convert from the string to num to match dataset
        gender: parseInt(e.target.value)
      });
    }
  }

  onClickHandler(e) {
    if(this.state.firstAge !== null &&
      this.state.lastAge !== null && (
      this.state.gender === 1 || this.state.gender === 2)
      && (this.state.firstAge !== this.state.lastAge)) {

        const searchData = getData(this.state.firstAge, this.state.lastAge,
          this.state.gender, json_data);
          console.log(searchData);

          this.setState({
            invalidSelection: false,
            filterData: searchData
          });
      }

    else {
      console.log('Invalid selections');
      this.setState({
        invalidSelection: true
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-top">
          <h1 className="App-header">Diagnosis Search</h1>
          <div className="Search-wrapper">
            <Search
              onChange={this.onChangeHandler}
              onClick={this.onClickHandler}
            />
          </div>
        </div>



        <div className="Result-wrapper">
          <Results
            data={this.state.filterData}
          />
        </div>
      </div>
    );
  }
}

export default App;

// filter dataset by age range and gender to get user requested data
function getData(firstAge, lastAge, gender, data) {
  let filteredData = data.filter(function (entry) {
    return ((entry['Age, years [float]'] > firstAge) &&
            (entry['Age, years [float]'] < lastAge)  &&
            (entry['Gender (enum)'] === gender) );
  });
  // console.log(filteredData);
  return filteredData;
}
