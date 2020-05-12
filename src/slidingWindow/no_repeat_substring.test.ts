// no_repeat_substring

const no_repeat_substring = function (str: string): number {
  let windowStart = 0, windowEnd
  let max = 0
  let charIndex = new Map()
  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd]
    if (charIndex.has(rightChar)) {
      // windowStart = Math.max(windowStart, charIndex[rightChar] + 1)
      windowStart = charIndex.get(rightChar) + 1
    }

    charIndex.set(rightChar, windowEnd)
    max = Math.max(max, windowEnd + 1 - windowStart)

  }
  return max
};

// time complexity: O(n), space complexity: O(K)


describe("no_repeat_substring", () => {
  it("Input= 'aabccbb', output = 3", () => {
    const input = "aabccbb", output = 3
    expect(no_repeat_substring(input)).toBe(output)
  });

  it("input = 'abbbb', output = 2", () => {
    const input = "abbbb", output = 2
    expect(no_repeat_substring(input)).toBe(output)
  });

  it("input = 'abccde', output = 3", () => {
    const input = "abccde", output = 3
    expect(no_repeat_substring(input)).toBe(output)
  });

})


