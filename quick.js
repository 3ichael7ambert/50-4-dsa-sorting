/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (array, i, j) => {
      [array[i], array[j]] = [array[j], array[i]];
    };
  
    let pivotValue = arr[start];
    let pivotIndex = start;
  
    for (let i = start + 1; i <= end; i++) {
      if (arr[i] < pivotValue) {
        pivotIndex++;
        swap(arr, pivotIndex, i);
      }
    }
  
    // Move the pivotValue to its correct position
    swap(arr, start, pivotIndex);
  
    return pivotIndex;
  }
  /*
  // Example usage:
  let arr = [4, 2, 5, 3, 6];
  console.log(pivot(arr)); // 2
  console.log(arr); // [3, 2, 4, 5, 6]
  
  let arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
  let arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
  
  console.log(pivot(arr1)); // 3
  console.log(pivot(arr2)); // 4
  
  console.log(arr1.slice(0, 3).sort((a, b) => a - b)); // [2, 3, 4]
  console.log(arr1.slice(3).sort((a, b) => a - b)); // [5, 7, 8, 9, 10, 20]
  
  console.log(arr2.slice(0, 4).sort((a, b) => a - b)); // [0, 2, 4, 5]
  console.log(arr2.slice(4).sort((a, b) => a - b)); // [8, 10, 11, 12, 13, 16]
*/  

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
      // Get the index of the pivot element
      let pivotIndex = pivot(arr, left, right);
  
      // Recursively sort the subarrays
      quickSort(arr, left, pivotIndex - 1);
      quickSort(arr, pivotIndex + 1, right);
    }
  
    return arr;
  }
  
  
  /*
  // Example usage:
  console.log(quickSort([4, 20, 12, 10, 7, 9])); // [4, 7, 9, 10, 12, 20]
  console.log(quickSort([0, -10, 7, 4])); // [-10, 0, 4, 7]
  console.log(quickSort([1, 2, 3])); // [1, 2, 3]
  
  let nums = [
    4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34,
    23, 2, 453, 546, 75, 67, 4342, 32
  ];
  
  console.log(quickSort(nums)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
*/  

module.exports = { pivot, quickSort };