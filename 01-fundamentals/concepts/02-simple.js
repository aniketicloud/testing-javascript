const { sum, substract } = require('../math');

let expected, actual;

actual = sum(7, 3)
expected = 10
if (actual !== expected) {
  throw new Error(`${actual} is not equal to ${expected}`);
}

actual = substract(7, 3);
expected = 4;
if (actual !== expected) {
  throw new Error(`${actual} is not equal to ${expected}`)
}