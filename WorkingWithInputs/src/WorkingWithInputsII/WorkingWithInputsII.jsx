/**
 * 2. Challenge for Student:
 * Q. Create 2 text input fields 'First Name' and 'Last Name'.
 *    On entering your name in the text fields, you should populate
 *    that input below in a paragraph tag.
 */

import { useState } from "react";

export default function WorkingWithInputsII() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastName = (event) => {
      setLastName(event.target.value);
  }
  
  return (
    <div className="WWI2">
      <h2>Module-2: Working with Inputs in React
      </h2>
      <label className="inputfield">
        First Name: <input onChange={handleFirstName}/>
      </label>
      <br/>
      <label className="inputfield">
        Last Name: <input onChange={handleLastName}/>
      </label>
      <p>
        You will be checked in with the name: <b>{firstName} {lastName}</b>
      </p>
    </div>
  )
}