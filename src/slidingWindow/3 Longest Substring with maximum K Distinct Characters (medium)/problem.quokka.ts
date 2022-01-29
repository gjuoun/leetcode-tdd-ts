export const longest_substring_with_k_distinct_quokka1 = (str: string, k: number) => {
  let windowStart = 0, maxLength = 0;
  let map = new Map<string, number>()

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd]

    if (map.has(rightChar)) {
      map.set(rightChar, map.get(rightChar)! + 1)
    } else {
      map.set(rightChar, 1)
    }


    while (map.size > k) {
      const leftChar = str[windowStart] //?
      if (map.get(leftChar) === 1) {
        map.delete(leftChar)
      } else {
        map.set(leftChar, map.get(leftChar)! - 1)
      }
      windowStart += 1
      map.delete(leftChar)
    }

    const windowSize = (windowEnd - windowStart) + 1  //?
    maxLength = Math.max(windowSize, maxLength) //?
  }

  return maxLength //? 
}

export const longest_substring_with_k_distinct_quokka = (input: string, k: number) => {
  let windowStart = 0, maxLength = 0;
  let map: Record<string, number> = {}

  for(let windowEnd = 0; windowEnd < input.length; windowEnd +=1){
    const rightChar = input[windowEnd]

    if(map[rightChar] >= 0) { // exists
      map[rightChar] += 1 // remember the end index
    }else{
      map[rightChar] = 1
    }

    while(Object.keys(map).length > k){
      // shrink the map
      const leftChar = input[windowStart]
      if(map[leftChar] > 1){
        map[leftChar] -= 1
      }else{
        delete map[leftChar]
      }
      windowStart += 1
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }

  return maxLength //?
}


console.log(longest_substring_with_k_distinct_quokka('araaci', 2)); // should be 4



