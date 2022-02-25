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

module.exports = {
  getAll,
  getById,
};
