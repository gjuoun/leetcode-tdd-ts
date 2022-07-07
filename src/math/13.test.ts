function romanToInt(s: string): number {
  const romanMap: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const currentValue = romanMap[s[i]];

    const nextValue = romanMap[s[i + 1]];
    if (nextValue && currentValue < nextValue) {
      sum += nextValue - currentValue;
      i++;
    } else {
      sum += currentValue;
    }
  }

  return sum; //?
}

describe("Leetcode 13", () => {
  it("should convert roman numberals to integres", () => {
    const cases = [
      { input: "III", output: 3 },
      { input: "LVIII", output: 58 },
      { input: "XC", output: 90 },
      { input: "MCMXCIV", output: 1994 },
    ];
    cases.forEach((c) => {
      expect(romanToInt(c.input)).toBe(c.output);
    });
  });
});
