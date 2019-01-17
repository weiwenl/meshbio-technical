import React, { Component, Fragment } from 'react';

// import components
import AgeInput from '../../components/inputs/AgeInput';
import GenderInput from '../../components/inputs/GenderInput';

// import svg
import searchbtn from './search.svg'

class Search extends Component {
  constructor(props) {
    super()
    this.state = {
      firstAge: '',
      lastAge: '',
      gender: ''
    }
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onChangeHandler(e){
    if(e.target.name === 'fage') {
      this.setState({
        firstAge: e.target.value
      });
    }

    else if(e.target.name === 'lage'){
      this.setState({
        lastAge: e.target.value
      });
    }
    else if(e.target.name === 'gender'){
      this.setState({
        gender: e.target.value
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
          style={{'height': '2.5em', 'padding':'0 auto'}} />
      </Fragment>
    );
  }
}

export default Search
