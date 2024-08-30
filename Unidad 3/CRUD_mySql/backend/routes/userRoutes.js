// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

// Ruta para obtener todos los usuarios
router.get('/', userController.getAllUsers);

// Crear un nuevo usuario (POST)
router.post('/', userController.createUser);

// Obtener un solo usuario por su ID (GET)
router.get('/:id', userController.getUserById);

// eliminar delete
router.delete('/:id', userController.deleteUser);

// actualizar
router.put('/', userController.updateUser);

module.exports = router;
