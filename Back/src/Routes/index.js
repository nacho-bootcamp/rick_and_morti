const { Router } = require("express");
const { getCharDetail } = require("./getCharDetail");
const { getCharById } = require("./getCharById");

const router = Router();

router.get("/onsearch/:id", getCharById);

router.get("/detail/:id", getCharDetail);

module.exports = router;
