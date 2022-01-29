import { longest_substring_with_k_distinct_quokka, longest_substring_with_k_distinct_quokka1 } from "./problem.quokka";


describe("longest_substring_with_k_distinct_characters", () => {
  it("Input= 'araaci',  K=2, output = 4", () => {
    const input = "araaci", K = 2
    const output = 4
    expect(longest_substring_with_k_distinct_quokka1(input, K)).toBe(output)
    expect(longest_substring_with_k_distinct_quokka(input, K)).toBe(output)
  });

  it("Input= 'araaci',  K=1, output = 2", () => {
    const input = "araaci", K = 1
    const output = 2
    expect(longest_substring_with_k_distinct_quokka1(input, K)).toBe(output)
    expect(longest_substring_with_k_distinct_quokka(input, K)).toBe(output)

  });

  it("Input= 'cbbebi',  K = 3, output = 5", () => {
    const input = "cbbebi", K = 3
    const output = 5
    expect(longest_substring_with_k_distinct_quokka1(input, K)).toBe(output)
    expect(longest_substring_with_k_distinct_quokka(input, K)).toBe(output)
  });

})


