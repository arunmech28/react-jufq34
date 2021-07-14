import React from 'react';
import './style.css';
import Comp1 from './Comp1';

export default function App() {
  const data = { name: 'arun', age: 27, work: 'dhl' };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      {/* <Comp1 inputData={[JSON.stringify(data)]} /> */}
      <Comp1 inputData={data} />
    </div>
  );
}
