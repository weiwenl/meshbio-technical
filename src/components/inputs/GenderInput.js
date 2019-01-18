import React from 'react';

const GenderInput = (props) => {
  const inputStyles = {
    'height': '2em',
    'width': '5em',
    'textAlign': 'center',
    'fontSize': '18px',
    'backgroundColor': 'white',
    'margin': '0 1em'
  }
  return(
    <div>
      <select
        required
        name='gender'
        onChange={props.gender}
        style={inputStyles}>
        <option label='Gender'></option>
        <option label='Male' value='2'></option>
        <option label='Female' value='1'></option>
      </select>
    </div>

  );
}

export default GenderInput
