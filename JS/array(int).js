/*
*
Arrays
*
*/

const arr = [];
arr[0] = "daisy";
arr[1] = 32;
arr[2] = true;

console.log(arr);

/*
.splice() Method
*/

// How to remove from the middle of an array and/or add items?
// use the .splice(method)
// declare where you want to delete, and how much you want to delete.
arr.splice(1, 1);
console.log(arr);

// If you dont want to delete any elements and instead want to add add a zero for the second param and any other elements you want to add afterwards
arr.splice(1, 0, "Cat", "Dog", "Bird");
console.log(arr);

/*
.slice() Method
*/

const abc = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
];

const newAbc = abc.slice(2, 5);
console.log(newAbc);

/*
.reverese() Method
*/
abc.reverse();
console.log(abc);
// This method does not create a new array

/*
.join() Method
*/

// This method take an array and make the values into a string that is seperated by commas
// const xyz = ["x", "y", "z"];
const xyz = [1, 2, 3];
newString = xyz.join();
console.log(newString);
const newArr = newString.split(",");
console.log(newArr);

/*
.concat Method
*/

const a1 = [1, 2, 3];
const a2 = [3, 4, 5];

const superArr = a1.concat(a2);
console.log(superArr);

// This is the old method, the new method is usind the spread operator

/*
Spread Operator ...
*/

// This operator joins 2 arrays into one
const superDuperArr1 = [...a1, ...a2];
console.log(superDuperArr1);
// This operaration makes 1 array with two nested arrays
const superDuperArr2 = [a1, a2];
console.log(superDuperArr2);

/*
Nested Array
*/

const cats = ["lion", "tiger", "cheetah"];
const dogs = ["poodle", "beagle", "chihuahua"];
const fish = ["goldfish", "koi fish", "angelfish"];
const birds = ["parrotlet", "budgie parakeet", "lovebird"];

// Access a 1D array
console.log(dogs[1]);
// or
console.log(birds[2]);

//Example of nested arrays
const cuddlePets = [cats, dogs];
const cutePets = [fish, birds];
console.log(cuddlePets);
console.log(cutePets);

// Access nested array / 2D arrays
console.log(cuddlePets[1][1]);
console.log(cutePets[1][2]);

// Access 3D arrays
const pets = [cuddlePets, cutePets];
console.log(pets[0][1][1]);
console.log(pets[1][1][2]);
