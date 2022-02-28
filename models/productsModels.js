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
  
  if (productNames.includes(name)) return null;
  // const product = await getById(id);
  // if (product) return null;
  
  const SQL = 'INSERT StoreManager.products (name, quantity) VALUES (?, ?);';

  const [result] = await connection.execute(SQL, [name, quantity]);

  return {
    id: result.insertId,
    name,
    quantity,
  };
};

const update = async (name, quantity, id) => {
  const idSQL = 'SELECT id FROM StoreManager.products;';

  const [checkIdSQL] = await connection.execute(idSQL);

  const productIds = checkIdSQL.map((product) => product.id);
  
  if (productIds.includes(Number(id)) === false) return null;
  // const product = await getById(id);
  // if (!product) return null;
  
  const SQL = (
    `UPDATE StoreManager.products
      SET name = ?, quantity = ?
    WHERE id = ?;`);

  const [result] = await connection.execute(SQL, [name, quantity, id]);

  return result;
};

const exclude = async (id) => {  
  const idSQL = 'SELECT id FROM StoreManager.products;';

  const [checkIdSQL] = await connection.execute(idSQL);

  const productIds = checkIdSQL.map((product) => product.id);
  
  if (productIds.includes(Number(id)) === false) return null;
  // const product = await getById(id);
  // if (!product) return null;
  
  const SQL = 'DELETE FROM StoreManager.products WHERE id = ?';

  const [result] = await connection.execute(SQL, [id]);

  return result;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  exclude,
};
