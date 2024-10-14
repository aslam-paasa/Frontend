// TDZ : Temporal Dead Zone
// => The TDZ is an important concept in JavaScript because it helps prevent
//    accidental access to uninitialized variables, which can lead to unexpected
//    behavior in your code.


// What will be the output of this? And why?
function something() {
    console.log(a);
    let a = 12;
}


// Understanding :
// => This code will result in ReferenceError.
// => The reason for this is that in JavaScript, variables declared using the
//    "let" keyword are subject to the "Temporal Dead Zone" (TDZ).
// => In this code, the variable "a" is declared within the "something" function
//    using the "let" keyword, and it is hoisted to the top of the function
//    scope. However, when "console.log(a)" is executed, the variable "a" has
//    not been initialized, so it has the value of "undefined".