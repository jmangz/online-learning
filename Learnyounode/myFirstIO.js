const fs = require('fs');

const buff = fs.readFileSync(process.argv[2]);
const strForm = buff.toString();
let count = 0;

for (let i = 0; i < strForm.length; i++) {
  if (strForm[i] === '\n') {
    count++;
  }
}
console.log(count);
// console.log(fs);
// console.log(buff);
