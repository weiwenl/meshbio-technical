import React, { Component, Fragment } from 'react';

// import components
import AgeInput from '../../components/inputs/AgeInput';
import GenderInput from '../../components/inputs/GenderInput';

// import svg and json data
import searchbtn from './search.svg';
import json_data from './dataset.json';

class Search extends Component {
  constructor(props) {
    super()
    this.state = {
      firstAge: '',
      lastAge: '',
      gender: '',
      filterData: {},
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

          this.setState({
            invalidSelection: false
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
    return(
      <Fragment>
        <AgeInput
          firstAge={this.onChangeHandler}
          lastAge={this.onChangeHandler}/>
        <GenderInput
          gender={this.onChangeHandler}/>
        <input
          type='image'
          src={searchbtn}
          alt='Search'
          style={{'height': '2.5em', 'padding':'0 auto'}}
          onClick={this.onClickHandler}/>
      </Fragment>
    );
  }
}

export default Search


// filter dataset by age range and gender to get user requested data
function getData(firstAge, lastAge, gender, data) {
  let filteredData = data.filter(function (entry) {
    return ((entry['Age, years [float]'] > firstAge) &&
            (entry['Age, years [float]'] < lastAge)  &&
            (entry['Gender (enum)'] === gender) );
  });
  console.log(filteredData);
}
