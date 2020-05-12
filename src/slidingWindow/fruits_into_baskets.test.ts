// fruits_into_baskets


const fruits_into_baskets = function (fruit: string[]): number {
  let windowStart = 0, windowEnd
  let max = 0, map = new Map()

  for (windowEnd = 0; windowEnd < fruit.length; windowEnd++) {
    let right = fruit[windowEnd]
    if (map.has(right)) {
      map.set(right, map.get(right) + 1)
    } else {
      map.set(right, 0)
    }

    while (map.size > 2) {
      let left = fruit[windowStart]
      map.delete(left)
      windowStart++
    }
    max = Math.max(max, windowEnd + 1 - windowStart)
  }
  return max
};

// time complexity: O(n), space complexity: O(1)


describe("fruits_into_baskets", () => {
  it("Input arr =['A', 'B', 'C', 'A', 'C'] , output = 3", () => {
    const arr = ['A', 'B', 'C', 'A', 'C'], output = 3
    expect(fruits_into_baskets(arr)).toBe(output)
  });

  it("Input arr =['A', 'B', 'C', 'B', 'B', 'C'] , output = 5", () => {
    const arr = ['A', 'B', 'C', 'B', 'B', 'C'], output = 5
    expect(fruits_into_baskets(arr)).toBe(output)
  });

})


