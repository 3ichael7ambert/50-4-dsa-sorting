function getDigit(num, place) {
    return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
  }
  
  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }
  
  function mostDigits(arr) {
    let maxDigits = 0;
    for (let i = 0; i < arr.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(arr[i]));
    }
    return maxDigits;
  }
  
  function radixSort(arr) {
    const maxDigits = mostDigits(arr);
  
    for (let k = 0; k < maxDigits; k++) {
      const buckets = Array.from({ length: 10 }, () => []);
  
      for (let i = 0; i < arr.length; i++) {
        const digit = getDigit(arr[i], k);
        buckets[digit].push(arr[i]);
      }
  
      arr = [].concat(...buckets);
    }
  
    return arr;
  }
  
  /*
  // Example usage:
  console.log(radixSort([8, 6, 1, 12])); // [1, 6, 8, 12]
  console.log(radixSort([10, 100, 1, 1000, 10000000])); // [1, 10, 100, 1000, 10000000]
  console.log(radixSort([902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593]));
  // [4, 7, 29, 86, 408, 593, 902, 1556, 3556, 4386, 8157, 9637]
  */

  module.exports = { getDigit, digitCount, mostDigits, radixSort };