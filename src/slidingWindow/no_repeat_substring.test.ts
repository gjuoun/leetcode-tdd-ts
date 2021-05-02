// no_repeat_substring

const no_repeat_substring2 = function (str: string): number {
  let windowStart = 0, windowEnd
  let max = 0

  let map = new Map();


  for(windowEnd = 0; windowEnd < str.length; windowEnd++){
    let rightChar = str[windowEnd]
    if(!map.has(rightChar)){
      map.set(rightChar, windowEnd)
    }
    else{
      windowStart = windowEnd 

    }
    
    let windowLength = (windowEnd + 1) - windowStart
    max = Math.max(windowLength, max)
  }


  return max

};

// time complexity: O(n), space complexity: O(K)


describe("no_repeat_substring", () => {
  it("Input= 'aabccbb', output = 3", () => {
    const input = "aabccbb", output = 3
    expect(no_repeat_substring2(input)).toBe(output)
  });

  it("input = 'abbbb', output = 2", () => {
    const input = "abbbb", output = 2
    expect(no_repeat_substring2(input)).toBe(output)
  });

  it("input = 'abccde', output = 3", () => {
    const input = "abccde", output = 3
    expect(no_repeat_substring2(input)).toBe(output)
  });

})


