const http = require("http");
const fs = require("fs");
const html = require("./templates/index.js");

const port = 5000;
const template = html("Tarea", "Hola mundo!");

http
  .createServer((req, res) => {
    res.write(template);
    res.end();
  })
  .listen(port, () => {
    console.log(`Server listening on ${port}`);
  });
