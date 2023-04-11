class TreeNode<T> {
  public value: T;
  public left: TreeNode<T> | null;
  public right: TreeNode<T> | null;

  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  public insert(value: T): void {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new TreeNode(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new TreeNode(value);
      } else {
        this.right.insert(value);
      }
    }
  }

  public traverseInOrder(): T[] {
    let result: T[] = [];

    if (this.left !== null) {
      result = result.concat(this.left.traverseInOrder());
    }

    result.push(this.value);

    if (this.right !== null) {
      result = result.concat(this.right.traverseInOrder());
    }

    return result;
  }
}

function treeSort<T>(array: T[]): T[] {
  if (array.length === 0) {
    return array;
  }

  const root = new TreeNode(array[0]);

  for (let i = 1; i < array.length; i++) {
    root.insert(array[i]);
  }

  return root.traverseInOrder();
}

const unsortedArray: number[] = [5, 3, 1, 4, 2];
const sortedArray: number[] = treeSort(unsortedArray);

//
let size: number;
let arrays: number[];
const randomSizes: number[] = [100, 1000, 10000, 100000, 1000000];
const imbalancedSizes: number[] = [100, 10000, 1000000, 100000000];

const randomArrays: number[][] = randomSizes.map((size) =>
  Array.from({ length: size }, () => Math.floor(Math.random() * size))
);

const imbalancedArrays: number[][] = imbalancedSizes.map((size) =>
  Array.from({ length: size }, (_, i) => i + 1)
);

for (let i = 0; i < imbalancedArrays.length; i++) {
  console.log(imbalancedArrays.length);
}


let sampleRandomArray100: number[] = [];
for (let i = 1; i <= 100; i++) {
  let randomNum = Math.ceil(Math.random() * i);
  sampleRandomArray100.push(randomNum);
}
console.log(sampleRandomArray100);

console.time('Execution Time for Random 100 Tree Sort');
console.log(treeSort(sampleRandomArray100));
console.timeEnd('Execution Time for Random 100 Tree Sort');

let sampleRandomArray200: number[] = [];
for (let i = 1; i <= 200; i++) {
  let randomNum = Math.ceil(Math.random() * i);
  sampleRandomArray200.push(randomNum);
}
console.log(sampleRandomArray200);

console.time('Execution Time for Random 200 Tree Sort');
console.log(treeSort(sampleRandomArray200));
console.timeEnd('Execution Time for Random 200 Tree Sort');

let sampleRandomArray300: number[] = [];
for (let i = 1; i <= 300; i++) {
  let randomNum = Math.ceil(Math.random() * i);
  sampleRandomArray300.push(randomNum);
}
console.log(sampleRandomArray300);

console.time('Execution Time for Random 300 Tree Sort');
console.log(treeSort(sampleRandomArray300));
console.timeEnd('Execution Time for Random 300 Tree Sort');

let sampleRandomArray400: number[] = [];
for (let i = 1; i <= 400; i++) {
  let randomNum = Math.ceil(Math.random() * i);
  sampleRandomArray400.push(randomNum);
}
console.log(sampleRandomArray400);

console.time('Execution Time for Random 400 Tree Sort');
console.log(treeSort(sampleRandomArray400));
console.timeEnd('Execution Time for Random 400 Tree Sort');

let sampleRandomArray500: number[] = [];
for (let i = 1; i <= 500; i++) {
  let randomNum = Math.ceil(Math.random() * i);
  sampleRandomArray500.push(randomNum);
}
console.log(sampleRandomArray500);

console.time('Execution Time for Random 500 Tree Sort');
console.log(treeSort(sampleRandomArray500));
console.timeEnd('Execution Time for Random 500 Tree Sort');

let sampleRandomArray1000: number[] = [];
for (let i = 1; i <= 1000; i++) {
  let randomNum = Math.ceil(Math.random() * i);
  sampleRandomArray1000.push(randomNum);
}
console.log(sampleRandomArray1000);

console.time('Execution Time for Random 1000 Tree Sort');
console.log(treeSort(sampleRandomArray1000));
console.timeEnd('Execution Time for Random 1000 Tree Sort');


let sampleImbalancedArray100: number[] = [];
for (let i = 1; i <= 100; i++) {
  sampleImbalancedArray100.push(i);
}
console.log(sampleImbalancedArray100);

console.time('Execution Time for Imbalanced 100 Tree Sort');
console.log(treeSort(sampleImbalancedArray100));
console.timeEnd('Execution Time for Imbalanced 100 Tree Sort');

let sampleImbalancedArray200: number[] = [];
for (let i = 1; i <= 200; i++) {
  sampleImbalancedArray200.push(i);
}
console.log(sampleImbalancedArray200);


console.time('Execution Time for Imbalanced 200 Tree Sort');
console.log(treeSort(sampleImbalancedArray200));
console.timeEnd('Execution Time for Imbalanced 200 Tree Sort');

let sampleImbalancedArray300: number[] = [];
for (let i = 1; i <= 300; i++) {
  sampleImbalancedArray300.push(i);
}
console.log(sampleImbalancedArray300);


console.time('Execution Time for Imbalanced 300 Tree Sort');
console.log(treeSort(sampleImbalancedArray300));
console.timeEnd('Execution Time for Imbalanced 300 Tree Sort');

let sampleImbalancedArray400: number[] = [];
for (let i = 1; i <= 400; i++) {
  sampleImbalancedArray400.push(i);
}
console.log(sampleImbalancedArray400);


console.time('Execution Time for Imbalanced 400 Tree Sort');
console.log(treeSort(sampleImbalancedArray400));
console.timeEnd('Execution Time for Imbalanced 400 Tree Sort');

let sampleImbalancedArray500: number[] = [];
for (let i = 1; i <= 500; i++) {
  sampleImbalancedArray500.push(i);
}
console.log(sampleImbalancedArray500);

console.time('Execution Time for Imbalanced 500 Tree Sort');
console.log(treeSort(sampleImbalancedArray500));
console.timeEnd('Execution Time for Imbalanced 500 Tree Sort');