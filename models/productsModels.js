require('dotenv').config();

const connection = require('./connection');

const getAll = async () => {
  const SQL = (
    `SELECT * FROM StoreManager.products AS Product
    ORDER BY Product.id;`);
  const [result] = await connection.execute(SQL);

  return result;
};

const getById = async (id) => {
  const SQL = (
    `SELECT * FROM StoreManager.products AS Product
      WHERE Product.id = ?
    ORDER BY Product.id;`);

  const [result] = await connection.execute(SQL, [id]);
  
  if (!result.length) return null;
  return result[0];
};

module.exports = {
  getAll,
  getById,
};
