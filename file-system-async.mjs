import { readFile } from "node:fs/promises";

console.log("Leyendo archivo.txt");
const text = await readFile("./archivo.txt", "utf-8");
console.log(text);

console.log("Haciendo cositas turbias");

console.log("Leyendo el segundo archivo.txt");
const text2 = await readFile("./archivo2.txt", "utf-8");
console.log(text2);
