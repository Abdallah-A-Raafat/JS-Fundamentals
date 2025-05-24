function factorial(n) {
      if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
let args = process.argv.slice(2);
let firstArg = args[0];
let mynumber = parseInt(firstArg);
if (isNaN(mynumber)) {
    console.log(1);
}

factorialResult = factorial(mynumber);
console.log(factorialResult);