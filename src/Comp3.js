import React from 'react';

const Comp3 = props => {
  const { name, age } = props.inputData;
  return <div>Hello from Comp3 {name}</div>;
};

export default Comp3;
