/**
 * 3. Search on Array:
 * => Given an array of objects, "fruits", which have properties:
 *    "name", "color" and "quantity". Create a React Component that
 *    takes a fruit name as input from the user, then searches the
 *    "fruits" array for a matchmaking fruit name. If a matching
 *    fruit is found, display its color and quantity. If no matching
 *    is found, display a message saying that the fruit was not found.
 *
 * => We will learn some basic search like how we can search from:
 *    (a) array of objects
 *    (b) arrays
 *    (c) objects
 * Note: Searching is recommended is backend development.
 *
 * Step-1: To search an array, first we need input and a search button:
 *    <input />
 *    <button>Search</button>
 *
 * Step-2: Put a handler to our input:
 *
 *    <input onChange={handleInput}/>
 *    
 *    const [userInput, setUserInput] = useState("");
 *  
 *    const handleInput = (event) => {
 *       setUserInput(event.target.value);
 *    }
 *
 * Step-3: onClick() handler to our button:
 * Now if I click on search, we should find in the stored data(array) for
 * this userInput.
 *
 *    <button onClick={handleSearch}>Search</button>
 *
 *    const handleSearch = (event) => {
 *       const fruitData = fruits.find(fruit => fruit.name === userInput);
 *       setFruitsData(fruitData); 
 *    }
 * 
 *
 * => Once the userInput matches the fruits data, we can set the data in
 *    the fruitsData:
 *  
 *    const [fruitData, setFruitData] = useState("");
 *
 * Step-4: Display the fruitData:
 *    
 */

import { useState } from "react";

export default function SearchOnAnArray() {
  
  const fruits = [
    { name: "Apple", color: "Red", quantity: 10 },
    { name: "Banana", color: "Yellow", quantity: 5 },
    { name: "Orange", color: "Orange", quantity: 3 },
    { name: "Grape", color: "Purple", quantity: 7 },
  ]
  
  const [userInput, setUserInput] = useState("");
  const [fruitData, setFruitData] = useState("");
  
  const handleInput = (event) => {
    setUserInput(event.target.value);
  }

  const handleSearch = (event) => {
    const fruitData = fruits.find(fruit => fruit.name === userInput);
    setFruitData(fruitData); 
  }
  
  return (
    <div className="SOAA">
      <h1>Module-3: Search Fruit Data</h1>
      <input onChange={handleInput}/>
      <button onClick={handleSearch}>Search</button>
      {fruitData ? (
         <div>
           <p>Name: {fruitData.name}</p>
           <p>Color: {fruitData.color}</p>
           <p>Quantity: {fruitData.quantity}</p>
         </div>) : (
           <p>Fruit data not found</p>
      )}
    </div>
  )
}