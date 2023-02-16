function insertionSort(array: number[]): number[] {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    const key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = key;
  }

  return array;
}

function selectionSort(array: number[]): number[] {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      const temp = array[i];
      array[i] = array[minIndex];
      array[minIndex] = temp;
    }
  }

  return array;
}

function bubbleSort(array: number[]): number[] {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}


//128 array length
let sampleArray128: number[] = [];
for (let i = 1; i <= 128; i++) {
  let randomNum = Math.ceil(Math.random() * i);
  sampleArray128.push(randomNum);
}
console.log(sampleArray128)


console.time('Execution Time for 128 Bubble Sort');
bubbleSort(sampleArray128);
console.timeEnd('Execution Time for 128 Bubble Sort');

console.time('Execution Time for 128 Insertion Sort');
insertionSort(sampleArray128);
console.timeEnd('Execution Time for 128 Insertion Sort');

console.time('Execution Time for 128 Selection Sort');
selectionSort(sampleArray128);
console.timeEnd('Execution Time for 128 Selection Sort');

//256 array length
let sampleArray256: number[] = [];
for (let i = 1; i <= 256; i++) {
  let randomNum = Math.ceil(Math.random() * i);
  sampleArray256.push(randomNum);
}
console.log(sampleArray256)


console.time('Execution Time for 256 Bubble Sort');
bubbleSort(sampleArray256);
console.timeEnd('Execution Time for 256 Bubble Sort');

console.time('Execution Time for 256 Insertion Sort');
insertionSort(sampleArray256);
console.timeEnd('Execution Time for 256 Insertion Sort');

console.time('Execution Time for 256 Selection Sort');
selectionSort(sampleArray256);
console.timeEnd('Execution Time for 256 Selection Sort');

//512 array length
let sampleArray512: number[] = [];
for (let i = 1; i <= 512; i++) {
  let randomNum = Math.ceil(Math.random() * i);
  sampleArray512.push(randomNum);
}
console.log(sampleArray512)


console.time('Execution Time for 512 Bubble Sort');
bubbleSort(sampleArray512);
console.timeEnd('Execution Time for 512 Bubble Sort');

console.time('Execution Time for 512 Insertion Sort');
insertionSort(sampleArray512);
console.timeEnd('Execution Time for 512 Insertion Sort');

console.time('Execution Time for 512 Selection Sort');
selectionSort(sampleArray512);
console.timeEnd('Execution Time for 512 Selection Sort');

//1024 array length
let sampleArray1024: number[] = [];
for (let i = 1; i <= 1024; i++) {
  let randomNum = Math.ceil(Math.random() * i);
  sampleArray1024.push(randomNum);
}
console.log(sampleArray1024)



console.time('Execution Time for 1024 Bubble Sort');
bubbleSort(sampleArray1024);
console.timeEnd('Execution Time for 1024 Bubble Sort');

console.time('Execution Time for 1024 Insertion Sort');
insertionSort(sampleArray1024);
console.timeEnd('Execution Time for 1024 Insertion Sort');

console.time('Execution Time for 1024 Selection Sort');
selectionSort(sampleArray1024);
console.timeEnd('Execution Time for 1024 Selection Sort');

//SORTED
//1024 array length
let sortedSampleArray1024: number[] = [];
for (let i = 1; i <= 1024; i++) {
  let sortedNum = i;
  sortedSampleArray1024.push(sortedNum);
}
console.log(sortedSampleArray1024)


console.time('Execution Time for Sorted 1024 Bubble Sort');
bubbleSort(sortedSampleArray1024);
console.timeEnd('Execution Time for Sorted 1024 Bubble Sort');

console.time('Execution Time for Sorted 1024 Insertion Sort');
insertionSort(sortedSampleArray1024);
console.timeEnd('Execution Time for Sorted 1024 Insertion Sort');

console.time('Execution Time for Sorted 1024 Selection Sort');
selectionSort(sortedSampleArray1024);
console.timeEnd('Execution Time for Sorted 1024 Selection Sort');



//FOR REVERSE
//1024 array length
let reversedSampleArray1024: number[] = [];
for (let i = 1024; i >= 1; i--) {
  let reversedNum = i;
  reversedSampleArray1024.push(reversedNum);
}
console.log(reversedSampleArray1024)



console.time('Execution Time for Reversed 1024 Bubble Sort');
bubbleSort(reversedSampleArray1024);
console.timeEnd('Execution Time for Reversed 1024 Bubble Sort');

console.time('Execution Time for Reversed 1024 Insertion Sort');
insertionSort(reversedSampleArray1024);
console.timeEnd('Execution Time for Reversed 1024 Insertion Sort');

console.time('Execution Time for Reversed 1024 Selection Sort');
selectionSort(reversedSampleArray1024);
console.timeEnd('Execution Time for Reversed 1024 Selection Sort');


//ALMOST 
//1024 array length
let almostSortedArray1024: number[] = [];
for (let i = 1; i <= 1009; i++) {
  let sortedNum = i;
  almostSortedArray1024.push(sortedNum)
};
for (let j = 1010; j <= 1024; j++) {
  let randomNum = Math.ceil(Math.random() * j)
  almostSortedArray1024.push(randomNum);
}
console.log(almostSortedArray1024);

console.time('Execution Time for Almost 1024 Bubble Sort');
bubbleSort(almostSortedArray1024);
console.timeEnd('Execution Time for Almost 1024 Bubble Sort');

console.time('Execution Time for Almost 1024 Insertion Sort');
insertionSort(almostSortedArray1024);
console.timeEnd('Execution Time for Almost 1024 Insertion Sort');

console.time('Execution Time for Almost 1024 Selection Sort');
selectionSort(almostSortedArray1024);
console.timeEnd('Execution Time for Almost 1024 Selection Sort');

//2048 array length
let sampleArray2048: number[] = [];
for (let i = 1; i <= 2048; i++) {
  let randomNum = Math.ceil(Math.random() * i);
  sampleArray2048.push(randomNum);
}
console.log(sampleArray2048)

console.time('Execution Time for 2048 Bubble Sort');
bubbleSort(sampleArray2048);
console.timeEnd('Execution Time for 2048 Bubble Sort');

console.time('Execution Time for 2048 Insertion Sort');
insertionSort(sampleArray2048);
console.timeEnd('Execution Time for 2048 Insertion Sort');

console.time('Execution Time for 2048 Selection Sort');
selectionSort(sampleArray2048);
console.timeEnd('Execution Time for 2048 Selection Sort');