const smallest_window_containing_subinputing = (input: string, pattern: string) => {
  let windowStart = 0,
    matched = 0,
    subinputStart = 0,
    minLength = input.length + 1,
    charFrequency: Record<string, number> = {};

  for (let i = 0; i < pattern.length; i++) {
    const chr = pattern[i];
    if (!(chr in charFrequency)) {
      charFrequency[chr] = 0;
    }
    charFrequency[chr] += 1;
  }

  // try to extend the range [windowStart, windowEnd]
  for (let windowEnd = 0; windowEnd < input.length; windowEnd++) {
    const rightChar = input[windowEnd];
    if (rightChar in charFrequency) {
      charFrequency[rightChar] -= 1;
      if (charFrequency[rightChar] >= 0) { // Count every matching of a character
        matched += 1;
      }
    }

    // Shrink the window if we can, finish as soon as we remove a matched character
    while (matched === pattern.length) {
      if (minLength > windowEnd - windowStart + 1) {
        minLength = windowEnd - windowStart + 1;
        subinputStart = windowStart;
      }

      const leftChar = input[windowStart];
      windowStart += 1;
      if (leftChar in charFrequency) {
        // Note that we could have redundant matching characters, therefore we'll decrement the
        // matched count only when a useful occurrence of a matched character is going out of the window
        if (charFrequency[leftChar] === 0) {
          matched -= 1;
        }
        charFrequency[leftChar] += 1;
      }
    }
  }

  if (minLength > input.length) {
    return '';
  }
  return input.substring(subinputStart, subinputStart + minLength);

}



console.log(smallest_window_containing_subinputing('aabdec', 'abc')); // 'abdec' 
