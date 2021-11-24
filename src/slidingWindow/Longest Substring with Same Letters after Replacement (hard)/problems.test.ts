
const length_of_longest_substring_same = (input: string, k: number) => {
  let windowStart = 0, windowEnd = 0;
  let maxRepeat = 0, max = 0;
  let letterMap: Record<string, number> = {}

  for (windowEnd = 0; windowEnd < input.length; windowEnd++) {
    let rightChar = input[windowEnd]
    if (!letterMap[rightChar]) {
      letterMap[rightChar] = 0
    }

    // add one count to the frequency
    letterMap[rightChar] = letterMap[rightChar] + 1
    maxRepeat = Math.max(maxRepeat, letterMap[rightChar])

    const currWindowSize = (windowEnd - windowStart) + 1
    const remainingLetters = currWindowSize - maxRepeat
    if (remainingLetters > k) {
      const leftChar = input[windowStart]
      letterMap[leftChar] = letterMap[leftChar] - 1
      windowStart++
    }

    const finalWindowSize = (windowEnd - windowStart) + 1
    max = Math.max(max, finalWindowSize)
  }

  return max
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