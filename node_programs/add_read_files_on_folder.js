const fs = require('fs');
const path = require('path');
const dir_path = path.join(__dirname, 'files');

/* 
// Create bunch files.
for(i=0; i<5; i++){
    fs.writeFileSync(dir_path+"/file"+i+".txt", "I am text file");
    // fs.unlinkSync(dir_path+"/file"+i+".txt", "I am text file");
}
*/

// read files.
fs.readdir(dir_path, (err,files)=>{
    files.forEach((file)=>{
        console.log(file);
    })
})