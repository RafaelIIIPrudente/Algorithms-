export function binarySearch(array: number[], target: number): number {
  let leftmost: number = 0;
  let righmost: number = array.length - 1;


  while (leftmost <= righmost) {
    const middle: number = Math.floor((leftmost + righmost) / 2);

    if (array[middle] < target) {
      leftmost = middle + 1;
    }
    else if (array[middle] > target) {
      righmost = middle - 1;
    }
    else {
      return middle;
    }
  }
  return - 1;
}

var array: number[] = [];
for (var i = 1; i <= 1024; i++) {
  array.push(i);
}
console.log(array)

let numberOfTrials = 100
for (var i = 1; i <= numberOfTrials; i++) {
  let target = Math.ceil(Math.random() * i);
  
  
  console.time('Execution Time');
  console.log(binarySearch(array,target))
  binarySearch(array, target);
  console.timeEnd('Execution Time');
}

