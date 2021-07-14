import React from 'react';
import Comp3 from './Comp3';

const Comp2 = props => {
  const { name, age, work } = props.inputData;
  return (
    <div>
      Hello from Comp2 {name}
      <Comp3 inputData={{ name, age }} />
    </div>
  );
};

export default Comp2;
