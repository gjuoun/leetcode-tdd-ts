

// export const longest_substring_with_distinct_characters_quokka = (input: string) => {
//   let windowStart = 0, maxLength = 0;
//   let map = new Map<string, number>()

//   for(let windowEnd = 0; windowEnd < input.length; windowEnd += 1 ){
//     const rightChar = input[windowEnd]

//     if(map.has(rightChar)){
//       windowStart = Math.max(windowStart, map.get(rightChar)! + 1)
//     }

//     map.set(rightChar, windowEnd)

//     maxLength = Math.max(maxLength, windowEnd - windowStart + 1) //?
//   }

//   return maxLength

// }


export const longest_substring_with_distinct_characters_quokka = (input: string) => {
  let windowStart = 0, maxLength = 0;
  let map: Record<string , number> = {}

  for(let windowEnd = 0; windowEnd < input.length; windowEnd += 1){
    const rightChar = input[windowEnd] 

    if(rightChar in map){
      windowStart = Math.max(windowStart, map[rightChar] + 1)
    }

    map[rightChar] = windowEnd

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }

  return maxLength
 }


console.log(longest_substring_with_distinct_characters_quokka('aabccbb')); //should be 3
