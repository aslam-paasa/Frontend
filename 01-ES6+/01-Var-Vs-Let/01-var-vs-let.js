/* Variables declared with var have function scope. This means that they are 
accessible inside the function/block they are defined in. Take a look at the 
following code:*/ 

var guessMe = 2;
console.log("guessMe: " + guessMe); // A: guessMe is 2
(function() {
    console.log("guessMe: " + guessMe); // B: guessMe is undefined
    var guessMe = 5;
    console.log("guessMe: " + guessMe); // C: guessMe is 5
})();
console.log("guessMe: " + guessMe); // D: guessMe is 2

/*Comment B may surprise you if you have not heard of hoisting. If a variable is 
declared using var inside a function, the Javascript engine treats them as if they 
are declared at the top of a functional scope. However, if that variable has been 
declared outside the function, it has a global scope regardless of where the 
actual declaration occurs. This is called hoisting.*/ 
// () => {
//     JAVASCRIPT_STATEMENTS;
//     var guessMe = 5;
// }
// accessing guessMe will give you an error

// in the following form :
() => {
    var guessMe;
    JAVASCRIPT_STATEMENTS;
    guessMe = 5;
}

// Variables declared with var are initialized to undefined. This is why the value 
// of guessMe was undefined in comment B.

// Variables declared with let have block scope. They are valid inside the block 
// they are defined in.

// A. guesseMe is undeclared
{
    // B: guessMe is uninitialized. Accessing guessMe throws an error
    // console.log(guessMe); <- This gives an error
    let guessMe = 5;
    console.log("guessMe: " + guessMe); // C: guessMe is 5
}
// D: guessMe is undeclared