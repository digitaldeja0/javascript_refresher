// Scope: let, const, var

// About the var keyword
var x = 1;
var x = 2;
console.log(x);

// The problem with var is that it doesnt get an error when you repat variables
// If you did the same thing with declaring a let variable, you would get an error.
let y = 1;
// let y = 2;
console.log(y);

// Both var and let allow for reassignment.
// You can reassign a let variable, but not redeclare.
x = 3;
y = 2;
console.log(x);
console.log(y);

// With const, you cannot reassign.
const z = 5;
// z = 10;
console.log(z);

/*-------------------------------------------------------*/

// Global Scope
// When you assign global variables, they are all available in the global scope.
let a = "cat";
const b = "dog";
var c = "fish";

console.log(a, b, c);

// Local Scope
// There are two kinds of local scope: block and function
// You can redeclare variables in block and function without getting an error

// Block Example
{
  let a = "turle";
  const b = "bunnny";
  console.log(a, b);
}

// Function Example
function myZoo() {
  let a = "Sugar Glider";
  const b = "Hamster";
  console.log(a, b);
}
myZoo();

// Variables defined in local scope cannot be used in the block scope
// Values in local scope do not moves upwards, they do not go to the parent
// Examples of block scope are if, switch, and loops
// Using variables in scope wont conflict with parent

// Another Examples

var h = 1;
let i = 2;
const j = 3;

console.log(`Global h: ${h}`);
console.log(`Global i: ${i}`);
console.log(`Global j: ${j}`);

function testing() {
  var h = 10;
  const j = 30;
  console.log(`Function1 h: ${h}`);
  console.log(`Function1 i: ${i}`);
  console.log(`Function1 j: ${j}`);
  {
    var h = 11; //function scoped
    const j = 50;
    console.log(`Block h: ${h}`);
    console.log(`Block i: ${i}`);
    console.log(`Block j: ${j}`);
  }
  console.log(`Function2 h: ${h}`);
  console.log(`Function2 i: ${i}`);
  console.log(`Function2 j: ${j}`);
}

testing();
