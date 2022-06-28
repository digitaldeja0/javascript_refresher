//Higher Order Functions
//take one or more function as an argument OR returns a function as the result

//FOR EACH FUNCTION

const test = [
  { user: 1, id: 1, note: "note, note, note" },
  { user: 2, id: 2, note: "note, note, note" },
  { user: 3, id: 3, note: "note, note, note" },
  { user: 4, id: 4, note: "note, note, note" },
  { user: 5, id: 5, note: "note, note, note" },
];

test.forEach((i) => {
  console.log(i);
});

console.clear();

//FILTER FUNCTION

const filterTest = test.filter((i) => {
  return i.id === 1 || i.id === 2;
});

console.log(filterTest);

//MAP FUNCTION

const mapTest = filterTest.map((i) => {
  return i.id * 100;
});

console.log(mapTest);

//REDUCE

const reduceTest = mapTest.reduce((acc, i) => {
  return acc + i;
});

console.log(reduceTest);
