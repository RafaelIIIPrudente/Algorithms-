export function algorithm1(input: number) {
  if (input <= 1) {
    console.log("Wrong given")
  } else {
    let A: boolean[] = new Array(input).fill(true, 2, input);

    for (let i = 2; i <= Math.sqrt(input); i++) {
      if (A[i] === true) {
        for (let j = Math.pow(i, 2); j <= input; j += i) {
          A[j] = false;
        }
      }
    }

    let output: number[] = []

    for (let i = 2; i <= input; i++) {
      if (A[i] === true) {
        output.push(i);
      }
    }
    return output;
  }
}

let try1 = algorithm1(10)
console.log(try1)

console.time('Execution Time');
algorithm1(1000);
console.timeEnd('Execution Time');

console.time('Execution Time');
algorithm1(100000);
console.timeEnd('Execution Time');

console.time('Execution Time');
algorithm1(500000);
console.timeEnd('Execution Time');