const os = require("node:os");
console.log("Sistema operativo:", os.platform());
console.log("Versión:", os.version());
console.log("Arquitectura:", os.arch());
console.log("Memoria libre:", os.freemem() / 1024 / 1024);
console.log("Memoria total:", os.totalmem() / 1024 / 1024);
console.log("CPU:", os.cpus());
console.log("upTime:", os.uptime() / 60 / 60);
