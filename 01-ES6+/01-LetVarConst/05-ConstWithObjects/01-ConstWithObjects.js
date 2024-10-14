// Const with Objects :

// Will we get an error?
const obj = { a: 1, b: 2 }
obj.a = 22;
console.log(obj);


// Understanding :
// => We will not get an error. The "const" declaration creates a constant reference
//    to the object { a: 1, b: 2 }, but it does not prevent us from modifying
//    the properties of that object.

// Q) Const is contant then why it is not giving an error?
const obj1 = { a: 1, b: 2 };
console.log(obj1.a);
obj1.a = 33;
console.log(obj1.a);
// => It is not giving an error because we are not changing whole object.
//    We are only changing one value (one property of key-value pair) of the 
//    object.


// Q) Will this give an error?
// obj1 = "tanay"; // TypeError: Assignment to constant variable.
// console.log(obj1);

const obj = "tanay";
console.log(obj); // No!, we are redeclaring the object

// obj = {a: 1, b: 2}; 
// console.log(obj); // Error: Even if the values are same, but this is new object


obj = {c: 22, d: 44}
console.log(obj); // Error: Because we are creating new object