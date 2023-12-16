const { error } = require("console");
const fs=require("fs");

function writefilecontent(filename,data){
    fs.writeFile(filename,data,(err)=>{
        if(err){
            throw err;
        }
        console.log("File has been saved!")
    })
}

writefilecontent("a2a.txt","Hello I am beast");
let res=1;
for(let i=0;i<10000000;i++){
  res+=i;
}
console.log(res);
console.log("operation 1 is completed succussfully!");

let res2=1;
for(let i=0;i<10000;i++){
  res2+=i;
}
console.log(res2);
console.log("operation 2 is completed succussfully!");