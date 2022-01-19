function num_ways_vars(n: number, x: number[]) {
  if (n === 0) return 1
  let total = 0

  for (const value of x) {
    if (n - value >= 0) {
      total += num_ways_vars(n - value, x)
    }
  }

  return total
}


function num_ways_vars_dynamic(n: number, x: number[]) {
  if (n === 0) return 1
  let cache: number[] = Array(n + 1)
  cache[0] = 1

  for (let num = 1; num <= n; num++) {
    let total = 0
    for (const value of x) {
      if (num - value >= 0) {
        // get cache value
        total += cache[num - value]
      }

      // set cache value by num's position , cache = [ 1, ....]
      cache[num] = total
    }
  }

  return cache[n]
}

describe('shouldfind multiple ways to solve the stair problems', () => {

  it('should return 3 when N=3', () => {
    expect(num_ways_vars(3, [1, 3, 5])).toBe(2)

    expect(num_ways_vars_dynamic(3, [1, 3, 5])).toBe(2)
  })

}) 