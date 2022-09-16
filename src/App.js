import React from 'react';
import Nav from './Nav';
import './style.css';

export default function App() {
  const [EmpName, SetEmpName] = React.useState('');
  // console.log(EmpName);
  function valChange(event) {
    SetEmpName(event.target.value);
  }

  let txtLength = EmpName.length;
  // document.getElementById('demo').innerHTML = txtLength;
  let extratxt = '';
  let greet = '';
  console.log(txtLength);
  console.log(extratxt);

  if (txtLength > 20) {
    greet = 'Text Length is exceeding 20 characters.';
    extratxt = 20 - txtLength;
  }

  return (
    <div>
      <h1>Hello StackBlitz!!</h1>
      <input
        type="text"
        name="employeename"
        value={EmpName}
        onChange={valChange}
      />{' '}
      &nbsp; <label className="error">{extratxt}</label>
      <br />
      {/* <label>{EmpName}</label> */}
      <span className="error">{greet}</span>
      {/* <p id="demo">{txtLength}</p> */}
      <Nav />
    </div>
  );
}
