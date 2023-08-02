const { Schema, model } = require("mongoose");

const autosSchema = new Schema({
  nombre: String,
  descripcion: {
    type: String,
    require: true,
  },
  precio: Number,
  
});

module.exports = model("autos", autosSchema);
