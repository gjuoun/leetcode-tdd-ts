import { smallest_window_containing_subinputing } from "./question.quokka"

describe('String Anagrams (hard)#', () => {

  it(`Input: String="aabdec", Pattern="abc"
    Output: "abdec"`, () => {
    expect(smallest_window_containing_subinputing('aabdec', 'abc')).toBe('abdec')
  })

  it(`Input: String="abdbca", Pattern="abc"
  Output: "bca"`, () => {
    expect(smallest_window_containing_subinputing('abdbca', 'abc')).toBe('bca')
  })

  it(`Input: String="adcad", Pattern="abc"
  Output: ""`, () => {
    expect(smallest_window_containing_subinputing('adcad', 'abc')).toBe('')
  })
})