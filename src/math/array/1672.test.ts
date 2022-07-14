function maximumWealth(accounts: number[][]): number {
  let richest = 0;

  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    richest = Math.max(richest, sum);
  }

  return richest;
}

// maximumWealth([[1,2,3],[3,2,1]]) //?
// maximumWealth([[2,8,7],[7,1,3],[1,9,5]]) //?

describe("1672", () => {
  it("should pass", () => {
    const cases = [
      {
        input: [
          [1, 2, 3],
          [3, 2, 1],
        ],
        output: 6,
      },
      {
        input: [
          [2, 8, 7],
          [7, 1, 3],
          [1, 9, 5],
        ],
        output: 17,
      },
    ];

    cases.forEach(({ input, output }) => {
      expect(maximumWealth(input)).toEqual(output);
    });
  });
});
