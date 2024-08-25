const util  = require('util');
const fs = require('fs');

// export NODE_DEBUG=desarrollo
const depurar = util.debuglog('desarrollo');
console.log('Log');
depurar('Depuración'); 

// $env:NODE_DEBUG="desarrollo";
// Agregar el comando antes de ejecutar node .\utils.js