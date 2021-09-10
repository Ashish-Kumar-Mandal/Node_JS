const fs = require('fs');

fs.writeFileSync("test.txt","Ok I am created a file");

console.log(__dirname);
console.log(__filename);
console.log(__filename.substr(__filename.lastIndexOf("\\")))