import React from 'react';
import Comp2 from './Comp2';

const Comp1 = props => {
  const { name, age, work } = props.inputData;
  return (
    <div>
      {/* Hello from Comp1 {props.inputData}
      <Comp2 inputData={props.inputData} /> */}
      Hello from Comp1 {age}
      <Comp2 inputData={{ name, age }} />
    </div>
  );
};

export default Comp1;
