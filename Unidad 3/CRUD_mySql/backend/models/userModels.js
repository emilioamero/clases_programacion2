/* Modelo - Base de datos */
const db = require('../database');

// Ejemplo de método para obtener todos los usuarios desde la base de datos
const getAllUsers = async () => {
  try {
    const [rows] = await db.query('SELECT * FROM usuario order by id desc');
    return rows;
  } catch (err) {
    throw err;
  }
};

const getUserById = async (userId) => {
  try {
    const query = 'SELECT * FROM usuario WHERE id = ?';
    const [rows] = await db.query(query, [userId]);
    return rows[0];
  } catch (err) {
    throw err;
  }
};


// Crear un nuevo usuario en la base de datos (INSERT)
const createUser = async (nombre, email) => {
  try {
    const query = 'INSERT INTO usuario (nombre, email) VALUES (?, ?)';
    await db.query(query, [nombre, email]);
  } catch (err) {
    throw err;
  }
};


//actualizar

const updateUser = async (nombre, email, id) => {
  try {
    const query = 'UPDATE usuario set nombre= ?, email = ? where id = ?';
    await db.query(query, [nombre, email, id]);
  } catch (err) {
    throw err;
  }
};

//delete
const deleteUser = async (id) => {
   try {
    const query = 'DELETE FROM usuario WHERE id = ?';
    await db.query(query, [id]);
  } catch (err) {
    throw err;
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
