const find_permutation = function (str: string, pattern: string) {
  let windowStart = 0, matched = 0
  const freqMap: Record<string, number> = {}

  for (let i = 0; i < pattern.length; i++) {
    let char = pattern[i]
    if (!freqMap[char]) {
      freqMap[char] = 0
    }
    freqMap[char] += 1
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]
    if (rightChar in freqMap) {
      freqMap[rightChar] -= 1

      if (freqMap[rightChar] === 0) {
        matched += 1
      }
    }

    if (matched === Object.keys(freqMap).length) {
      return true
    }

    // start moving the window, 
    // should shrink the sliding window
    if (windowEnd >= pattern.length - 1) {
      const leftChar = str[windowStart]
      windowStart += 1
      // freqMap[leftChar] = 0 return falsy
      if (leftChar in freqMap) {

        if (freqMap[leftChar] === 0) {
          matched -= 1
        }

        // add the frequency back
        freqMap[leftChar] += 1
      }
    }
  }

  return false;
};



describe("Permutation in a String (hard)#", () => {

  it(`Input: String="oidbcaf", Pattern="abc"`, () => {
    const input = 'oidbcaf', pattern = "abc", output = true
    expect(find_permutation(input, pattern)).toBe(output)
  })

  it(`Input: String="odicf", Pattern="dc"`, () => {
    const input = 'odicf', pattern = "dc", output = false
    expect(find_permutation(input, pattern)).toBe(output)
  })

  it(`Input: String="bcdxabcdy", Pattern="bcdyabcdx"`, () => {
    const input = 'bcdxabcdy', pattern = "bcdyabcdx", output = true
    expect(find_permutation(input, pattern)).toBe(output)
  })

  it(`Input: String="aaacb", Pattern="abc"`, () => {
    const input = 'aaacb', pattern = "abc", output = true
    expect(find_permutation(input, pattern)).toBe(output)
  })
})