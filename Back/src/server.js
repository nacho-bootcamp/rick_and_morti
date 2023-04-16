require("dotenv").config();
const express = require("express");
const router = require("./Routes/index");

const PORT = process.env.PORT || 3001;
const server = express();

server.use("/", router);

server.listen(PORT, () => {
  console.log(`estoy en el puesto ${PORT}`);
});
