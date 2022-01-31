
export const longest_subarray_with_ones_after_replacement_qk = (input: number[], k: number) => {
  let windowStart = 0, maxLength = 0;
  let maxOnesCount = 0

  for (let windowEnd = 0; windowEnd < input.length; windowEnd += 1) {
    const rightChar = input[windowEnd] //?

    if (rightChar === 1) {
      maxOnesCount += 1
    }

    const replaceableZeros = (windowEnd - windowStart + 1) - maxOnesCount //?

    if (replaceableZeros > k) { // shrink the window
      // determined by the most left number
      const leftChar = input[windowStart]
      if (leftChar === 1) {
        maxOnesCount -= 1
      }
      windowStart += 1
    }

    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)

  }



  return maxLength //?

}



console.log(longest_subarray_with_ones_after_replacement([0, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1], 2));
