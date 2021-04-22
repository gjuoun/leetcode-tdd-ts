// Write a function:

// function solution(A);

// that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

// For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

// Given A = [1, 2, 3], the function should return 4.

// Given A = [−1, −3], the function should return 1.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [1..100,000];
// each element of array A is an integer within the range [−1,000,000..1,000,000].

function positiveInt(arr: number[]) {
  const NMax = 100000;
  const NMin = 1;

  const numMap = new Map<number, number>()
  for(const num of arr){ 
    numMap.set(num, num)
  }

  for(let i = NMin; i <= NMax; i++){
    if(!numMap.has(i)){
      return i
    }
  }

  return 1
}





describe("demo test 1", () => {
  it("A = [1, 3, 6, 4, 1, 2], should return 5", () => {
    const arr = [1, 3, 6, 4, 1, 2], output = 5
    expect(positiveInt(arr)).toBe(output)
  });

  it("Input arr = [1, 2, 3], output = 4", () => {
    const arr = [1, 2, 3], output = 4
    expect(positiveInt(arr)).toBe(output)
  });

  it("Input arr = [−1, −3], output = 1", () => {
    const arr = [-1, -3], output = 1
    expect(positiveInt(arr)).toBe(output)
  });
})