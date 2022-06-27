/*
*
Arrays
*
*/
const myArr = [];
// You cant reassign the above arrray, but you can reassign the values of an array becuase tehy are mutable.

/*
*
Add Element to an Array
*
*/
myArr[0] = "daisy";
myArr[1] = 32;
myArr[2] = true;

/*
*
Refrence an array
*
*/
console.log(myArr);

/*
*
Check length of array
*
*/
console.log(myArr.length);

/*
*
Last element of an array
*
*/
console.log(myArr[myArr.length - 1]);

/*
*
reference a specific index of an array
*
*/
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);

/*
*
Add to end of array
*
*/
myArr.push("Birds");
console.log(myArr);

/*
*
Remove from array
*
*/
myArr.pop();
console.log(myArr);
// Remove the last array item and contain it in a varible
// The pop method allows you to return the item that was popped
const lastItem = myArr.pop();
console.log(lastItem);

/*
*
Add to front of array
*
*/
myArr.unshift("fun");
console.log(myArr);
// Assigning unshift to a variable will return the new array length
const newLength = myArr.unshift("fun");
console.log(newLength);
// You can ge this same return when you assign push to a variable

/*
*
remove from front of array
*
*/
myArr.shift("fun");
console.log(myArr);
// When you assign shift to a variable, you get the first item of the array.
const firstItem = myArr.shift(25);
console.log(firstItem);

console.log(myArr);

// What happens when you log a index that doesnt exsist?
// You get undefined logged
