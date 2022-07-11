function checkValidString(s: string): boolean {
  let low = 0,
    high = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") {
      low++;
    } else {
      low--;
    }

    if (char !== ")") {
      high++;
    } else {
      high--;
    }

    // *)) so that high < 0
    if (high < 0) {
      return false;
    }

    // in case (**, so that low < 0
    low = Math.max(low, 0);
  }

  return low === 0; //?
}

function checkValidStringV2(s: string): boolean {
  const stack: number[] = [];
  const starStack: number[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char === "(") {
      stack.push(i);
    } else if (char === "*") {
      starStack.push(i);
    } else {
      // char === ")"
      if (stack.length === 0) {
        if (starStack.length === 0) {
          return false;
        } else {
          starStack.pop();
        }
      } else {
        stack.pop();
      }
    }
  }

  while (stack.length > 0) {
    if (starStack.length === 0) {
      return false;
    }

    if (starStack[starStack.length - 1] > stack[stack.length - 1]) {
      starStack.pop();
      stack.pop();
      continue;
    } else {
      return false;
    }
  }
  // clear starStack and stack array
  return true;
}

// checkValidString("(*)"); //?
// checkValidString("*))"); //?
// checkValidString("(*))"); //?

describe("678", () => {
  const cases = [
    { input: "()", output: true },
    { input: "(*)", output: true },
    { input: "(*))", output: true },
    { input: "*))", output: false },
  ];
  it("should pass v1", () => {
    cases.forEach(({ input, output }) => {
      expect(checkValidString(input)).toBe(output);
    });
  });

  it("should pass v2", () => {
    cases.forEach(({ input, output }) => {
      expect(checkValidStringV2(input)).toBe(output);
    });
  });
});
