//const http = require("http");
//const data = require("./utils/data");

//const PORT = 3001;
//http
//.createServer((res, req) => {
//res.setHeader("Access-Control-Allow-Origin", "*");
//if (req.url.include(" rickandmorty/character")) {
//let id = req.url.split("/").at(-1);
//let character = data.filter((char) => char.id === Number(id));
// cuando se hagarra datos de la url todos esos datos son string si yo quiero un numero hay que parsearlo
//res.writeHead(200, { "Content-Type": "application/json" }),
//res.end(JSON.stringify(character));
//  }
//})
//.listen(PORT, "localhost");

const http = require("http");
const { getCharById } = require("./controllers/getCharById");
const { getCharDetail } = require("./controllers/getCharDetail");
const PORT = 3001;

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    const { url } = req;

    if (url.includes("onsearch")) {
      const id = url.split("/").at(-1);
      getCharById(res, id);
    }

    if (url.includes("detail")) {
      const id = url.split("/").at(-1);
      getCharDetail(res, id);
    }
  })
  .listen(PORT, "localhost");
