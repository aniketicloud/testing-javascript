const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const originalGetWinner = utils.getWinner;

// mocking to get first argument as winner always
utils.getWinner = (p1, p2) => p1;

const winner = thumbWar("Nike", "Percy");
assert.strictEqual(winner, "Nike");

// cleanup
utils.getWinner = originalGetWinner;
