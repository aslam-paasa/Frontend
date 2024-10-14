// What will be the output? Will we get an error?

const defaultExample3 = (a, b=5, c) => a + b + c;

console.log(defaultExample3(1,2,3));
// console.log(defaultExample3(1, , 3)); // Syntax Error

// Understanding :
// => console.log(defaultExample3(1, 2, 3)); will produce the expected output
//    of 6. 
// => The second call to "defaultExample3" will return in a syntax error, because
//    a comma without a value between "1" and "3" is not a valid syntax Javascript.
// => default parameter only starts working from the right side.
// => To avoid the syntax error, you should either provide a value of "b" or
//    remove the comma and pass the arguments as separate values :

console.log(defaultExample3(1, undefined, 3));