let args = process.argv.slice(2);
let firstArg = args[0];
let mynumber = parseInt(firstArg);
if (isNaN(mynumber)) {
    console.log("Not a number");
}
else {
    console.log("My number: " + mynumber);
    }
