const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { dbConnection } = require("./source/database/config");
const autosroutes = require("./source/routes/autos.routes");

dbConnection();

app.use(cors());
app.use(express.json());

app.use("/api", autosroutes);

app.get("/", function (_, res) {
  res.send("<h2>Hola mundo</h2>");
});

app.listen(3000, console.log("servidor corriendo en puerto 3000"));
