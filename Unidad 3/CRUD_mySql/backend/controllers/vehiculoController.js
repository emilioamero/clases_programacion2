

// controllers/userController.js
const vehiculoModels = require('../models/vehiculoModels');


const getAllVehiculos = async (req, res) => {
    try {
      const vehiculo = await vehiculoModels.getVehiculos();
      res.json(vehiculo);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener Vehiculos.' });
    }
  };
  

  module.exports = {
    getAllVehiculos
    // Otros métodos para crear, actualizar o eliminar usuarios, por ejemplo.
  };
  