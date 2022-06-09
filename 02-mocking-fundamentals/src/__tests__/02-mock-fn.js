const thumbWar = require("../thumb-war");
const utils = require("../utils");

test("returns winner", () => {
  const originalGetWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);
  const nike = "Nike";
  const percy = "Percy";

  const winner = thumbWar(nike, percy);
  expect(winner).toBe(nike);
  console.log(utils.getWinner.mock);
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenCalledWith(nike, percy);
  expect(utils.getWinner).toHaveBeenNthCalledWith(1, nike, percy);
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, nike, percy);
  utils.getWinner = originalGetWinner;
});
