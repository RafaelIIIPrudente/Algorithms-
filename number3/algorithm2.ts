export function algorithm2 (input: number) {
  if (input <= 1) {
    console.log("Wrong given")
  } else {
    let output: number[] = [];
    let k = (input - 2) / 2 

    let integerList: boolean[] = new Array(k + 1).fill(true);

    for (let i = 1; i <= k; i++) {
      let j = i;

      while (i + j + 2 * i * j <= k) {
        integerList[i + j + 2 * i * j] = false;
        j += 1;
      }
    }
    if (input > 2) {
      output.push(2)
    }

    for (let i = 1; i <= k; i++) {
      if (integerList[i]) {
        output.push(2 * i + 1);
      }
    }

    return output;

  }
}
let try1 = algorithm2(100)
console.log(try1);


console.time('Execution Time');
algorithm2(1000);
console.timeEnd('Execution Time');

console.time('Execution Time');
algorithm2(100000);
console.timeEnd('Execution Time');

console.time('Execution Time');
algorithm2(500000);
console.timeEnd('Execution Time');