const mongoose = require("mongoose");

require("dotenv").config();

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1ljjn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );

    console.log("Banco conectado");
  } catch (error) {}
}

module.exports = main;
