export const fruits_into_baskets_quokka = (input: string[]) => {
  let windowStart = 0, maxLength = 0;
  let map: Record<string, number> = {}

  for (let windowEnd = 0; windowEnd < input.length; windowEnd += 1) {
    const rightChar = input[windowEnd]

    if(map[rightChar] >= 0 ){
      map[rightChar] +=1
    }else{
      map[rightChar] = 1
    }
    
    while(Object.keys(map).length > 2){ // 2 busket 
      // shrink the map
      const leftChar = input[windowStart]
      if(map[leftChar] > 1){
        map[leftChar] -= 1
      }else{
        delete map[leftChar]
      }

      windowStart +=1
    }

   maxLength = Math.max(maxLength, windowEnd - windowStart + 1) 
  }

  return maxLength
}


console.log(fruits_into_baskets_quokka(['A', 'B', 'C', 'A', 'C'])); //should be 3
