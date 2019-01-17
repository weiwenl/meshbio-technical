import React, { Component, Fragment } from 'react';

// import components
import AgeInput from '../../components/inputs/AgeInput';
import GenderInput from '../../components/inputs/GenderInput';

// import svg
import searchbtn from './search.svg'

class Search extends Component {
  cons
  render() {
    return(
      <Fragment>
        <AgeInput />
        <GenderInput />
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
