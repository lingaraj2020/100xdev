function counter(){
    let count=0;
    setInterval(()=>{
     console.log("logged off:",count++); 
    },1000)
  } 
  counter();