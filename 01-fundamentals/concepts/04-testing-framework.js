const { sum, subtract, greaterThan } = require("../math");

function sumTest() {
  const actual = sum(3, 7);
  const expected = 10;
  expect(actual).toBe(expected);
}
test("sum adds numbers", sumTest);

function subtractTest() {
  const actual = subtract(3, 7);
  const expected = -4;
  expect(actual).toBe(expected);
}
test("subtract subtracts numbers", subtractTest);

function test(title, callback) {
  try {
    callback();
    console.log(`✅ ${title}`);
  } catch (error) {
    console.error(`❌ ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toBeGreaterThan(expected) {},
    toBeLessThan(expected) {},
  };
}
