function minRemoveToMakeValid(s: string): string {
  const bracketStack = [];
  const indexToRemove = [];
  let newString = "";

  for (let i = 0; i < s.length; i++) {
    const currentChar = s[i];
    if (currentChar === "(") {
      bracketStack.push(i);
    } else if (currentChar === ")") {
      if (bracketStack.length === 0) {
        indexToRemove.push(i);
      } else {
        bracketStack.pop();
      }
    }
  }

  // remove all the indexes that are in the bracketStack array
  while (bracketStack.length > 0) {
    indexToRemove.push(bracketStack.pop());
  }

  for (let i = 0; i < s.length; i++) {
    if (indexToRemove.includes(i)) {
      continue;
    } else {
      newString += s[i];
    }
  }

  return newString;
}

minRemoveToMakeValid("))(("); //?

describe("Leetcode 1249", () => {
  it("should remove invalid parenthesis", () => {
    const cases = [
      { input: "a)b(c)d", output: "ab(c)d" },
      { input: "))((", output: "" },
      { input: "lee(t(c)o)de)", output: "lee(t(c)o)de" },
    ];
    cases.forEach((c) => {
      expect(minRemoveToMakeValid(c.input)).toBe(c.output);
    });
  });
});
