// Number Data Types
const num = "13";
const float = 13.5;
const string = "13";
("What are the two number data types we use in javascript?");
("Intergars(whole numbers) and Floats(decimal numbers.)");

// Number Function
("How do you convert a string data type to a number data type?");
("Use the Number() function");
console.log(typeof string);
console.log(typeof Number(string));

("What happens when you add a string with a number value to a number data type?");
("The number will be concateneated as a string.");
("let num1 = 1; let string1 = '1'; console.log(num1 + string1);");
("11");
// let num1 = 1;
// let string1 = "1";
// console.log(num1 + string1);

("What is returned if you try to use the Number() function on data type that cant be converted to a number? What data types are these?");
("Undefeined and a non numberical string will return Nan.");

("What happens when you pass a boolen into the Number() function?");
("You are returned '1' for true and '0' for false.");

// Truthy and Falsy Numbers JS
("What is the numerical value of false in javascript?");
("Zero (0) is equal to false in javascript.");

// Number.isInteger() method
("How do you determine if a value is a number data type?");
("Use the Number.isInteger() method.");
console.log(Number.isInteger(string));

("What does the Number.isInteger() return?");
("A true or false boolean.");

//  Number.parseFloat() method
console.log(Number.parseFloat(num));
// The method

("What is returned when Number.parseFloat() can't parse a data type?");
("Nan is returned.");

("Will the  Number.parseFloat() function remove non numerical information from an input?");
("Yes.");

// .toFixed()
("What does the method .toFixed() accomplish?");
("o.toFixed() limits a float to a a specified decimal place. This method returns a string and rounds ups.");

// Number.parseint
("What is the .parseInt functions?");
("It turns a data type into an integar and will remove an non numeric chars where possible.");

// .toString
("What does toString accomplish?");
("It turns data into a string type.");

// Note: Remeber Nan / isNan method for future research.
