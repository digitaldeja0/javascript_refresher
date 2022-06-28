// Document Object Model

// Grab element by ID
// getElementById
const mainID = document.getElementById("view1");
console.log(mainID);

// Grab element by ID
//querySelector
const mainQuery = document.querySelector("#view1");
console.log(mainQuery);

// Change style to show or hide view
mainID.style.display = "none";
mainQuery.style.display = "flex";

// Grab by classname
const box1 = document.getElementsByClassName("box");
console.log(box1);
// This produces and html collection
// The itesm in html collection will have an id
// Has elements

// Get classes by queryselectorall
const box2 = document.querySelectorAll(".box");
console.log(box2);
// Has nodes (not elements)

// Utilize a previously captured selector to grab another selector
const divItems = mainQuery.querySelectorAll("div");
console.log(divItems);

const sameDiv = mainQuery.getElementsByTagName("div");
console.log(sameDiv);

// Get specific about selectors
const evenDivs = mainQuery.querySelectorAll("div:nth-of-type(2n)");
console.log(evenDivs);
for (let i = 0; i < evenDivs.length; i++) {
  evenDivs[i].style.backgroundColor = "teal";
  evenDivs[i].style.width = "100px";
  evenDivs[i].style.height = "100px";
}

// Adjust Text and styles example
const navText = document.querySelector(" nav h1");
console.log(navText);
navText.textContent = "Hello Lovely";

const nav = document.querySelector("nav");
nav.innerHTML = `<h1> Hello Dear</h1> <p> Think outside the box.</p>`;
nav.style.justifyContent = "space-between";

//Navigating the DOM tree
console.log(evenDivs[0]);
console.log(evenDivs[0].parentElement);
console.log(evenDivs[0].parentElement.children);
console.log(evenDivs[0].parentElement.childNodes);
console.log(evenDivs[0].parentElement.hasChildNodes());
console.log(evenDivs[0].parentElement.lastChild);
console.log(evenDivs[0].parentElement.lastElementChild);
console.log(evenDivs[0].parentElement.firstChild);
console.log(evenDivs[0].parentElement.firstElementChild);
console.log(evenDivs[0].nextSibling);
console.log(evenDivs[0].nextElementSibling);
console.log(evenDivs[0].previousSibling);
console.log(evenDivs[0].previousElementSibling);
console.log(
  evenDivs[0].nextElementSibling.nextElementSibling.nextElementSibling
);

// ADDIND AND REMOVING ELEMENTS

const card = document.querySelector(".card");
console.log(card);
mainQuery.style.display = " none";
card.style.display = "flex";
card.style.flexDirection = "row";
card.style.flexWrap = "wrap";
card.style.justifyContent = "center";
card.style.alignItems = "center";

while (card.lastChild) {
  card.lastChild.remove();
}

const createDiv = (parent, it) => {
  const newDiv = document.createElement("div");
  newDiv.textContent = it;
  newDiv.style.background = "teal";
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.margin = "12px";
  newDiv.style.display = "flex";
  newDiv.style.justifyContent = "center";
  newDiv.style.alignItems = "center";
  parent.append(newDiv);
};

for (let i = 1; i < 12; i++) {
  createDiv(card, i);
}
