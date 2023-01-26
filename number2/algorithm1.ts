export function algorithm1(input: number) {
  if (input <= 1 ) {
    console.log("Wrong given")
  } else {
    let A: boolean[] = new Array(input).fill(true, 2, input);

    for (let i = 2; i < Math.sqrt(input); i++) {
      if (A[i] === true) {
        for (let j = Math.pow(i, 2); j < input; j += i) {
          A[j] === false
        }
      }
    }
    return A; 

  }
}

let try1 = algorithm1(1)
console.log(try1)