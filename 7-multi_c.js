let args = process.argv.slice(2);
let firstArg = args[0];
let mynumber = parseInt(firstArg);
if (isNaN(mynumber)) {
    console.log("Missing number of occurrences");
}
else{
  for (let i = 0; i < mynumber; i++) {
    console.log("C is fun");
  }
}