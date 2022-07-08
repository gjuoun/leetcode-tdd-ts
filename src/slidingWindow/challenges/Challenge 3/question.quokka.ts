// const smallest_window_containing_subinputing = (input: string, pattern: string) => {
//   let windowStart = 0,
//     matched = 0,
//     subinputStart = 0,
//     minLength = input.length + 1, //?
//     charFrequency: Record<string, number> = {};

//   for (let i = 0; i < pattern.length; i++) {
//     const chr = pattern[i];
//     if (!(chr in charFrequency)) {
//       charFrequency[chr] = 0;
//     }
//     charFrequency[chr] += 1;
//   }

//   charFrequency

//   // try to extend the range [windowStart, windowEnd]
//   for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
//     const rightChar = input[windowEnd]; //?
//     if (rightChar in charFrequency) {
//       rightChar
//       charFrequency[rightChar] -= 1; //?

//       // freq might be negative
//       if (charFrequency[rightChar]/* ?*/ >= 0) { // Count every matching of a character
//         matched += 1;
//       }
//     }

//     // Shrink the window if we can, finish as soon as we remove a matched character
//     while (matched === pattern.length) {
//       matched
//       rightChar

//       minLength
//       const windowLength = windowEnd - windowStart + 1  //?

//       if (minLength > windowLength) { // keep tracking the minLength -> used for calculate the substring length
//         minLength
//         windowLength

//         minLength = windowLength; // minLength is equal to the window length
//         subinputStart = windowStart; //?
//       }

//       windowStart

//       const leftChar = input[windowStart]; //?
//       windowStart += 1; //?
//       if (leftChar in charFrequency) {
//         leftChar
//         charFrequency[leftChar] //?
//         // Note that we could have redundant matching characters, therefore we'll decrement the
//         // matched count only when a useful occurrence of a matched character is going out of the window
//         if (charFrequency[leftChar] === 0) {
//           matched -= 1;
//         }
//         charFrequency[leftChar] += 1;
//       }
//     }
//   }

//   if (minLength > input.length) {
//     // doesn't find
//     return '';
//   } else {
//     subinputStart
//     minLength
//     return input.substring(subinputStart, subinputStart + minLength);
//   }
// }

export const smallest_window_containing_subinputing = (
  input: string,
  pattern: string
) => {
  let windowStart = 0,
    matchedCount = 0;
  let minLength = input.length + 1,
    substringStart = 0;
  let freqMap: Record<string, number> = {};

  for (let i = 0; i < pattern.length; i++) {
    const char = pattern[i];
    if (char in freqMap) {
      freqMap[char] += 1;
    } else {
      freqMap[char] = 1;
    }
  }

  for (let windowEnd = 0; windowEnd < input.length; windowEnd += 1) {
    const rightChar = input[windowEnd]; //?

    if (rightChar in freqMap) {
      rightChar;
      freqMap[rightChar] -= 1; //?
      // is larger and equal is because we want to only count the number to match pattern length
      if (freqMap[rightChar] >= 0) {
        freqMap[rightChar /*?*/]; /*?*/
        matchedCount += 1; //?
      }
      freqMap;
    }

    matchedCount;

    while (matchedCount === pattern.length) {
      // compare windowSize with minLength
      const windowSize = windowEnd - windowStart + 1; //?
      if (minLength > windowSize) {
        // memorize the minLength and substringStart
        minLength = windowSize; //?
        substringStart = windowStart; //?
      }

      const leftChar = input[windowStart]; //?
      windowStart += 1;

      // move the window as needed
      if (leftChar in freqMap) {
        freqMap[leftChar /*?*/]; /*?*/

        if (freqMap[leftChar] === 0) {
          matchedCount -= 1; //?
        }

        freqMap[leftChar] += 1; //?
      }
    }
  }

  if (minLength > input.length) {
    return "";
  } else {
    substringStart;
    minLength;
    return input.slice(substringStart, substringStart + minLength); //?
  }
};
