/**
 * After using the assertions provided by Jest, let's implement them ourselves.
 *
 * Task: Write a function `fn` that creates a mock function has `mock.calls`.
 *
 * Execute: Use `npx jest --watch src/no-framework/mock-fn.js` to watch the test
 */

const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const originalGetWinner = utils.getWinner;

// mocking to get first argument as winner awwlways
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar("Nike", "Percy");
assert.strictEqual(winner, "Nike");

// cleanup
utils.getWinner = originalGetWinner;
