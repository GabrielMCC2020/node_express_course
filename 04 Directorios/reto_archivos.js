const fs = require("fs");
const path = require("path");

const route = path.join(__dirname, "archivo.txt");

fs.writeFile(route, "Hola mundo", (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Archivo creado!");
});

fs.appendFile(route, "Adios mundo", (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Texto agregado!");
});
fs.mkdir(path.join(__dirname, "nuevosky"), (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Directorio creado!");
});

fs.rename(route, path.join(__dirname, "nuevosky", "nuevo.txt"), (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Renombrado!");
});

fs.rm(path.join(__dirname, "./nuevosky"), { recursive: true }, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log("Eliminado!");
});
