require('dotenv').config();

const connection = require('./connection');

const getAll = async () => {
  const SQL = (
    `SELECT 
      SalePr.sale_id AS saleId,
      Sale.date AS date,
      SalePr.product_id AS productId,
      SalePr.quantity AS quantity
    FROM
      StoreManager.sales AS Sale
        JOIN
      StoreManager.sales_products AS SalePr ON SalePr.sale_id = Sale.id
    ORDER BY saleId, productId;`);
    
  const [result] = await connection.execute(SQL);

  return result;
};

const getById = async (id) => {
  const SQL = (
    `SELECT 
      Sale.date AS date,
      SalePr.product_id AS productId,
      SalePr.quantity AS quantity
    FROM
      StoreManager.sales AS Sale
        JOIN
      StoreManager.sales_products AS SalePr ON SalePr.sale_id = Sale.id
    WHERE
      SalePr.sale_id = ?
    ORDER BY Sale.id, productId;`);

  const [result] = await connection.execute(SQL, [id]);
  
  if (!result.length) return null;

  return result;
};

const createSale = async () => {
  const SQL = 'INSERT INTO StoreManager.sales (date) VALUES(NOW());';

  const [result] = await connection.execute(SQL);

  return result;
};

const salesRecord = async (productId, quantity, saleId) => {
  const SQL = (
    'INSERT StoreManager.sales_products (sale_id, product_id, quantity) VALUES (?, ?, ?);'
    );

  const [result] = await connection.execute(SQL, [saleId, productId, quantity]);

  return result;
};

const updateSale = async (saleId, productId, quantity) => {
  const SQL = (
    `UPDATE StoreManager.sales_products
      SET sale_id= ?, product_id = ?, quantity = ?
    WHERE sale_id = ?;`);

    const [result] = await connection.execute(SQL, [saleId, productId, quantity, saleId]);

    return result;
};

module.exports = {
  getAll,
  getById,
  createSale,
  salesRecord,
  updateSale,
};
