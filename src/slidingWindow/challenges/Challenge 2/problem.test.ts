import { string_anagrams } from "./question.quokka"

describe('String Anagrams (hard)#', () => {

  it(`Input: String="ppqp", Pattern="pq" Output: [1, 2]`, () => {
    expect(string_anagrams('ppqp', 'pq')).toStrictEqual([1, 2])
  })

  it(`Input: String="abbcabc", Pattern="abc" Output: [2, 3, 4]`, () => {
    expect(string_anagrams('abbcabc', 'abc')).toStrictEqual([2, 3, 4])
  })

})