import { longest_subarray_with_ones_after_replacement_qk } from "./problem.quokka";

describe("length_of_longest_substring_after_replacement", () => {
  it("Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2 ", () => {
    const input = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1],
      k = 2,
      output = 6;
    expect(longest_subarray_with_ones_after_replacement_qk(input, k)).toBe(
      output
    );
  });

  it("Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3", () => {
    const input = [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1],
      k = 3,
      output = 9;
    expect(longest_subarray_with_ones_after_replacement_qk(input, k)).toBe(
      output
    );
  });
});
