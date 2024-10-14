/**
 * Understanding how to write JSX:
 * => JSX is a syntax to JavaScript.
 * => It is helpful as a visual aid when working with UI inside the JS.
*/

/**
 * Single Data:
 * Q. Write a React component to display two numbers and the sum of
 *    those two numbers. Calculate the sum dynamically.
 * => We can use a variable inside our HTML.
*/

const firstNumber = 5;
const secondNumber = 4;

function SumCard() {
  return (
    <div className='App'>
      <h1 className='app-header'>Sum of two numbers</h1>
      <div className='app-body'>
        <p>First Number  : { firstNumber }</p>
        <p>Second Number : { secondNumber }</p>
        <p>Sum : { firstNumber + secondNumber }</p>
      </div>
    </div>
  )
}


function App() {
  return (
    <SumCard />
  )
}

export default App
