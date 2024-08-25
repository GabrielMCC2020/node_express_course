const fs = require('fs');

fs.appendFile("./texto.txt", "Nueva Linea\n", error => {
if (error) {
          return console.log(error);
        }
  console.log("Guardado!");
});

console.log("Guardando...");
