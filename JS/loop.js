// While loop
// Includes number 1-50 in clg
// Dont create an endless loop
let number = 1;
while (number <= 50) {
  console.log(number + "loop 1");
  number++;
}

let number2 = 0;
while (number2 < 50) {
  number2++;
  console.log(number2 + "loop 2");
}

// Do While Loop
// The do...while is used when you want to run a code block at least one time.
let text = "";
let i = 0;
do {
  text += i + "<br>";
  i++;
} while (i < 5);

// For Loop
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Break keyword
// You can use the break keyword when you specificy a condition to trigger the break, which is breaking/stopping the loop.
let number4 = 1;
while (number4 <= 50) {
  console.log(number4 + "loop 4");
  if (number4 == 10) break;
  number4++;
}
