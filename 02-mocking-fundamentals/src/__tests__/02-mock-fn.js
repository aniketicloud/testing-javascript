const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("returns winner", () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);
  const nike = "Nike";
  const percy = "Percy";

  const winner = thumbWar(nike, percy);
  expect(winner).toBe(nike);
  expect(utils.getWinner.mock.calls).toEqual([
    ["Nike", "Percy"],
    ["Nike", "Percy"],
  ]);
  utils.getWinner = originalGetWinner;
});
