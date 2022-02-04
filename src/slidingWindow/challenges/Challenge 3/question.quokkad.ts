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


export const smallest_window_containing_subinputing = (input: string, pattern: string) => {
  let windowStart = 0,
    matched = 0,
    subinputStart = 0, // start point of substring
    minLength = input.length + 1, // substring length
    charMap: Record<string, number> = {};

  for (let index = 0; index < pattern.length; index += 1) {
    const char = pattern[index]
    if (char in charMap) {
      charMap[char] += 1
    } else {
      charMap[char] = 1
    }
  }

  charMap

  for (let windowEnd = 0; windowEnd < input.length; windowEnd += 1) {
    const rightChar = input[windowEnd] //?

    if (rightChar in charMap) {
      rightChar
      charMap[rightChar] -= 1 //?
      if (charMap[rightChar] >= 0) {
        matched += 1
      }
    }

    while (matched === pattern.length) {
      // shrink the window
      
      const windowLength = windowEnd - windowStart + 1 //?
      if(minLength > windowLength){
        minLength = windowLength
        subinputStart = windowStart
      }

      const leftChar = input[windowStart]
      windowStart += 1

      if(leftChar in charMap){

        if(charMap[leftChar] === 0){
          matched -= 1
        }

        charMap[leftChar] += 1
      }
    }
  }

  if(minLength > input.length){
    return ''
  }else{
    return input.slice(subinputStart, subinputStart + minLength)
  }
}



// console.log(smallest_window_containing_subinputing('aabdec', 'abc')); // 'abdec' 
console.log(smallest_window_containing_subinputing('abdbca', 'abc')); // 'bca' 
// console.log(smallest_window_containing_subinputing('adcad', 'abc')); // '' 
