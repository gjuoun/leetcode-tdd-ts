
def fruits_into_baskets_quokka(input):
  windowStart = 0; maxLength = 0
  map = {}

  for windowEnd in range(len(input)):
    char = input[windowEnd]
    if map.get(char) :
      map[char] += 1
    else:
      map[char] = 1

  while len(map) > 2: 
    leftChar = input[windowStart]
    if map[leftChar] > 1:
      map[leftChar] -=1
    else:
      map.pop(leftChar) 
    windowStart +=1
  
  maxLength = max(maxLength, windowEnd - windowStart + 1)
  print(maxLength, map)
  return maxLength


fruits_into_baskets_quokka(['a', 'a', 'b', 'c','c','b'])