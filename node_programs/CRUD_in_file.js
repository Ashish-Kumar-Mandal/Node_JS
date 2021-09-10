const fs = require('fs');
const path = require('path');

const dir_path = path.join(__dirname, './crud');
const file_path = `${dir_path}/crud.txt`;


// create file.
fs.writeFileSync(file_path, "Dummy data here. ");


/*
// read file.
fs.readFile(file_path, 'utf8', (err, data) => {
    console.log(err, data);
})
*/

/*
// update file.
fs.appendFile(file_path, "New content added", (err) => {
    if(!err) console.log("data added successfully");
})
*/

/*
// rename file
fs.rename(file_path, `${dir_path}/newcrud.txt`, (err) => {
    if(!err) console.log("file rename successfully");
})
*/

/*
// delete file.
fs.unlinkSync(`${dir_path}/newcrud.txt`);
*/