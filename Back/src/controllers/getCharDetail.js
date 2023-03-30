const axios = require("axios");
const { KEY, URL } = process.env;

const URL_BASE = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
  const { id } = req.params;
  axios
    .get(`${URL_BASE}/${id}`)
    .then((res) => {
      const { id, name, species, image, gender, origin } = response.data;
      res.status(200).json({ id, name, species, image, gender, origin });
    })
    .catch((error) => {
      res.status(400).json({ error: error.message });
    });
};

module.export = getCharDetail;
