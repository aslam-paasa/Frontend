// Short Arrow function while returning an object/object literal syntax :

// Challenge :
// Can you convert the below arrow function into function declaration(normal
// function) format?

const giveMeAndObject = a => ({ value: a })
console.log(giveMeAndObject(5));


// understanding :
// => In JavaScript, if you want to return an object literal from a function
//    you need to wrap the object literal in parentheses () to indicate that
//    it is a single expression. If you don't do this, JavaScript will interpret
//    the curly breaces {} as the start of a block rather than an object literal.

const giveMeAndObject2 = a => { value: a }
console.log(giveMeAndObject2(5));

// So, writing the code in the following format would result in a syntax error:
