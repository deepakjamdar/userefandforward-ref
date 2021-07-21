import React, { useEffect, useRef } from 'react';
import Input from './components/Input';
import './App.css';

function App() {

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const submitRef = useRef(null);

  const firstNamefwdRef = useRef(null);
  const lastNamefwdRef = useRef(null);
  const submitReffwd = useRef(null);

  useEffect(() => {
    firstNameRef.current.focus();
  }, [])

  const firstKeyDown = (e) => {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  }

  const lastKeyDown = (e) => {
    if (e.key === "Enter") {
      submitRef.current.focus();
    }
  }

  const firstKeyDownfwd = (e) => {
    if (e.key === "Enter") {
      lastNamefwdRef.current.focus();
    }
  }

  const lastKeyDownfwd = (e) => {
    if (e.key === "Enter") {
      submitReffwd.current.focus();
    }
  }

  return (
    <div className="App">
      <input type="text" onKeyDown={firstKeyDown} ref={firstNameRef} placeholder="enter first name" />
      <input type="text" onKeyDown={lastKeyDown} ref={lastNameRef} placeholder="enter last name" />
      <button ref={submitRef}>Submit</button>

       <hr /> 

      <Input type="text" onKeyDown={firstKeyDownfwd} ref={firstNamefwdRef} placeholder="enter first name" />
      <Input type="text" onKeyDown={lastKeyDownfwd} ref={lastNamefwdRef} placeholder="enter last name" />
      <button ref={submitReffwd}>Submit</button>


    </div>
  );
}

export default App;
