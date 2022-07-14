function runningSum(nums: number[]): number[] {
  const sums: number[] = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      sums.push(nums[i]);
    } else {
      // 1, 2, 3  => 1, 3, 6
      const total = sums[i - 1] + nums[i];
      sums.push(total);
    }
  }

  return sums;
}

runningSum([1, 2, 3]); //?

describe("1480", () => {
  it("should pass", () => {
    const cases = [
      { input: [1, 2, 3], output: [1, 3, 6] },
      { input: [1, 1, 1, 1, 1], output: [1, 2, 3, 4, 5] },
      { input: [3, 1, 2, 10, 1], output: [3, 4, 6, 16, 17] },
    ];

    cases.forEach(({ input, output }) => {
      expect(runningSum(input)).toEqual(output);
    });
  });
});
