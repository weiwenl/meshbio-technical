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
      <p style={{'display':'inline', 'padding':'0 0.5em'}}>Age:</p>
      <input
        name='fage'
        type='number'
        style={inputStyles}
        onChange={props.firstAge}/>
      <p style={{'display':'inline', 'padding':'0 0.5em'}}>to</p>
      <input
        name='lage'
        type='number'
        style={inputStyles}
        onChange={props.lastAge}/>
    </div>
  );
}

export default AgeInput
