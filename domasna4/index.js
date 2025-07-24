

const http = require("http");
const { calculator } = require("./calculator");

const server = http.createServer((req, res) => {
  const pathParts = req.url.split('/');


  if (pathParts[1] === 'calculator') {
    const op = pathParts[2];
    const numOne = parseFloat(pathParts[3]);
    const numTwo = parseFloat(pathParts[4]);

    if (!op || isNaN(numOne) || isNaN(numTwo)) {
      res.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
      return res.end("Instrukcii: Vnesete ja adresata /calculator/operacija/broj1/broj2");
    }

    const result = calculator(op, numOne, numTwo);
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(`Rezultatot e: ${result}`);
  }

 
  if (pathParts[1] === 'convert' && pathParts[2] === 'kg-g') {
    const kg = parseFloat(pathParts[3]);

    if (isNaN(kg)) {
      res.writeHead(400, { "Content-Type": "text/html; charset=utf-8" });
      return res.end("Instrukcii: Vnesete ja adresata vo format /convert/kg-g/broj");
    }

    const grams = kg * 1000;
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    return res.end(`${kg}kg se ${grams} grama.`);
  }

  res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
  res.end("404 - Stranata ne e pronajdena");
});

server.listen(3000, () => {
  console.log("Serverot e startuvan na port 3000.");
});





//Собирање:
//http://127.0.0.1:3000/calculator/zbir/10/5
//Одземање:
//http://127.0.0.1:3000/calculator/razlika/20/7
//Множење:
//http://127.0.0.1:3000/calculator/mnozenje/8/6
//Делење:
//http://127.0.0.1:3000/calculator/delenje/50/5
//Модуло (остаток):
//http://127.0.0.1:3000/calculator/modulo/10/3
//Степенување:
//http://127.0.0.1:3000/calculator/stepen/2/4



