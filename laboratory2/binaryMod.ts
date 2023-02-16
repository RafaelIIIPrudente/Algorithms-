function binarySearch(array: number[], target: number): number | null {
  let lowNumber = 0;
  let highNumber = array.length - 1;

  while (lowNumber <= highNumber) {
    //use bitwise operators like right shift to optimize the calculation
    const middle = lowNumber + ((highNumber - lowNumber) >> 1);

    // Check if the target value is equal to the mid-point value before branching left or right
    if (array[middle] === target) {
      return middle;
    } else if (array[middle] < target) {
      lowNumber = middle + 1;
    } else {
      highNumber = middle - 1;
    }
  }

  return null;
}

let array: number[] = [];
for (let i = 1; i <= 1024; i++) {
  array.push(i);
}
console.log(array)

let numberOfTrials = 100
for (let i = 1; i <= numberOfTrials; i++) {
  let target = Math.ceil(Math.random() * 1024);

  console.time('Execution Time');
  console.log(binarySearch(array, target))
  binarySearch(array, target);
  console.timeEnd('Execution Time');
};