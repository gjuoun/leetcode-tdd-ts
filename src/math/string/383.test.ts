function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>();
  for (const char of ransomNote) {
    if (!map.has(char)) {
      map.set(char, 1);
    } else {
      map.set(char, map.get(char)! + 1);
    }
  }
  map;

  for (const char of magazine) {
    if (map.has(char)) {
      map.set(char, map.get(char)! - 1);
      if (map.get(char)! === 0) {
        map.delete(char);
      }
    }
  }

  return map.size === 0;
}

// canConstruct("a", "b"); //?
// canConstruct("aa", "aab"); //?

describe("876", () => {
  it("should pass", () => {
    const cases = [
      { input: ["a", "b"], output: false },
      { input: ["aa", "aab"], output: true },
    ];
    cases.forEach(({ input, output }) => {
      expect(canConstruct(input[0], input[1])).toBe(output);
    });
  });
});
