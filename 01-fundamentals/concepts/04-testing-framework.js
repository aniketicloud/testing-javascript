const { sum, subtract, greaterThan } = require("../math");

test("sum adds numbers", () => {
  const actual = sum(3, 7);
  const expected = 10;
  expect(actual).toBe(expected);
});

test("subtract subtracts numbers", () => {
  const actual = subtract(3, 7);
  const expected = -4;
  expect(actual).toBe(expected);
});

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
