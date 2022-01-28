const maximum_sum_subarray_of_size_k_quokka = (input: number[], k: number): number => {
  let sum = 0, windowStart = 0
  let maximum = 0

  for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
    sum += input[windowEnd] //?

    if (windowEnd > (k - 1)) {
      // subtract the left most item
      sum -= input[windowStart]
      windowStart += 1 //?
    }

    maximum = Math.max(maximum, sum) //?
  }

  return maximum
}


console.log(maximum_sum_subarray_of_size_k_quokka([2, 1, 5, 1, 3, 2], 3)) // should be 9