function heapSort(arr: number[]): number[] {
  // this function takes an array of numbers and returns a sorted array
  buildMinHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
      [arr[0], arr[i]] = [arr[i], arr[0]];
      minHeapify(arr, 0, i);
      //this part of the code loops through the array of numbers from the 
      //end to the start or from right to left of the array
      //it swaps the first element or the current lowest element with 
      //the last element of the input array. 
      //after each of the swaps, the minHeapify function is called to maintain the min-hip property.

  }
  return arr; // returns the sorted array
}
//function to convert the input array of numbers into a binary min-heap
function buildMinHeap(arr: number[]): void { 
  const n = arr.length;
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      minHeapify(arr, i, n);
  }
}
//it calculates first the length of the input array,
//then it iterates over the elements from the middle to the beginning
//and class the minHeapify function to  maintain the min-hip property


function minHeapify(arr: number[], i: number, heapSize: number): void {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let smallest = i;
  //checks if the index of the left child is within the heap (less then the heap size)
  // and if the value of the left child index is less than the value of the smallest index
  // then the smallest if set to the lest
  if (left < heapSize && arr[left] < arr[smallest]) {
      smallest = left;
  }
  //checks if the index of the right child is within the heap
  //and if the value of the right child index is less than the value of the smallest index
  // then the snallest if set to the right
  if (right < heapSize && arr[right] < arr[smallest]) {
      smallest = right;
  }
  // checks if the smallest index if not equal to i
  //if true, then the values at then smallest index and i index are swapped/
  // and the minHeapify function if called recursively on the smallest index
  // to ensure that the subtree is rooted at the smallest index.
  if (smallest !== i) {
      [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
      minHeapify(arr, smallest, heapSize);
  }
}

let sampleRandomArray: number[] = [];
for (let i = 1; i <= 100; i++) {
  let randomNum = Math.ceil(Math.random() * i);
  sampleRandomArray.push(randomNum);
}



console.log(sampleRandomArray);
console.log('Original array:', sampleRandomArray);

console.time("Execution Time   ")
const sortedArr = heapSort(sampleRandomArray);
console.log('Sorted array:', sortedArr);
console.timeEnd("Execution Time   ")