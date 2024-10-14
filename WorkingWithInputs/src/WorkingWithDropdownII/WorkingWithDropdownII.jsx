/**
 * 5. Create a React Component, to display all the items in the fruits
 *    array in the DOM
 *    (a) Create a dropdown select to filter fruits by category and
 *        display on the DOM.
 *
 * Step-1: List all the data using map() and providing each data their
 *         unique id and store them in a "data" variable:
 * <ul>
 *    {data.map(({ id, name }) => {
 *       <li key={id}> {name} </li>
 *    })}
 * </ul>
 *
 *   <select onChange={handleChange}>
 *     <option value="All">All</option>
 *     <option value="Apple">Apple</option>
 *     <option value="Banana">Banana</option>
 *     <option value="Orange">Orange</option>
 *     <option value="Grapes">Grapes</option>
 *     <option value="Mango">Mango</option>
 *   </select>
 *
 * Step-2: data is initially set to "fruits" array. Else we set data to
 *         the filtered data:
 *
 * const [data, setData] = useState(fruits);
 * 
 * const handleChange = (event) => {
 *    event.target.value === "All" ? setData(fruits.filter(({ category })
 *                                   => category === event.target.value));
 * 
 */ 

import { useState } from "react";

const fruits = [
  { id: 1, category: "Apple", name: "Apple Shimla" },
  { id: 2, category: "Apple", name: "Kashmiri Shimla" },
  { id: 3, category: "Apple", name: "Ambri Apple" },
  { id: 4, category: "Banana", name: "Banana Robusta" },
  { id: 5, category: "Banana", name: "Raw Banana Green" },
  { id: 6, category: "Orange", name: "Orange Indian" },
  { id: 7, category: "Orange", name: "Orange USA" },
  { id: 8, category: "Grapes", name: "Grapes Black" },
  { id: 9, category: "Grapes", name: "Grapes Seedless" },
  { id: 10, category: "Mango", name: "Badami" },
  { id: 11, category: "Mango", name: "Aphonso" },
  { id: 12, category: "Mango", name: "Ratnagiri" },
]


export default function WorkingWithDropdownII() {
  const [data, setData] = useState(fruits);
  
  const handleChange = (event) => {
    event.target.value === "All" ? 
    setData(fruits) : setData(fruits.filter(({ category }) => 
      category === event.target.value));
  }
  
  return (
    <div className="WWD">
      <h1>Module-5: Working with Dropdown-II</h1>

      <select onChange={handleChange}>
        <option value="All">All</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
        <option value="Grapes">Grapes</option>
        <option value="Mango">Mango</option>
      </select>

      <ul>
        {data.map(({ id, name }) => (
           <li key={id}> {name} </li>
        ))}
      </ul>

    </div>
  )
}