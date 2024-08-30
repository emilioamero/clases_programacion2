/* Modelo - Base de datos */
const db = require('../database');


const getVehiculos = async () => {
    try {
      const [rows] = await db.query('SELECT  * from vehiculos');
      return rows;
    } catch (err) {
      throw err;
    }
  };



module.exports = {
    getVehiculos
    };
  