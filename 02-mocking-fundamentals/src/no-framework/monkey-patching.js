const assert = require("assert");
const thumbWar = require("../thumb-war");
const utils = require("../utils");

const winner = thumbWar("Nike", "Percy");
assert.strictEqual(winner, "Nike");

// cleanup