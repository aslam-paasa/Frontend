// Default Parameters :

// What will be the output? And why?

const defaultExample = (a, b) => a + b;
console.log(defaultExample(2));

// Understanding :
// => Output: NaN
// => The reason is that in the code, the "defaultExample" function is defined
//    with two parameters, "a" and "b". However, when we call the function
//    with "console.log(defaultExample(2))", we are only prividing a single
//    argument "2", so "b" is undefined.
// => When you try to add an undefined value to a number, JavaScript returns
//    NaN (Nota Number).
// => So, how can you make sure if the value of "b" is not provided by the user,
//    "b" will have a default value?

const defaultExample1 = (a,b) => {
    if(b === undefined) {
        b = 5;
    }
    return a + b;
};

// Instead
const defaultExample2 = (a, b = 5) => a + b;

console.log(defaultExample1(2,4));
console.log(defaultExample2(3));


// Understanding :
// The second function is more concise and easier to read, as it sets the
// default value directly in the function definition rather than checking 
// for it in the function body.
