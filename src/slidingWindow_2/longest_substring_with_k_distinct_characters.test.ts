// longest_substring_with_k_distinct_characters


const longest_substring_with_k_distinct_characters_2 = function (str: string, k: number): number {
  let map = new Map()

  let windowStart = 0, windowEnd = 0, substringLength = - Infinity
  for (windowEnd; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd]
    if (!map.has(rightChar)) {
      map.set(rightChar, 1)
    } else {
      map.set(rightChar, map.get(rightChar) + 1)
    }
    
    while (map.size > k) {
      let leftChar = str[windowStart]
      map.set(leftChar, map.get(leftChar) - 1)
      if (map.get(leftChar) === 0) {
        map.delete(leftChar)
      }
      windowStart++
    }

    let length = windowEnd + 1 - windowStart
    substringLength = Math.max(substringLength, length)
  }

  return substringLength
};

// time complexity: O(n), space complexity: O(1)


describe("longest_substring_with_k_distinct_characters", () => {
  it("Input= 'araaci',  K=2, output = 4", () => {
    const input = "araaci", K = 2
    const output = 4
    expect(longest_substring_with_k_distinct_characters_2(input, K)).toBe(output)
  });

  it("Input= 'araaci',  K=1, output = 2", () => {
    const input = "araaci", K = 1
    const output = 2
    expect(longest_substring_with_k_distinct_characters_2(input, K)).toBe(output)
  });

  it("Input= 'cbbebi',  K = 3, output = 5", () => {
    const input = "cbbebi", K = 3
    const output = 5
    expect(longest_substring_with_k_distinct_characters_2(input, K)).toBe(output)
  });

  it("Input= 'cbbebiffg',  K = 3, output = 5", () => {
    const input = "cbbebiffg", K = 3
    const output = 5
    expect(longest_substring_with_k_distinct_characters_2(input, K)).toBe(output)
  });
})


