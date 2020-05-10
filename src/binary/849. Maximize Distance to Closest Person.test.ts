import { maxDistToClosest } from "./849. Maximize Distance to Closest Person";
import expect from "expect";

describe("849", () => {
  it("Input: [1,0,0,0,1,0,1], Output: 2", () => {
    const input = [1, 0, 0, 0, 1, 0, 1]
    const output = 2
    expect(maxDistToClosest(input)).toBe(output)
  });

  it("Input: [1,0,0,0], Output: 3", () => {
    const input = [1, 0, 0, 0]
    const output = 3
    expect(maxDistToClosest(input)).toBe(output)
  });
  it("Input: [0,1], Output: 1", () => {
    const input = [0, 1]
    const output = 1
    expect(maxDistToClosest(input)).toBe(output)
  });

  it("Input: [1,0,1 ], Output: 1", () => {
    const input = [1, 0, 1]
    const output = 1
    expect(maxDistToClosest(input)).toBe(output)
  });

  it("Input: [0,1,1,1,0,0,1,0,0], Output: 2", () => {
    const input = [0,1,1,1,0,0,1,0,0]
    const output = 2
    expect(maxDistToClosest(input)).toBe(output)
  });

  it("Input: [0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0], Output: 3", () => {
    const input = [0,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,0]
    const output = 3
    expect(maxDistToClosest(input)).toBe(output)
  });

  it("Input: [1,0,0,1], Output: 3", () => {
    const input = [1,0,0,1]
    const output = 1
    expect(maxDistToClosest(input)).toBe(output)
  });
});
