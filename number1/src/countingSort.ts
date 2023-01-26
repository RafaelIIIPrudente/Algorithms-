export function countingSort(arr: number[]): number[] {
  //Find the maximum element in arr
  let highestNumber = Math.max(...arr); //k
  //Create a counting array with size equal to the max element
  let countArray = new Array(highestNumber + 1).fill(0); //c
  //final array
  let resutlArray = new Array(arr.length).fill(0); //B

  // array[]-- Initial Array to Sort
  for (var i = 0; i <= highestNumber; i++) {
    countArray[i] = 0
  }

  // Storing Count of each element
  for (var j = 0; j <= arr.length; j++) {
    countArray[arr[j]] = countArray[arr[j]] + 1
  }

  // Change indexArray[i] such that it contains actual position of these elements in output array
  for (var i = 1; i <= highestNumber; i++) {
    countArray[i] = countArray[i] + countArray[i - 1];
  }

  // Build Output array from indexArray[i]
  for (var j = arr.length - 1; j >= 0; j--) {
    resutlArray[countArray[arr[j]] - 1] = arr[j];
    countArray[arr[j]] = countArray[arr[j]] - 1;
  }
  return resutlArray;

}
