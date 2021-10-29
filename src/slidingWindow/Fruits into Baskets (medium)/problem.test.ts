// fruits_into_baskets
const fruits_into_baskets = (fruits: string[]) => {
  let startIndex = 0, max = 0
  const map = new Map<string, number>()

  for (let endIndex = 0; endIndex < fruits.length; endIndex++) {
    const rightChar = fruits[endIndex]

    if (map.has(rightChar)) {
      map.set(rightChar, map.get(rightChar)! + 1)
    } else {
      map.set(rightChar, 1)
    }

    // remove overflow chars
    while(map.size > 2){
      const leftChar = fruits[startIndex]
      map.delete(leftChar)
      startIndex ++ 
    }

    let windowSize = (endIndex + 1) - startIndex
    max = Math.max(windowSize, max)
  }

  return max
}



// time complexity: O(n), space complexity: O(1)


describe("fruits_into_baskets", () => {
  it("Input arr =['A', 'B', 'C', 'A', 'C'] , output = 3", () => {
    const arr = ['A', 'B', 'C', 'A', 'C'], output = 3
    expect(fruits_into_baskets(arr)).toBe(output)
  });

  it("Input arr =['A', 'B', 'C', 'B', 'B', 'C'] , output = 5", () => {
    const arr = ['A', 'B', 'C', 'B', 'B', 'C'], output = 5
    expect(fruits_into_baskets(arr)).toBe(output)
  });

})


