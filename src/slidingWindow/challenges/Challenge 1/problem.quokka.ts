// export const permutation_in_a_string_qk = (input: string, pattern: string) => {
//   let windowStart = 0, matchedCount = 0
//   let freqMap: Record<string, number> = {}

//   for (let index = 0; index < pattern.length; index += 1) {
//     const char = pattern[index]
//     if (char in freqMap) {
//       freqMap[char] += 1
//     } else {
//       freqMap[char] = 1
//     }
//   }

//   freqMap //? 

//   for (let windowEnd = 0; windowEnd < input.length; windowEnd += 1) {
//     const rightChar = input[windowEnd]

//     // match condition
//     if (rightChar in freqMap) {
//       freqMap[rightChar] -= 1

//       if (freqMap[rightChar] === 0) {
//         matchedCount += 1
//       }

//       if (matchedCount === Object.keys(freqMap).length) {
//         return true
//       }
//     }

//     // otherwise shrink the window
//     if (windowEnd >= pattern.length - 1) {
//       const leftChar = input[windowStart]

//       if (leftChar in freqMap) {
//         if (freqMap[leftChar] === 0) {
//           matchedCount -= 1
//         }
//         freqMap[leftChar] += 1
//       }
//       windowStart += 1 
//     }
//   }

//   return false
// }

export const permutation_in_a_string_qk = (input: string, pattern: string) => {
  let windowStart = 0, matchedCount = 0
  const freqMap: Record<string, number> = {}

  for (let i = 0; i < pattern.length; i += 1) {
    const char = pattern[i]
    if (char in freqMap) {
      freqMap[char] += 1
    }
    else {
      freqMap[char] = 1
    }
  }
  freqMap
  
  for(let windowEnd = 0; windowEnd < input.length; windowEnd += 1){
    const rightChar = input[windowEnd] //?
    if(rightChar in freqMap){
      rightChar 
      freqMap[rightChar] -= 1
      if(freqMap[rightChar] === 0 ){
        matchedCount += 1
      }

      if(matchedCount === Object.keys(freqMap).length){
        // find all matched characters
        return true
      }
    }

    
    if(windowEnd/*?*/ >= pattern.length -1 /*?*/){ 
      const leftChar = input[windowStart] //?
      
      if(leftChar in freqMap){
        
        if(freqMap[leftChar] === 0 ){
          matchedCount -= 1
        }
        freqMap[leftChar] -= 1
      }
      windowStart += 1 //?
    }
  }

  return false

}

// console.log(permutation_in_a_string_qk('bcdxabcdy', 'bcdyabcdx')); // true
console.log(permutation_in_a_string_qk('oidbcaf', 'abc')); //true
// console.log(permutation_in_a_string_qk('odicf', 'dc')); //false
