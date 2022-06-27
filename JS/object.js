// Objects

const obj1 = {
  cat: "sammi",
  age: 17,
  likesTreats: true,
  toys: {
    red: "mouse",
    blue: "yarn",
    green: "laser light",
    pink: "blankie",
  },

  sayMeow: function () {
    return "meow meow";
  },
  letsPlay: function () {
    return `Grab your ${this.toys.red} toy!`;
  },
};

// Acess object key
// You can use dot notation or bracker notion.
// You have to use quotes when you use bracket notation
console.log(obj1.cat);
console.log(obj1["cat"]);
console.log(obj1["toys"].red);
console.log(obj1.toys["blue"]);
console.log(obj1["toys"]["green"]);
console.log(obj1.toys.pink);

// Utilize object functions/methods
console.log(obj1.sayMeow());
console.log(obj1.letsPlay());

// An example of inheritance
// All the the properties from obj1 are passed onto our new object, cat
const cat = Object.create(obj1);
console.log(cat.toys.blue);
// We are going to change the value of toys.blue
cat.toys.blue = "cat ball";
console.log(cat.toys.blue);
// obj1 changed becase cat changed and they are refrencing the same area
console.log(obj1.toys.blue);
// change the function
cat.letsPlay = function () {
  return `Grab your ${this.toys.green} toy!`;
};
console.log(cat.letsPlay());

// Access all of an objects key value pairs

const band = {
  rock: "paramore",
  rb: "destinys childs",
  motown: "supremes",
};

console.log(Object.keys(band));
console.log(Object.values(band));

// Loop through an object
//   You cant use dot notation
// You have to use bracket to iterate through each

// Get out the vakues
for (let name in band) {
  console.log(band[name]);
}

// Get out the keys
for (let name in band) {
  console.log(`the winner for the  ${name} catagory,  is  ${band[name]}`);
}

// To delete an exsisting proerty or method

delete band.rock;
console.log(band);

// Check if a key exists
// Will return a true or false
console.log(band.hasOwnProperty("rock"));

// Destructring objects
const { rb: myVar, motown: myVar2 } = band;
console.log(myVar);
console.log(myVar2);
// Another option to destructure

const { rb, motown } = band;
// We created new vars with the same name as they are refrenced in the object
console.log(rb, motown);

// Destructre through function
function sings({ rb }) {
  return `i love ${rb}`;
}

console.log(sings(band));
