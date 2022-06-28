// Error Handling
"use strict";
//the line above is a more strict version

// Error 1
// variable = "dave";
// console.log(variable);
// This line of code creates a reference error

// Object..create();
// This error is a syntax
// This error will stop the code from executing

// const greet = "hi";
// greet = "hola";
// This error is a typeerror

// Create a error in consike
const makeError = () => {
  try {
    const name = "daisy";
    name = "rose";
  } catch (err) {
    console.log(err);

    // How to catch send a error to the console
    console.error(err);

    // Create warning
    console.warn(err);

    // Create table
    console.table(err);

    //send error
    console.error(err.stack);

    //save error to look back at
    logTheError(err.stack);
  }
};

// makeError();

const seeCustomError = () => {
  try {
    throw new customError("this is a custom error ");
  } catch (err) {
    console.log(err);
    console.error(err.message);
    console.error(err.name);
    console.error(err.stack);
  } finally {
    //   You can add a fianlly block
    // They execute no matter what, error or no error
    console.log("...finally");
    // You can increment in here if you had a loop for example
  }
};

seeCustomError();

// Creating a custom error
function customError(message) {
  this.message = message;
  this.name = "customError";
  this.stack = `${this.name}:${this.message}`;
}
