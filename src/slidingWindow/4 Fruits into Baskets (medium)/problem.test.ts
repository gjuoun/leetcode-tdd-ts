
// time complexity: O(n), space complexity: O(1)

import { fruits_into_baskets_quokka } from "./problem.quokka";

describe("fruits_into_baskets", () => {
  it("Input arr =['A', 'B', 'C', 'A', 'C'] , output = 3", () => {
    const arr = ['A', 'B', 'C', 'A', 'C'], output = 3
    expect(fruits_into_baskets_quokka(arr)).toBe(output)
  });

  it("Input arr =['A', 'B', 'C', 'B', 'B', 'C'] , output = 5", () => {
    const arr = ['A', 'B', 'C', 'B', 'B', 'C'], output = 5
    expect(fruits_into_baskets_quokka(arr)).toBe(output)
  });

})


