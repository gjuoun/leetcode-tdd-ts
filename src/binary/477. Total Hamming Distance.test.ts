import { totalHammingDistance } from "./477. Total Hamming Distance";

describe("461. Hamming Distance", () => {
  it("Input: [4,14,2] Output: 6", () => {
    let x = [4,14,2]
    expect(totalHammingDistance(x)).toEqual(6)
  });

  it("Input: [9,10,11,12] Output: 11", () => {
    let x = [9,10,11,12]
    expect(totalHammingDistance(x)).toEqual(11)
  });

});
