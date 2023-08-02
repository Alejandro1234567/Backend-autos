const express = require("express");
const router = express.Router();
const autosController = require("../controllers/autos.controllers");

// Ruta para obtener todos los autos
router.get("/autos", autosController.obtenerAutos);

// Ruta para obtener un auto por su ID
router.get("/autos/:id", autosController.obtenerAutoPorId);

// Ruta para crear un nuevo auto
router.post("/autos", autosController.crearAuto);

// Ruta para actualizar un auto existente
router.put("/autos/:id", autosController.actualizarAuto);

// Ruta para eliminar un auto existente
router.delete("/autos/:id", autosController.eliminarAuto);

module.exports = router;

