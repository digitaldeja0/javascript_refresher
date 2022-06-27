let myString = "kitty";
let myStringSentenc =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo est, iure laboriosam harum consectetur quaerat?;";

("How do you find out what data type a piece of data is under classification?");
("you can use the 'typeof' ");
// Example of using type of: typeof "cat"
// Example Result: "String"
("typeof 'cat'");
("'String'");

// .length Property
console.log(myString.length);
// returns the number of chars in a string.
("How do you find the number if characters in a string?");
("use the .length property.");
("console.log(myString.length)");
("return 5");

("What does the .length propety return?");
("the numbers of chars in a string");
("console.log(myString.length);");
("5");

// .charAt Property
console.log(myString.charAt(0));
// Returns the value of a the char at the position specified.
("If you want to get the value of numeric index within a string, what method can you use?");
("usr the .charAt() method");
// console.log(myString.charAt(0));
// k

// .indexOf and lastIndexOf Property
console.log(myString.indexOf("t"));
// Can be used on a single char or multiple.
// Will return the first occurance
// If query is not found, will return '-1'
// Is case sensitive
console.log(myString.lastIndexOf("t"));
// last index of returns the last instance of the query

("What is the .indexOf property?");
(".indexOf will return the first index occurance of a specific query, its like the opposite of .charAt.");

("Should you use  single char or muliple chars when using .indexOf()");
("You can use both single chars and multiple chars.");

("What is returned when you use .indexOf() and the value isnt found?");
("-1 is returned");

("Is .indexOf() case sentitive?");
("Yes.");

("What is the reverese of .indexOf()?");
(".lastIndexOf() returns the last occurance of a specified query,");

// .slice Property
console.log(myString.slice(3, 4));
// accepts stating and ending positions params, and returns the start to the end, not including the end
// If the ending position is not provided,it returns the start position to the end of the string.
// If the ending position is less than or equal to the starting position, nothing will be returned.
// If the ending position is one number higher than the start position, only the start position will be returned??

("What is .slice()");
(".slice() returns a section of a sting. The params for this method are the start, and end, not including the end value.");

("What happens when using .slice() and you dont provide an ending position?");
("The starting value until the end of the string will be returned.");

// .toUpperCase and .toLowerCase Method
console.log(myString.toUpperCase());
console.log(myString.toLowerCase());
// Remeber to always add '()' at the end of the method, even if no params are given.

("How does one transform all the characters of  string into all uppercase or lowercase appearance?");
("Use 'ß.toUpperCase' or '.toLowerCase'");

// .includes Method
console.log(myString.includes("y"));
// Returns booleans
("What does '.includes()' return?");
("A boolean.");

// .split Method
console.log(myString.split("t"));
// Split the string wherever that character occurs.
// returns resulring mutiple string in array.
// single params, will ommit the query/instance of the param from the returned array.
// a pair of quotes will return all the chars into a their own index on an array.

("What is the '.split method', and what does it return?");
("'.split()' will split a string into an array based on a query inwhich to split up the string, returns the splitting as an array.");

("When using '.split()' what happens if you use one character vs. a pair of emplty quotes?");
("Empty quotes will return an array of each individual string char in a array, when using a single character to split, the character will be ommited from the retruned array. ");
