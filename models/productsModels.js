require('dotenv').config();

const connection = require('./connection');

const getAll = async () => {
  const SQL = (
    `SELECT * FROM StoreManager.products AS Product
    ORDER BY Product.id;`);
  
  const [result] = await connection.execute(SQL);

  console.log(result);

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

const create = async (name, quantity) => {
  const NameSQL = 'SELECT name FROM StoreManager.products;';

  const [checkNameSQL] = await connection.execute(NameSQL);

  const productNames = checkNameSQL.map((product) => product.name);
  
  if (productNames.includes(name)) return false;
  
  const SQL = 'INSERT StoreManager.products (name, quantity) VALUES (?, ?);';

  const [result] = await connection.execute(SQL, [name, quantity]);

  return {
    id: result.insertId,
    name,
    quantity,
  };
};

const update = async (params, body) => {
  const { id } = params;
  const { name, quantity } = body;
  const NameSQL = 'SELECT name FROM StoreManager.products;';

  const [checkNameSQL] = await connection.execute(NameSQL);

  const productNames = checkNameSQL.map((product) => product.name);

  console.log(productNames);
  
  if (productNames.includes(name) === false) return false;
  
  const SQL = (
    `UPDATE StoreManager.products
      SET name = ?, quantity = ?
    WHERE id = ?;`);

  const result = await connection.execute(SQL, [name, quantity, id]);

  console.log(result);

  return result;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
};
