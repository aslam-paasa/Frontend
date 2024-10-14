// Const with Arrays:

// Will we get an error? What will it return?
const array = [1, 2, 3, 4]
array.push(55);

// understanding:
// => We will get an error, and it will "5", which is the new length of the
//    "array" after the "push" operation. The "const" declaration creates a
//    constant reference to the array [1, 2, 3, 4], but does not prevent us
//    from modifying the elements of that array.
