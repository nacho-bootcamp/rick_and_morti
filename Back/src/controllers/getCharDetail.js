const axios = require("axios");

const { KEY, URL_BASE } = process.env;

const getCharDetail = (req, res) => {
  const { id } = req.params;

  axios
    .get(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => {
      const { id, name, species, image, gender, origin } = response.data;
      res.status(200).json({ id, name, species, image, gender, origin });
    })
    .catch((error) => {

      res.status(404).json({ error: error.message });
    });
};

module.exports = getCharDetail;
