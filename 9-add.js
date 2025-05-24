function add(a,b){
  return a + b;
}
let args = process.argv.slice(2);
let firstArg = args[0];
let secondArg = args[1];
let mynumber = parseInt(firstArg);
let mynumber2 = parseInt(secondArg);


  let sum = add(mynumber, mynumber2);
  console.log(sum); 

