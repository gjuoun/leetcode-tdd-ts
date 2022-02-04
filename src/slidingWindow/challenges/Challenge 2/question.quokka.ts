// export const string_anagrams = (input: string, pattern: string) => {
//   let windowStart = 0, maxLength = 0;
//   let freqMap: Record<string, number> = {}
//   let matchedCount = 0;

//   for (let index = 0; index < pattern.length; index += 1) {
//     const char = pattern[index]
//     if (char in freqMap) {
//       freqMap[char] += 1
//     } else {
//       freqMap[char] = 1
//     }
//   }

//   freqMap
//   const resultIndexes: number[] = []

//   for (let windowEnd = 0; windowEnd < input.length; windowEnd += 1) {
//     const rightChar = input[windowEnd]

//     if (rightChar in freqMap) {

//       freqMap[rightChar] -= 1

//       if (freqMap[rightChar] === 0) {
//         matchedCount += 1
//       }

//       if (matchedCount === Object.keys(freqMap).length) {
//         resultIndexes.push(windowStart)
//         resultIndexes
//       }
//     }

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

//   return resultIndexes

// }

export const string_anagrams = (input: string, pattern: string) => {
  let windowStart = 0, matchedCount = 0;
  let freqMap: Record<string, number> = {}

  for (let index = 0; index < pattern.length; index += 1) {
    const char = pattern[index]
    if (char in freqMap) {
      freqMap[char] += 1
    } else {
      freqMap[char] = 1
    }
  }

  const resultArr: number[] = []
  for (let windowEnd = 0; windowEnd < input.length; windowEnd += 1) {
    const rightChar = input[windowEnd]

    if (rightChar in freqMap) {

      freqMap[rightChar] -= 1

      if (freqMap[rightChar] === 0) {
        matchedCount += 1
      }

      if (matchedCount === Object.keys(freqMap).length) {
        resultArr.push(windowStart)
        windowStart
      }
    }


    if (windowEnd >= pattern.length - 1) {
      const leftChar = input[windowStart]

      if (rightChar in freqMap) {

        if (freqMap[leftChar] === 0) {
          matchedCount -= 1
        }

        freqMap[leftChar] += 1

        windowStart += 1
      }
    }
  }

  return resultArr //?
}



console.log(string_anagrams('ppqp', 'pq')); //? should be [1,2]
// console.log(string_anagrams('abbcabc', 'abc')); //? shoule be [2,3,4]
