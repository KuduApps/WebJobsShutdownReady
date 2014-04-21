var fs = require('fs');

function whileLoop() {
  console.log('In while loop');
  if (!fs.existsSync(process.env['WEBJOBS_SHUTDOWN_FILE'])) {
    setTimeout(whileLoop, 1000);
  } else {
    console.log('Shutdown detected');
  }
}

whileLoop();
