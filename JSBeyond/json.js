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
};

console.log(obj1);
console.log(obj1.cat);
console.log(obj1.sayMeow());
console.log(typeof obj1);

//Convert object to string and send off to server format
// JSON doesnt send functions, discards function
const sendJSON = JSON.stringify(obj1);
console.log(sendJSON);

console.log(typeof sendJSON);
console.log(sendJSON.cat);

// Recieving json
const recJSON = JSON.parse(sendJSON);
console.log(recJSON);
// this object doesnt have the method still
console.log(typeof recJSON);
