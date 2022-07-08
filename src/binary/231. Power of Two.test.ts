import { isPowerOfTwo } from "./231. Power of Two";

describe("231. Power of Two", () => {
  it("Input: 1, Output: true", () => {
    const input = 1;
    const expected = true;
    const rev = isPowerOfTwo(input);
    expect(rev).toBe(expected);
  });
  it("Input: 16, Output: true", () => {
    const input = 16;
    const expected = true;
    const rev = isPowerOfTwo(input);
    expect(rev).toBe(expected);
  });
  it("Input: 218, Output: false", () => {
    const input = 218;
    const expected = false;
    const rev = isPowerOfTwo(input);
    expect(rev).toBe(expected);
  });
  it("Input: 0, Output: false", () => {
    const input = 0;
    const expected = false;
    const rev = isPowerOfTwo(input);
    expect(rev).toBe(expected);
  });
  it("Input: -16, Output: false", () => {
    const input = -16;
    const expected = false;
    const rev = isPowerOfTwo(input);
    expect(rev).toBe(expected);
  });
});
