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
      <select style={inputStyles}>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </select>
    </div>

  );
}

export default GenderInput
