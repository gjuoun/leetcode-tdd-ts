// longest_substring_with_k_distinct_characters


// const longest_substring_with_k_distinct_characters = function (str: string, k: number): number {
//   let map = new Map()
//   let max = 0
//   let windowStart = 0

//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     let rightChar = str[windowEnd]
//     if (!map.has(rightChar)) {
//       map.set(rightChar, 0)
//     } else {
//       map.set(rightChar, map.get(rightChar + 1))
//     }

//     while (map.size > k) {
//       let leftChar = str[windowStart]
//       map.delete(leftChar)
//       windowStart++
//     }

//     max = Math.max(max, 1+ windowEnd - windowStart )
//   }

//   return max
// };

// time complexity: O(n), space complexity: O(1)

const longest_substring_with_k_distinct_characters = function (str: string, k: number): number {
  let map = new Map()
  let max = 0, windowStart = 0, windowEnd = 0

  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd]
    if (!map.has(rightChar)) {
      map.set(rightChar, 1)
    } else {
      map.set(rightChar, map.get(rightChar) + 1)
    }

    while (map.size > k) {
      let leftChar = str[windowStart]
      windowStart += 1
      map.delete(leftChar)
    }

    let windowLength = (windowEnd - windowStart) + 1
    max = Math.max(max, windowLength)
  }

  return max
};


describe("longest_substring_with_k_distinct_characters", () => {
  it("Input= 'araaci',  K=2, output = 4", () => {
    const input = "araaci", K = 2
    const output = 4
    expect(longest_substring_with_k_distinct_characters(input, K)).toBe(output)
  });

  it("Input= 'araaci',  K=1, output = 2", () => {
    const input = "araaci", K = 1
    const output = 2
    expect(longest_substring_with_k_distinct_characters(input, K)).toBe(output)
  });

  it("Input= 'cbbebi',  K = 3, output = 5", () => {
    const input = "cbbebi", K = 3
    const output = 5
    expect(longest_substring_with_k_distinct_characters(input, K)).toBe(output)
  });

})


