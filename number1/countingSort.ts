export function countingSort(arr: number[]) {
  
  let highestNumber = Math.max(...arr); //k
  let indexArray = new Array(highestNumber + 1).fill(0); //c
  let finalArray = new Array(arr.length).fill(0); //B

  // array[]-- Initial Array to Sort
  for (var i = 0; i <= highestNumber; i++) {
    indexArray[i] = 0
  }

  // Storing Count of each element
  for (var j = 0; j <= arr.length; j++) {
    indexArray[arr[j]] = indexArray[arr[j]] + 1
  }

  // Change indexArray[i] such that it contains actual position of these elements in output array
  for (var i = 1; i <= highestNumber; i++) {
    indexArray[i] = indexArray[i] + indexArray[i - 1];
  }

  // Build Output array from indexArray[i]
  for (var j = arr.length - 1; j >= 0; j--) {
    finalArray[indexArray[arr[j]] - 1] = arr[j];
    indexArray[arr[j]] = indexArray[arr[j]] - 1;
  }
  return finalArray;

}

const sort1 = countingSort([1, 4, 7, 8, 4, 2, 15, 9, 17]);
console.log("Sort 1:", sort1);