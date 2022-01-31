// const permutation_in_a_string_qk = function (str: string, pattern: string) {
//   let windowStart = 0, matchedCount = 0
//   const freqMap: Record<string, number> = {}

import { permutation_in_a_string_qk } from "./problem.quokka"

//   for (let i = 0; i < pattern.length; i++) {
//     let char = pattern[i]
//     if (!freqMap[char]) {
//       freqMap[char] = 0
//     }
//     freqMap[char] += 1
//   }

//   for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
//     const rightChar = str[windowEnd]
//     if (rightChar in freqMap) {
//       freqMap[rightChar] -= 1

//       if (freqMap[rightChar] === 0) {
//         matchedCount += 1 
//       }
//     }

//     if (matchedCount === Object.keys(freqMap).length) {
//       return true
//     }

//     // start moving the window, when the windowEnd is more than the pattern length
//     // should shrink the sliding window
//     if (windowEnd >= pattern.length - 1) {
//       const leftChar = str[windowStart]
//       windowStart += 1

//       if (leftChar in freqMap) {

//         if (freqMap[leftChar] === 0) {
//           matchedCount -= 1 // reduce the match count
//         }

//         // add the frequency back
//         freqMap[leftChar] += 1
//       }
//     }
//   }

//   return false;
// };



describe("Permutation in a String (hard)#", () => {

  it(`Input: String="oidbcaf", Pattern="abc"`, () => {
    const input = 'oidbcaf', pattern = "abc", output = true
    expect(permutation_in_a_string_qk(input, pattern)).toBe(output)
  })

  it(`Input: String="odicf", Pattern="dc"`, () => {
    const input = 'odicf', pattern = "dc", output = false
    expect(permutation_in_a_string_qk(input, pattern)).toBe(output)
  })

  it(`Input: String="bcdxabcdy", Pattern="bcdyabcdx"`, () => {
    const input = 'bcdxabcdy', pattern = "bcdyabcdx", output = true
    expect(permutation_in_a_string_qk(input, pattern)).toBe(output)
  })

  it(`Input: String="aaacb", Pattern="abc"`, () => {
    const input = 'aaacb', pattern = "abc", output = true
    expect(permutation_in_a_string_qk(input, pattern)).toBe(output)
  })
})

