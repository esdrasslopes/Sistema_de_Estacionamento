const express = require("express");

const cors = require("cors");

const app = express();

const configDb = require("./db/conn");

const router = require("./routes/router");

app.use(cors());

configDb();

app.use(express.json());

app.use("/api", router);

app.listen(3000, () => {
  console.log("Servidor Online!");
});
