const fs=require("fs");

const filename="a.txt";
fs.readFile(filename,"utf-8",(err,data)=>{
    if(err){
        throw err;
    }
    const cleaneddata=data.replace(/\s+/g,' ');

    fs.writeFile(filename,cleaneddata,"utf-8",(err)=>{
        if(err){
            throw err;
        }
        console.log("file successfully cleaned and updated");
    })
})