import React, { Component, Fragment } from 'react';

// import components
import AgeInput from '../../components/inputs/AgeInput';
import GenderInput from '../../components/inputs/GenderInput';

// import svg and json data
import searchbtn from './search.svg';


class Search extends Component {

  render() {
    return(
      <Fragment>
        <AgeInput
          firstAge={this.props.onChange}
          lastAge={this.props.onChange}/>
        <GenderInput
          gender={this.props.onChange}/>
        <input
          type='image'
          src={searchbtn}
          alt='Search'
          style={{'height': '2.5em', 'padding':'0 auto'}}
          onClick={this.props.onClick}/>
      </Fragment>
    );
  }
}

export default Search
