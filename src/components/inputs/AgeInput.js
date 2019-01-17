import React from 'react';

const AgeInput = (props) => {
  const inputStyles = {
    'height': '2em',
    'width': '2em',
    'textAlign': 'center',
    'fontSize': '18px'
  }
  return(
    <div className='Age-wrapper'>
      <input name='fage' type='number' style={inputStyles}/>
      <p style={{'display':'inline', 'padding':'0 0.5em'}}>to</p>
      <input name='lage' type='number' style={inputStyles}/>
    </div>
  );
}

export default AgeInput
