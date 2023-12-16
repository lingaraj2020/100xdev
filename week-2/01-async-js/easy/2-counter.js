function counterwithoutinterval() {

  setTimeout(function done() {
    console.log("logged off evry 1 second");
    setTimeout(done, 1000);
  }, 1000);
}
counterwithoutinterval();
