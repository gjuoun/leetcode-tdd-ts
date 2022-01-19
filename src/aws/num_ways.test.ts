const num_ways = (N: number): number => {
  if (N === 0 || N === 1) return 1
  else {
    return num_ways(N - 1) + num_ways(N - 2)
  }
}


const num_ways_dynamic = (N: number): number => {
  let memo: number[] = Array(N + 1)

  memo[0] = 1, memo[1] = 1

  if (N >= 2) {
    for (let i = 2; i < memo.length; i++) {
      memo[i] = memo[i - 1] + memo[i - 2]
    }
  }

  return memo[N]
}


describe('shouldfind multiple ways to solve the stair problems', () => {

  it('should return 3 when N=3', () => {
    expect(num_ways(3)).toBe(3)
    expect(num_ways_dynamic(3)).toBe(3)
  })

  it('should return 5 when N=4', () => {
    expect(num_ways(4)).toBe(5)
    expect(num_ways_dynamic(4)).toBe(5)
  })

})