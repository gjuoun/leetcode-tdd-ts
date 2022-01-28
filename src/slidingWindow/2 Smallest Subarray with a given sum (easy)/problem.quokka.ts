const smallest_subarray_with_a_greater_sum_quokka = (input: number[], s: number): number => {
  let minLength = Infinity, windowStart = 0
  let windowSum = 0


  for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
    windowSum += input[windowEnd] //?

    while (windowSum >= s /*?*/) {
      // shrink the window
      minLength = Math.min(minLength, (windowEnd - windowStart) + 1) //?
      windowSum -= input[windowStart] //?
      windowStart += 1

    }
  }

  return minLength
}


console.log(smallest_subarray_with_a_greater_sum([2, 1, 5, 2, 3, 2], 7)); // shoule be 2

