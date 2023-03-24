const axios = require("axios");

let getCharById = (res, id) => {
  axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => {
      const { id, image, name, gender, species } = response.data;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ id, image, name, gender, species }));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text/plain" }),
        res.end(`el personaje con el ${id} no se a encontrado`);
    });
};

module.exports = {
  getCharById,
};
