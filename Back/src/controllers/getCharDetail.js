const axios = require("axios");

const getCharDetail = (res, id) => {
  axios
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then((response) => {
      const { name, gender, status, origin, species } = response.data;
      res.writeHead(200, { "Content-Type": " text/plain" });
      res.end(JSON.stringify({ name, gender, status, origin, species }));
    })
    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text/plain" }),
        res.end(`el personaje con el ${id} no se a encontrado`);
    });
};

module.exports = {
  getCharDetail,
};
