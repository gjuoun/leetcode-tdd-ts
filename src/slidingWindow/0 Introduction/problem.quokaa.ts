const calculateAverage = (arr: number[], k: number) => {
  let windowEnd: number,
    windowStart: number = 0,
    sum: number = 0;

  let result: number[] = [];

  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    sum += arr[windowEnd]; //?

    // windowStart is equal or larger than K-1
    if (windowEnd >= k - 1) {
      const avg = sum / k;
      result.push(avg);
      sum -= arr[windowStart];
      windowStart += 1;
    }
  }

  return result; //?
};

console.log(calculateAverage([1, 3, 2, 6, -1, 4, 1, 8, 2], 5));
