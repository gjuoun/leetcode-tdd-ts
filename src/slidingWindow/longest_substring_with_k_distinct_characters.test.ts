// longest_substring_with_k_distinct_characters


const longest_substring_with_k_distinct_characters = function (s: string, k: number): number {
  let sum = 0, min = Infinity, start = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
    while (sum >= s) {
      min = Math.min(min, i - start + 1)
      sum -= arr[start]
      start++
    }
  }
  return min
};

// time complexity: O(n), space complexity: O(1)


describe("longest_substring_with_k_distinct_characters", () => {
  it("Input= 'araaci',  K=2, output = 4", () => {
    const input = "araaci", K = 2
    const output = 4
    expect(longest_substring_with_k_distinct_characters(input, K)).toBe(output)
  });

  it("Input= 'araaci',  K=1, output = 2", () => {
    const input="araaci", K=1
    const output = 2
    expect(longest_substring_with_k_distinct_characters(input, K)).toBe(output)
  });

  it("Input= 'cbbebi',  K = 3, output = 5", () => {
    const input = "cbbebi", K = 3
    const output = 5
    expect(longest_substring_with_k_distinct_characters(input, K)).toBe(output)
  });

})


