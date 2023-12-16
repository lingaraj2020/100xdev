/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    return new Promise((resolve)=>{
        let start=Date.now();
        while(true){
            let end=Date.now();
            if(end-start>=seconds){
                break;
            }
        }
        resolve();
    })


}
module.exports=sleep;