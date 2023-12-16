/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */

function waitOneSecond() {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove();
    }, 1000);
  });
}

function waitTwoSecond() {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove();
    }, 2000);
  });
}

function waitThreeSecond() {
  return new Promise((reslove) => {
    setTimeout(() => {
      reslove();
    }, 3000);
  });
}

function waitforNseconds(n) {
  return new Promise(async (resolve) => {
    let one, two, three;
    three = parseInt(n / 3);
    if (n % 3 == 2) {
      two = true;
    } else if (n % 3 == 1) {
      one = true;
    }
    for (let i = 0; i < three; i++) {
        await waitThreeSecond();
    }
    if(two){
        await waitTwoSecond();
    }
    else if(one){
        await waitOneSecond();
    }
    resolve();
  });
}

async function calculateTime(x,y,z) {
    let start=Date.now();
    const promises=[waitforNseconds(x),waitforNseconds(y),waitforNseconds(z)];
    let value=await Promise.all(promises);
    let end=Date.now();
    console.log(`waited for ${end-start} seconds`);
    return (end-start);
}


module.exports=calculateTime;