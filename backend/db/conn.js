const mongoose = require("mongoose");

async function main() {
  try {
    mongoose.set("strictQuery", true);

    await mongoose.connect(
      "mongodb+srv://emaildoesdrasr:RSQX1J2kilX2oLOR@cluster0.1ljjn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    
    console.log("Banco conectado");
  } catch (error) {}
}

module.exports = main