let arr = process.argv.slice(2);
let result = 0;

result = arr.reduce((acc, curr) => {
  acc += Number(curr);
  return acc;
}, 0);

console.log(result);
