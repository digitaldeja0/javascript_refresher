// Event Listeners

// Setup

// Add event listeners
/*
const doSomething = () => {
  alert("doing something");
};
*/

/*
h3.addEventListener("click", doSomething, false);
h3.removeEventListener("click", doSomething, false);
*/
// Note, if the function above was annymous, we would not be able to remove it.

// Annymous function event listener
/*
h3.addEventListener("click", (e) => {
  console.log("This is super annymous...shh");
  console.log(e.target);
  e.target.textContent = "Clicked";
});
*/

document.addEventListener("readystatechange", (e) => {
  if (e.target.readyState === "complete") {
    console.log("ready state complete");
    init();
  }
});

const init = () => {
  const mainQuery = document.querySelector("#view1");
  mainQuery.style.display = "none";
  const card = document.querySelector(".card");
  console.log(card);

  const div = card.querySelector("div");
  const h3 = div.querySelector(" h3");
  console.log(div);
  div.style.width = "500px";
  card.addEventListener("click", (e) => {
    card.classList.toggle("pink");
    // card.classList.add("pink");
    // card.style.backgroundColor = "DarkSlateGray";
    // e.target.style.backgroundColor = "DarkSlateGray";
  });
  div.addEventListener("click", (e) => {
    // e.stopPropagation();
    div.style.backgroundColor = "black";
    // e.target.style.backgroundColor = "black";
  });
  h3.addEventListener("click", (e) => {
    const myText = e.target.textContent;
    myText === "Hello View 2"
      ? (e.target.textContent = "Clicked")
      : (e.target.textContent = "Hello View 2");
  });
};

// With event listeners you can use true and false values as well as event propagation
// You can also you mousover and mouseout to create a toggle like effect
