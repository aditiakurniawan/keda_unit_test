const fishBash = require("../src/fishBash");

describe("fishBash", () => {
  test("returns correct output for 15", () => {
    const expectedOutput = [
      1,
      2,
      "fish",
      4,
      "bash",
      "fish",
      7,
      8,
      "fish",
      "bash",
      11,
      "fish",
      13,
      14,
      "fish bash",
    ];
    expect(fishBash(15)).toEqual(expectedOutput);
  });
});
