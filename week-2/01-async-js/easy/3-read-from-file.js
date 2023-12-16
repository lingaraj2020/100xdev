const fs=require("fs");


fs.readFile("a.txt","utf-8",(err,data)=>{
  if(err){
    console.log(err);
  }
  if(data){
    console.log("File content");
    console.log(data);
  }
})

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