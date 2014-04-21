var fs = require('fs');
var counter = 0;

// Run for 10 seconds and finish
function whileLoop() {
  console.log('In while loop ' + (counter++));
  if (counter <= 10) {
    setTimeout(whileLoop, 1000);
  } else {
    console.log('Work done');
  }
}

whileLoop();
