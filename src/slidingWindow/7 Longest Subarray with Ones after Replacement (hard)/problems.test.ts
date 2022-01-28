//! this works too
// const length_of_longest_substring_after_replacement = (input: number[], k: number) => {
//   let windowStart = 0, windowEnd = 0;
//   let maxRepeat = 0, max = 0;
//   let letterMap: Record<string, number> = {}

//   for (windowEnd = 0; windowEnd < input.length; windowEnd++) {
//     let rightChar = input[windowEnd]
//     if (!letterMap[rightChar]) {
//       letterMap[rightChar] = 0
//     }

//     // add one count to the frequency
//     letterMap[rightChar] = letterMap[rightChar] + 1
//     maxRepeat = Math.max(maxRepeat, letterMap[rightChar])

//     const currWindowSize = (windowEnd - windowStart) + 1
//     const remainingLetters = currWindowSize - maxRepeat
//     if (remainingLetters > k) {
//       const leftChar = input[windowStart]
//       letterMap[leftChar] = letterMap[leftChar] - 1
//       windowStart++
//     }

//     const finalWindowSize = (windowEnd - windowStart) + 1
//     max = Math.max(max, finalWindowSize)
//   }

//   return max
// }

const length_of_longest_substring_after_replacement = (arr: number[], k: number) => {
  let windowStart = 0, windowEnd = 0;
  let maxOnesCount = 0, maxLength = 0;

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if(arr[windowEnd] === 1){
      maxOnesCount = maxOnesCount + 1
    }

    const windowSize = windowEnd - windowStart + 1
    const remainingNumbers = windowSize - maxOnesCount
    if(remainingNumbers > k){
      // remove the left most letter
      if(arr[windowStart] === 1){
        // if the left most letter is 1, reduce the ones count 
        maxOnesCount = maxOnesCount -1
      }
      windowStart = windowStart + 1
    }

    const finalWindowSize = windowEnd - windowStart + 1
    maxLength = Math.max(maxLength, finalWindowSize)
  }

  return maxLength
}

describe("length_of_longest_substring_after_replacement", () => {
  it("Input: Array=[0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k=2 ", () => {
    const input = [0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], k = 2, output = 6;
    expect(length_of_longest_substring_after_replacement(input, k)).toBe(output)
  });

  it("Array=[0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k=3", () => {
    const input = [0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 1], k = 3, output = 9;
    expect(length_of_longest_substring_after_replacement(input, k)).toBe(output)
  });

})
