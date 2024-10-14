// Understanding :
// => "destructExample" takes an object as its argument and uses destructuring
//    assignment to extract "a" and "b" properties from the object.
// => This means that the function expects an object with "a" and "b" properties
//    will extract those properties.

// Code Example :
const destructExample = ({ a, b }) => {
    console.log(a, b);
}

const obj = { a: 1, b: 2, }
console.log(destructExample(obj));