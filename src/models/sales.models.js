const connection = require('./db/connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sls.id AS saleId, sls.date, slp.product_id AS productId, slp.quantity
    FROM StoreManager.sales AS sls
    INNER JOIN StoreManager.sales_products AS slp
    on sls.id = slp.sale_id
    ORDER BY sls.id, slp.product_id`,
  );

  return result;
};

const getSaleById = async (id) => {
  const [result] = await connection.execute(
    `SELECT sls.date, slp.product_id AS productId, slp.quantity
    FROM StoreManager.sales AS sls
    INNER JOIN StoreManager.sales_products AS slp
    on sls.id = slp.sale_id
    WHERE sls.id = ${id}
    ORDER BY sls.id, slp.product_id`,
  );

  return result;
};

module.exports = {
  getAllSales,
  getSaleById,
};