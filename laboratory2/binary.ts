export default function binarySearch(array: number[], target: number): number {
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

let try1 = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 10)
console.log(try1)