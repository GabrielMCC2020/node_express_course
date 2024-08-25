const fs = require('fs');

const existe = fs.existsSync("nuevo");

if (!existe) {
  fs.mkdir("./nuevo", error => {
    if (error) {
      console.error(error);
    } else {
      console.log("Creado!");
    }
  });
  console.log("Creando el directorio...");
  
}

