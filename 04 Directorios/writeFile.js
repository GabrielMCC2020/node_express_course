const fs = require('fs');

const texto = `
Este
es 
un
archivo
simple
de 
texto
`;

fs.writeFile('texto.txt', texto, error => {
    if (error) {
      return console.error(error);
    }
    console.log('Guardado!');
});
console.log("Guardando archivo...");