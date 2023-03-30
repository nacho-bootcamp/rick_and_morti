const axios = require("axios");
const { KEY, URL } = process.env;

// let getCharById = (res, id) => {
//   axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((res) => {
//       const { id, image, name, gender, species } = response.data;
//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify({ id, image, name, gender, species }));
//     })
//     .catch((err) => {
//       res.writeHead(500, { "Content-Type": "text/plain" }),
//         res.end(`el personaje con el ${id} no se a encontrado`);
//     });
// };

// module.exports = {
//   getCharById,
// };

const URL_BASE = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params;
  axios
    .get(`${URL_BASE}/${id}`)
    .then((res) => {
      const { id, name, species, image, gender } = response.data;
      res.status(200).json({ id, name, species, image, gender, origin });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

module.export = getCharById;
