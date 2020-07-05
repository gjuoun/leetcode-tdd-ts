
// const smallest_subarray_with_a_given_sum = function (s: number, arr: number[]): number {
//   let sum = 0, min = Infinity, start = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
//     while (sum >= s) {
//       min = Math.min(min, i - start + 1)
//       sum -= arr[start]
//       start++
//     }
//   }
//   return min
// };

const smallest_subarray_with_a_given_sum = function (s: number, arr: number[]): number {
  let sum = 0, min = Infinity, start = 0

  for(let end = 0; end< arr.length; end++){
    sum+= arr[end]
    while(sum >= s){
      let windowLength = (end - start) + 1
      min = Math.min(min, windowLength)
      sum -= arr[start]
      start +=1
    }
  }

  return min
};

// time complexity: O(n), space complexity: O(1)


describe("smallest_subarray_with_a_given_sum", () => {
  it("Input s=7, arr = [2, 1, 5, 2, 3, 2], output = 2", () => {
    const s = 7
    const arr = [2, 1, 5, 2, 3, 2]
    const output = 2
    expect(smallest_subarray_with_a_given_sum(s, arr)).toBe(output)
  });

  it("Input k = 7  arr = [2, 1, 5, 2, 8] output = 1", () => {
    const k = 7
    const arr = [2, 1, 5, 2, 8]
    const output = 1
    expect(smallest_subarray_with_a_given_sum(k, arr)).toBe(output)
  });

  it("Input k = 8 arr = [3, 4, 1, 1, 6]  output = 3", () => {
    const k = 8
    const arr = [3, 4, 1, 1, 6]
    const output = 3
    expect(smallest_subarray_with_a_given_sum(k, arr)).toBe(output)
  });
})


