import React from 'react'

// import components
import Display from '../../components/outputs/Display';

// class Results extends Component {
const Results = (props) => {
      return (
        <div>
          {props.data.map((data, index) => {
            return(
              <Display
                name={data['Subject ID [enum]']}
                age={data['Age, years [float]']}
                gender={data['Gender (enum)']}
                key={data['Subject ID [enum]']}

                bp={data['BP (Systolic Blood Pressure) [float]']}
                mass={data['Body mass index [float]']}
                smoker={data['Smoker (0- no, 1- yes) [enum]']}
                diabetes={data['Diabetes (0- no, 1- yes) [enum]']}
              />


            );
          })}
        </div>
      );
}

export default Results
