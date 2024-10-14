// Hoisting :

// Predict output and explain.

function something() {
    // a = undefined
    console.log(a);
    var a = 2;
}

something()


// Understanding :
// => In this code, the variable "a" is declared within the "something" function
//    using the "var" keyword, which makes it function-scoped. In JavaScript,
//    variables declared within "var" are hoisted to the top of their scope
//    and are initialized with a value of "undefined" when they are declared.