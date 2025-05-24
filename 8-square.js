let args = process.argv.slice(2);
let firstArg = args[0];
let mynumber = parseInt(firstArg);
if (isNaN(mynumber)) {
    console.log("Missing size");
}
else{
  for (let i = 0; i < mynumber; i++) {
    let row = '';
    for (let j = 0; j < mynumber; j++) {
      row += 'X';
    }
    console.log(row);
  } 
}