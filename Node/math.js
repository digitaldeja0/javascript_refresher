//Practice Brining in a File
const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mutliply = (a, b) => a * b;
const divide = (a, b) => a / b;
module.exports = {
  add,
  sub,
  mutliply,
  divide,
};

//or

exports.add = (a, b) => a + b;
exports.sub = (a, b) => a - b;
exports.mutliply = (a, b) => a * b;
exports.divide = (a, b) => a / b;
