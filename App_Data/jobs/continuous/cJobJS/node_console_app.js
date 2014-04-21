var fs = require('fs');

var shutdownDetectedFilePath = 'd:\\home\\site\\shutdown.detected';

try {
  fs.unlinkSync(shutdownDetectedFilePath);
} catch (e) {
}

function whileLoop() {
  console.log('In while loop');
  if (!fs.existsSync(process.env['WEBJOBS_SHUTDOWN_FILE'])) {
    setTimeout(whileLoop, 1000);
  } else {
    console.log('Shutdown detected');

    // Write file to show shutdown was detected
    fs.writeFileSync('d:\\home\\site\\shutdown.detected', 'Shutdown detected');
  }
}

whileLoop();
