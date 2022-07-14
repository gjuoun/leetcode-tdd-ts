function fizzBuzz(n: number): string[] {
  const result: string[] = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) result.push("FizzBuzz");
    else if (i % 3 === 0) result.push("Fizz");
    else if (i % 5 === 0) result.push("Buzz");
    else result.push(`${i}`);
  }

  return result;
}

// fizzBuzz(3); //?
// fizzBuzz(5); //?
// fizzBuzz(15); //?

describe("fizzBuzz", () => {
  it("should pass", () => {
    const cases = [
      { input: 3, output: ["1", "2", "Fizz"] },
      { input: 5, output: ["1", "2", "Fizz", "4", "Buzz"] },
      {
        input: 15,
        output: [
          "1",
          "2",
          "Fizz",
          "4",
          "Buzz",
          "Fizz",
          "7",
          "8",
          "Fizz",
          "Buzz",
          "11",
          "Fizz",
          "13",
          "14",
          "FizzBuzz",
        ],
      },
    ];

    cases.forEach(({ input, output }) => {
      expect(fizzBuzz(input)).toEqual(output);
    });
  });
});
