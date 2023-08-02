const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.URI_DB);
    console.log("DB Online");
  } catch (error) {
    console.log(error);
    throw new Error("Error to connect to database");
  }
};

/* Exportamos nuestra función para su utilización */
module.exports = {
  dbConnection,
};
