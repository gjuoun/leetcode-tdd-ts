function multiple5or3() {

  let sum = 0
  for (let i = 0; i <= 1000; i++) {
    if (i % 3 === 0) {
      sum += i
    } else if (i % 5 === 0) {
      sum += i
    }
  }

  return sum
}

function multiple5or3_2() {

  let sum = 0
  for(let x = 0; x*3 <= 1000; x++) {
    sum += x*3
  }

  for(let y = 0; y*5 <= 1000; y++){
    if( (y*5)%3 !== 0){
      sum += y*5
    }
  }

  return sum
}


describe('test multiples', function () {
  it('should return correct answer', function () {
    expect(multiple5or3()).toBe(234168)
  })

  it('should return correct answer 2', function () {
    expect(multiple5or3_2()).toBe(234168)
  })
})