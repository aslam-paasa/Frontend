// Why do we need arrow functions?
// => Shorter Syntax : Arrow functions allow you to write anonymous functions
//    in a more concise way, especially when the function body is small
//    and simple.


// Challenge :
// How would you write this with the least amout of characters?
function Add22andReturn(num) {
    let sum = 0;
    sum = sum + 22;
    return sum;
}
Add22andReturn(22);


// Multiple Iterations :

// Version 1
const Add22andReturn1 = (num) => {
    let sum = 0;
    sum = num + 22;
    return sum;
}

// Version 2
const Add22andReturn2 = (num) => {
    let sum = 0;
    sum = num + 22;
    return sum;
}

// Version 3
const Add22andReturn3 = (num) => {
    return num + 22;
}

//Version 4
const Add22andReturn4 = num => num + 22;