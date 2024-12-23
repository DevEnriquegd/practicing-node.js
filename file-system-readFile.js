const fs = require("node:fs");
const { promisify } = require("node:util");

//Cuando no funciona el /promises, en módulos nativos.
const readFile = promisify(fs.readFile);

console.log("Leyendo archivo.txt");
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  console.log(text);
});

console.log("Haciendo cositas turbias");

console.log("Leyendo el segundo archivo.txt");
fs.readFile("./archivo2.txt", "utf-8", (err, text) => {
  console.log(text);
});
