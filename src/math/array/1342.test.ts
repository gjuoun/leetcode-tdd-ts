function numberOfSteps(num: number): number {
  if (num === 0) return 0;

  // even
  if (num % 2 === 0) return numberOfSteps(num / 2) + 1;
  // odd
  else return numberOfSteps(num - 1) + 1;
}

numberOfSteps(14); //?

describe("numberOfSteps", () => {
  it("should pass", () => {
    const cases = [
      { input: 14, output: 6 },
      { input: 8, output: 4 },
      { input: 123, output: 12 },
    ];

    cases.forEach(({ input, output }) => {
      expect(numberOfSteps(input)).toEqual(output);
    });
  });
});
