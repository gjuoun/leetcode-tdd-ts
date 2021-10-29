// length_of_longest_substring


const length_of_longest_substring_same = function (str: string, k: number): number {
  let windowStart = 0, windowEnd, windowSize
  let freqMap = new Map<string, number>()
  let maxRepeat = 0, max = 0

  for (windowEnd = 0; windowEnd < str.length; windowEnd++) {
    let rightChar = str[windowEnd]
    if (!freqMap.has(rightChar)) {
      freqMap.set(rightChar, 0)
    }
    // char frequency + 1
    freqMap.set(rightChar, freqMap.get(rightChar)! + 1)
    maxRepeat = Math.max(maxRepeat, freqMap.get(rightChar)!)
    windowSize = getWindowSize(windowStart, windowEnd)

    // window size > failure tolerant + repeated chars
    if (windowSize - maxRepeat > k ) {
      let leftChar = str[windowStart]
      freqMap.set(leftChar, freqMap.get(leftChar)! - 1);
      windowStart++
    }

    let newWindowSize = getWindowSize(windowStart, windowEnd)
    // exact window size = failure tolerant + repeated chars
    max = Math.max(max, newWindowSize)
  }

  return max
};

function getWindowSize(windowStart: number, windowEnd: number) {
  return windowEnd + 1 - windowStart
}


describe("length_of_longest_substring_same", () => {
  it("input = 'aabccbb', k = 2, output = 5;", () => {
    const input = "aabccbb", k = 2, output = 5;
    expect(length_of_longest_substring_same(input, k)).toBe(output)
  });

  it("input = 'abbcb', k = 1, output = 4;", () => {
    const input = "abbcb", k = 1, output = 4;
    expect(length_of_longest_substring_same(input, k)).toBe(output)
  });

  it("input = 'abccde', k = 1, output = 3;", () => {
    const input = "abccde", k = 1, output = 3;
    expect(length_of_longest_substring_same(input, k)).toBe(output)
  });
})