/**
 * Working with Inputs in React:
 * 
 * 1. Working with Text Inputs and useState:
 * => Create a input field and whatever you type in the input field,
 *    show that text simultaneously below in a paragraph tag.
 *
 * Q. What events work on Input?
 * => onChange() and pass a handler, similar to how to do it with
 *    onClick()
 *
 *    <input onChange={handleChange} />
 *    const handleChange = () => {}
 *
 * => If we want to show the text whatever we are typing on the input
 *    element, we need a state variable.
 *
 *    const [text, setText] = useState("");
 *
 * Q. How do we get the text that we are typing in the input element?
 * => An event object is associated with onChange() and this onChange()
 *    is nothing but an event. An event object is associated with it,
 *    and that is why we will be able to access the event object here:
 *
 *    const handleChange = (event) => {}
 *
 * => And this "event" object is basically contains lot of data
 *    associated with our operation whatever we are doing and this
 *    will also contain our value. So, we have set the object which
 *    will contain the value of the input element.
 *
 *    const handleChange = (event) => {
 *       setText(event.target.value);
 *    }
 *
 * => Target basically defines which element we are targetting.
 *    Now, we will display the text that we are typing in the input.
 *
 *    <p>{text}</p>   
 * 
 */

import { useState } from "react";

export default function WorkingWithInputs() {
  const [text, setText] = useState("");
  const handleChange = (event) => {
    setText(event.target.value); 
  }
  return (
    <div className="WWI">
      <h1>Module-1: Working with Inputs in React</h1>
      <input onChange={handleChange} />
      <p>{text}</p>
    </div>
  )
}