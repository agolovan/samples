import { cleanup } from "@testing-library/react";
import { setColumnsAndRows } from "../samples/arrays/setColumnsAndRows";

const inputMatrix: number[][] = [
  [5, 4, 3, 9, 5],
  [2, 0, 7, 6, 5],
  [1, 3, 4, 0, 5],
  [9, 8, 3, 4, 5],
];

const outputMatrix: number[][] = [
  [5, 0, 3, 0, 5],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [9, 0, 3, 0, 5],
];

describe("code sample tests", () => {
  afterEach(cleanup);

  it("should return correct array", () => {
    const matrix = setColumnsAndRows(inputMatrix);
    expect(matrix).toEqual(outputMatrix);
  });
});
