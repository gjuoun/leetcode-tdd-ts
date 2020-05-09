import assert from "assert";
import { hammingDistance } from "./461. Hamming Distance";

describe("461. Hamming Distance", () => {
  it("Input: x=1, y=4, Output: 2", () => {
    let x = 1, y = 4;
    const expected = 2;
    const rev = hammingDistance(x, y);
    assert.equal(rev, expected);
  });
  it("Input: x=8, y=8, Output: 0", () => {
    let x = 8, y = 8;
    const expected = 0;
    const rev = hammingDistance(x, y);
    assert.equal(rev, expected);
  });
});
