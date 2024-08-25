const path = require('path');

console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.format({
    root: '/',
    name:'archivo',
    ext:'.txt'
}));
console.log(path.join(__dirname, 'carpeta', 'archivo.js'));



