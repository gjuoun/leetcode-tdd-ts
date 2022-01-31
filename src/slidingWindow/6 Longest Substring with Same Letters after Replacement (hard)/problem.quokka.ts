
// const length_of_longest_substring_same_qk = (input: string, k: number) => {
//   let windowStart = 0, windowEnd = 0;
//   let maxRepeatCount = 0, maxLength = 0;
//   let letterMap: Record<string, number> = {}

//   for (windowEnd = 0; windowEnd < input.length; windowEnd++) {
//     let rightChar = input[windowEnd] //?


//     if (!letterMap[rightChar]) {
//       letterMap[rightChar] = 1
//     }else{
//       // add one count to the frequency
//       letterMap[rightChar] = letterMap[rightChar] + 1
//     }

//     maxRepeatCount = Math.max(maxRepeatCount, letterMap[rightChar]) // ?

//     const currWindowSize = (windowEnd - windowStart) + 1 //?
//     const remainingLetters = currWindowSize - maxRepeatCount  /*? */


//     // too many remaining letters, should shrink the window
//     if (remainingLetters /*?*/ > k) { 
//       const leftChar = input[windowStart]
//       letterMap[leftChar] = letterMap[leftChar] - 1 // reduce the frequency of the leftChar
//       windowStart++
//     }else{
//       // remaining letters <= k, meaning we can replace the rest of the letters
//     }

//     const finalWindowSize = (windowEnd - windowStart) + 1  //?

//     maxLength = Math.max(maxLength, finalWindowSize) 
//   }

//   return maxLength //?
// }

export const length_of_longest_substring_same_qk = (input: string, k: number) => {
  let windowStart = 0, windowEnd = 0;
  let maxRepeatCount = 0, maxLength = 0;
  let letterMap: Record<string, number> = {}

  for (windowEnd = 0; windowEnd < input.length; windowEnd++) {
    const rightChar = input[windowEnd] //?

    if (!(rightChar in letterMap)) {
      letterMap[rightChar] = 1
    } else {
      letterMap[rightChar] += 1
    }

    maxRepeatCount = Math.max(maxRepeatCount, letterMap[rightChar]) //?

    const replaceableLetters = (windowEnd - windowStart) + 1 - maxRepeatCount //?


    // shrink the window if replaceableletters is too many
    if(replaceableLetters > k){
      const leftChar = input[windowStart]
      letterMap[leftChar] -= 1
      windowStart += 1
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1) //?

  }

  return maxLength //?
}


console.log(length_of_longest_substring_same_qk('aabccbb', 2)); // should be 5
