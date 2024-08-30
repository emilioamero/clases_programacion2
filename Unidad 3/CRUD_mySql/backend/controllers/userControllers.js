/* Controles */

// controllers/userController.js
const userModel = require('../models/userModels');

// Ejemplo de método para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener usuarios.' });
  }
};

// Crear un nuevo usuario (POST)
const createUser = async (req, res) => {
  try {
    const { nombre, email } = req.body;
    await userModel.createUser(nombre, email);
    res.status(201).json({ message: 'Usuario creado exitosamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el usuario.' });
  }
};

// Crear un nuevo usuario (POST)
const updateUser = async (req, res) => {
  try {
    const { nombre, email, id  } = req.body;
    await userModel.updateUser(nombre, email, id );
    res.status(201).json({ message: 'Usuario Actualizado exitosamente.' });
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar el usuario.' });
  }
};


// Obtener un solo usuario por su ID (GET)
const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.getUserById(userId);
    if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener el usuario.' });
  }
};


const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.deleteUser(userId);

    return res.status(201).json({ message: 'Usuario Eliminado.' + req.params.id});
/*     if (!user) {
      return res.status(404).json({ message: 'Usuario no encontrado.' });
    }
    res.json(user); */
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el usuario. 52' });
  }
};


module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  deleteUser,
  updateUser
  // Otros métodos para crear, actualizar o eliminar usuarios, por ejemplo.
};
