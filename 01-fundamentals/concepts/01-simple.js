const { sum, substract } = require('../math');

let expected, result;

result = sum(7, 3)
expected = 10
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = substract(7, 3);
expected = 4;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}