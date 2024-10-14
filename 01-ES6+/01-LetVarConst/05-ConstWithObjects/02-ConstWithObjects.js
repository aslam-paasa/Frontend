// Will we get an error?
const obj = { a: 1, b: 2 }
const obj2 = { a: 3, b: 4 }
obj === obj2

// Understanding :
// => We will get an error. The "const" declaration creates a constant reference
//    to the object { a: 1, b: 2 }, and attempting to reassign that reference 
//    to a different object { a: 3, b: 4 } will result in a TypeError.

// Are they equal?
const obj3 = { a: 1, b: 2 }
const obj4 = { a: 1, b: 2 }
console.log(obj3 === obj4); // false
// Error: values are same but they are in two different memory locations.

const obj5 = obj3;
console.log(obj5 === obj3); // true
// obj5 & obj3 are pointing to same memory location.

// In our notebook, we are creating an index and saying :
// => Introduction is on Page No 2
// => Author's photo is on Page No 2
// Both are different references but pointing to the same physical location.