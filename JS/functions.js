// Function Declaration
// Syntax = function, name, parenthese (aka:operators), curly braces
// Functions Provide Resuable Code

function sum(a, b) {
  console.log(a);
  console.log(b);
  let result;
  b === undefined ? (result = a + a) : (result = a + b);
  return result;
}
console.log(sum(10));

// Anonymous function
// Use const where possible for functions

const getEmail = function (e) {
  return e.slice(0, e.indexOf("@"));
};
console.log(getEmail("brenda@heydeja.com"));

const toProperCase = function (e) {
  return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
};
console.log(toProperCase("deJA"));

// Arrow function
const getEmailAgain = (e) => {
  return e.slice(0, e.indexOf("@"));
};

console.log(getEmailAgain("brenda@heydeja.com"));
