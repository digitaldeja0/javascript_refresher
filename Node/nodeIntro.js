//NODE VS  VANILLA JS
"What are the difference between node and vanilla js";
"1) Node runs on a sever not a browser.";
"2) The console is the terminal.";
"3) Node has a global object instead of a window object";
"4) There are common core modules, we use common JS instead of ES6 (require)";
"5) Missing some JS APIs, like Fetch";
//ACTIVATE AND EXIT NODE
"how to activate node?";
"type node";

"how to exit node?";
"control c";

//HELLO WORLD
console.log("Hello World");
//run file in terminal with line below
("node <file name>");

//VIEW GLOBAL OBJECT in TERMINAL
// console.log(global);//

//REQUIRE IN NODE (EXAMPLE) (IMPORT)
const os = require("os");
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

//COMMANDS AVAILABLE
console.log(__dirname);
console.log(__filename);

const path = require("path");
console.log(path.dirname(__filename)); //same as line 30 command
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename)); //returns an object of information
console.log(path);

//BRING IN PACKAGES

//BRING IN PACKAGES: OPITION 1
const math = require("./math");
console.log(math.add(4, 3));
console.log(math.sub(7, 8));

// or;

//BRING IN PACKAGES: OPITION 2
const { add, sub, mutliply, divide } = require("./math");
console.log(add(4, 3));
console.log(sub(7, 8));

//LEARN MORE
("https://www.tutorialsteacher.com/nodejs/nodejs-modules");
