/**
 * Working with dropdown and useState:
 * => Each <option> element should have a value attribute containing the
 *    data value to submit when that option is selected. If no value
 *    attribute is included, the value defaults to the text contained
 *    inside the element.
 *
 * Dropdown is also a form of input. Since user has to make an input as
 * to make as select so it is also an input.
 *
 * 
 * 4. Create a React component that allows the user to select a color
 *    from a dropdown menu.
 *    (a) Change the color of heading text to the selected color.
 *    (b) The component should have an initial state value of "black"
 *        for the selected color.
 *    (c) The dropdown menu should include at least four color options:
 *        1. black,
 *        2. red,
 *        3. blue,  
 *        4. green.
 *
 * Step-1: Create a dropdown menu:
 *       <select>
 *         <option>Black</option>
 *         <option>Red</option>
 *         <option>Blue</option>
 *         <option>Green</option>
 *       </select>
 *
 * Step-2:
 *       <select onChange={handleChange}>
 *         <option>Black</option>
 *         <option>Red</option>
 *         <option>Blue</option>
 *         <option>Green</option>
 *       </select>
 *
 *      const handleChange = (event) => {
 *        setColor(event.target.value);
 *      }
 *
 *      const[color, setColor] = useState("black");
 *  
 *      <h1 style={{color: color }}>Color changing Dropdown!</h1>
 */

import { useState } from "react";

export default function WorkingWithDropdown() {
  const[color, setColor] = useState("black");
  
  const handleChange = (event) => {
    setColor(event.target.value);
  }
  
  return (
    <div className="WWD">
      <h1>Module-4: Working with Dropdown</h1>

      <h1 style={{color: color }}>Heading Text</h1>
      <select onChange={handleChange}>
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </select>
      
    </div>
  )
}