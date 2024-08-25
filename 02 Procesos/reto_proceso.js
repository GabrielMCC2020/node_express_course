// Capturamos el nombre del usuario desde los argumentos de la línea de comandos
const nombreUsuario = process.argv[2];

// Saludo inicial
console.log(`Hola ${nombreUsuario}! ¿Cuántos años tienes?`);

// Configuramos stdin para recibir la edad
process.stdin.on('data', (input) => {
    const edad = input.toString().trim();  // Convertimos la entrada a cadena y eliminamos espacios
    console.log(`¡${nombreUsuario}, tienes ${edad} años!`);
    
    // Salida del programa
    console.log(`Saliendo del programa con código: 0`);
    process.exit(0);  // Terminamos el programa con código de salida 0
});


// node '.\02 Procesos\reto_proceso.js' Gabriel