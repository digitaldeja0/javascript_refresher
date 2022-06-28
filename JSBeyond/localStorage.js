// Web storage
// Web storage api is not the DOM, it is the window api

const arr1 = ["dance", "sing", "act"];
const obj1 = {
  name: "daisy",
  talents: ["dance", "sing", "act"],
  logName: function () {
    console.log(this.name);
  },
};

// Session storage is the session
// Local storage is saved even when the window closes
//through the transfer methods get lost

sessionStorage.setItem("mySessionStore", JSON.stringify(arr1));
const mySessionData = JSON.parse(sessionStorage.getItem("mySessionStore"));
console.log(mySessionData);

localStorage.setItem("mylocalStore", JSON.stringify(arr1));

// localStorage.removeItem("mylocalStore");
// localStorage.clear();
// sessionStorage.clear();
const mylocalData = JSON.parse(localStorage.getItem("mylocalStore"));
console.log(mylocalData);

// const storeKey = localStorage.key(1);
// console.log(storeKey);

// Get the length of local storage
// const size = localStorage.length;
// console.log(size);
