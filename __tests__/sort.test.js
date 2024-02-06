const sortAsc = require("../src/sort").sortAsc;
const sortDesc = require("../src/sort").sortDesc;

describe("Sorting functions", () => {
  test("sortAsc should sort the array in ascending order", () => {
    const arr = [3, 7, 2, 1, 8, 4, 5, 6];
    const expectedResult = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(sortAsc(arr)).toEqual(expectedResult);
  });

  test("sortDesc should sort the array in descending order", () => {
    const arr = [3, 7, 2, 1, 8, 4, 5, 6];
    const expectedResult = [8, 7, 6, 5, 4, 3, 2, 1];
    expect(sortDesc(arr)).toEqual(expectedResult);
  });
});
