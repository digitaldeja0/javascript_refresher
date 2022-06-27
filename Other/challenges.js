// Write code that will return a random number from my name.

const name = "deja";
let randomNum = Math.floor(Math.random() * name.length);
console.log(name.charAt(randomNum));
