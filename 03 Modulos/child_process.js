const cp = require('child_process');

cp.exec('dir', (error, datos) => { // ls, echo hola
  if (error) {
    return console.log('Error!', error);
  }
    console.log(`stdout: ${datos}`);
});