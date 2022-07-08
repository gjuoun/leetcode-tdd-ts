function isValid(s: string): boolean {
  const stack: string[] = [];

  const map: Record<string, string> = {
    ")": "(",
    "]": "[",
    "}": "{",
  };
  for (let i = 0; i < s.length; i++) {
    const curr = s[i];

    if (curr in map) {
      // matching closing bracket
      const stackTopEl = stack[stack.length - 1];
      const openingBracket = map[curr];
      if (stackTopEl === openingBracket) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(curr);
    }
  }
  return stack.length === 0;
}

describe("20. Valid Parentheses", () => {
  it("()", () => {
    expect(isValid("()")).toBe(true);
  });

  it("()[]{}", () => {
    expect(isValid("()")).toBe(true);
  });

  it("(]", () => {
    expect(isValid("(]")).toBe(false);
  });

  it("[{}]", () => {
    expect(isValid("[{}]")).toBe(true);
  });
});
