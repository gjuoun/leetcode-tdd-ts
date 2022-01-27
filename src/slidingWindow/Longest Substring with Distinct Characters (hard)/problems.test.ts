

// const length_of_longest_substring = (input: string) => {
//   let startIndex = 0, maxLength = 0
//   let map = new Map<string, number>()

//   for (let endIndex = 0; endIndex < input.length; endIndex++) {
//     const rightChar = input[endIndex]

//     if (map.has(rightChar)) {
//       startIndex =  Math.max(startIndex ,map.get(rightChar)! + 1)
//     }


//     map.set(rightChar, endIndex)

//     const windowSize = (endIndex + 1) - startIndex
//     maxLength = Math.max(windowSize, maxLength)
//   }

//   return maxLength

// }


const length_of_longest_substring = (input: string) => {
  let windowStart = 0, maxLength = 0
  let map: Record<string, number> = {}

  for(let windowEnd = 0; windowEnd< input.length; windowEnd ++){
    let rightChar = input[windowEnd]
    
    // a: 0 may exist
    if(map[rightChar] >= 0){
      windowStart = Math.max(windowStart, map[rightChar] + 1)
    }

    map[rightChar] = windowEnd

    const windowSize = (windowEnd - windowStart) + 1

    maxLength = Math.max(maxLength, windowSize)

  }

  return maxLength

}



// time complexity: O(n), space complexity: O(1)

describe("no_repeat_substring", () => {
  it("Input= 'aabccbb', output = 3", () => {
    const input = "aabccbb", output = 3
    expect(length_of_longest_substring(input)).toBe(output)
  });

  it("input = 'abbbb', output = 2", () => {
    const input = "abbbb", output = 2
    expect(length_of_longest_substring(input)).toBe(output)
  });

  it("input = 'abccde', output = 3", () => {
    const input = "abccde", output = 3
    expect(length_of_longest_substring(input)).toBe(output)
  });

  it("input = 'abcbacb', output = 3", () => {
    const input = "abcbacb", output = 3
    // when it reaches the second 'a', startIndex is ahead of rightChar, at 'b'
    expect(length_of_longest_substring(input)).toBe(output)
  });

})





