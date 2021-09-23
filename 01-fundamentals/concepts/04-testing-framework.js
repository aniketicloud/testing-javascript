const { sum, substract, greaterThan } = require('../math');

let expected, actual;

actual = sum(7, 3)
expected = 10
expect(actual).toBe(expected);

actual = substract(7, 3);
expected = 4;
expect(actual).toBe(expected);

const expect = (actual) => {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toBeGreaterThan(expected) { },
    toBeLessThan(expected) { }
  };
}