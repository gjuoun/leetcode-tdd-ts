/*
```
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

function solution(N);

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].

```
*/
const binaryGap = (num: number) => {
  return binGap(num, 0);
};

const binGap = (num: number, accu = 0, gap = 0, addIt = false): number => {
  if (num === 1) {
    if (addIt) {
      let longest = accu >= gap ? accu : gap;
      return longest;
    } else {
      return gap;
    }
  } else if (num === 0) {
    return gap;
  }

  // even
  if (num % 2 === 0) {
    return binGap(num >> 1, accu + 1, gap, addIt);
  }
  // odd
  else {
    if (addIt) {
      let longest = accu >= gap ? accu : gap;
      return binGap(num >> 1, 0, longest, true);
    } else {
      return binGap(num >> 1, 0, gap, true);
    }
  }
};

const binGap2 = (num: number) => {
  return num
    .toString(2)
    .split("")
    .filter((n) => n === "0").length;
};

describe("binary gap", function () {
  it("num = 9, output = 2 ", () => {
    return expect(binaryGap(9)).toBe(2);
  });

  it("num = 529, output = 4 ", () => {
    return expect(binaryGap(529)).toBe(4);
  });

  it("num = 20, output = 1 ", () => {
    return expect(binaryGap(20)).toBe(1);
  });

  it("num = 15, output = 0 ", () => {
    return expect(binaryGap(9)).toBe(2);
  });

  it("num = 8, output = 0 ", () => {
    return expect(binaryGap(8)).toBe(0);
  });

  it("num = 1041, output = 5 ", () => {
    return expect(binaryGap(1041)).toBe(5);
  });
});
