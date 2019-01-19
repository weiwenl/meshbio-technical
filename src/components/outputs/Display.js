import React from 'react'

const Display = (props) => {
  const displayStyles = {
    'backgroundColor': '#e2f6d5',
    'width': '90vw',
    'height': '25vh',
    'padding': '2vh',
    'border': '2px solid #ccc',
    'marginBottom': '2em'
    }

  return(
    <div style={displayStyles}>
      <h4>Subject ID: {props.name}</h4>
      <h4>Age: {props.age}</h4>
      <h4>Gender: {props.gender === 1? 'Female' : 'Male'}</h4>

      <h4>Blood Pressure: {props.bp}</h4>
      <h4>Body Mass: {props.mass}</h4>
      <h4>Smoker: {props.smoker === 0? 'No' : 'Yes'}</h4>
      <h4>Has Diabetes: {props.diabetes === 0? 'No' : 'Yes'}</h4>
    </div>
  );
}

export default Display
