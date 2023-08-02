const autos = require("../model/autos");

// Controlador para obtener todos los autos
const obtenerAutos = async (req, res) => {
  try {
    const autosList = await autos.find();
    res.json(autosList);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los autos" });
  }
};

// Controlador para obtener un auto por su ID
const obtenerAutoPorId = async (req, res) => {
  const { id } = req.params;
  try {
    const auto = await autos.findById(id);
    if (!auto) {
      return res.status(404).json({ error: "Auto no encontrado" });
    }
    res.json(auto);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el auto" });
  }
};

// Controlador para crear un nuevo auto
const crearAuto = async (req, res) => {
  const { nombre, descripcion, precio } = req.body;
  try {
    const auto = await autos.create({ nombre, descripcion, precio });
    res.status(201).json(auto);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el auto" });
  }
};

// Controlador para actualizar un auto existente
const actualizarAuto = async (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  try {
    const auto = await autos.findByIdAndUpdate(
      id,
      { nombre, descripcion },
      { new: true }
    );
    if (!auto) {
      return res.status(404).json({ error: "Auto no encontrado" });
    }
    res.json(auto);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el auto" });
  }
};

// Controlador para eliminar un auto existente
const eliminarAuto = async (req, res) => {
  const { id } = req.params;
  try {
    const auto = await autos.findByIdAndRemove(id);
    if (!auto) {
      return res.status(404).json({ error: "Auto no encontrado" });
    }
    res.json({ mensaje: "Auto eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el auto" });
  }
};

module.exports = {
  obtenerAutos,
  obtenerAutoPorId,
  crearAuto,
  actualizarAuto,
  eliminarAuto,
};

