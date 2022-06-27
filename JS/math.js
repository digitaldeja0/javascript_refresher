// Math.trunc() Method
"What does Math.trunc() accomplish?";
"It preserves the integars of a number and removes the floating point information. Removes decimals";
console.log(Math.trunc(Math.PI));

//Math.round() Method
("What does the Math.round() method accomplish? ");
("Math.round() rounds a number to the nearest whole integrar.");
console.log(Math.round(Math.PI));

// Math.ceil()
("What does the Math.round() method accomplish? ");
("Math.ceil() rounds up up to the nearest whole integrar.");
console.log(Math.ceil(Math.PI));

// Math.floor()
("What does the Math.round() method accomplish? ");
("Math.ceil() rounds up up to the nearest whole integrar.");
console.log(Math.floor(Math.PI));

// Math.pow()
(" What does the Math.pow() method accomplish, and how does it work? ");
("Math.pow() takes in two integars and is take the first param to the power of the second param.");
console.log(Math.pow(2, 3));

//Math.min() and Math.max()

("If you have a set a of number and want to find the highest value or the lowest value of the set, what method can you use?");
("Math.min() or Math.max()");
console.log(Math.min(2, 9, 10, 3));
console.log(Math.max(2, 9, 10, 3));

// Math.random
("What is Math.random() ");
("Math.random() returns a random number between 0 and 1 but not including 1.");
console.log(Math.random());

("How do you create coin flip effect with Math.random()?");
("let y = Math.random();if (y < 0.5) { y = 0;} else {y = 1;}console.log(y);");

("How do you get a random number between 0-10 including 10?");
console.log(Math.floor(Math.random() * 11));

("How do you get a random number between 1-10 including 10?");
console.log(Math.floor(Math.random() * 10) + 1);
