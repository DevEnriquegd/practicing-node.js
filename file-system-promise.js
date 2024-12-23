const fs = require("node:fs/promises");

console.log("Leyendo archivo.txt");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log(text);
});

console.log("Haciendo cositas turbias");

console.log("Leyendo el segundo archivo.txt");
fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log(text);
});
