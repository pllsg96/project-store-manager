const connection = require('./db/connection');

const getAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id',
  );

  return result;
};

const getProductById = async (id) => {
  const [[result]] = await connection.execute(
    `SELECT * FROM StoreManager.products WHERE id = ${id} ORDER BY id`,
  );

  return result;
};

const insertProduct = async (name) => {
  const [{ insertId }] = await connection
    .execute('INSERT INTO StoreManager.products (name) VALUES (?)', [name]);
  
  return insertId;
};

const updateProduct = async (id, name) => {
  await connection
    .execute('UPDATE StoreManager.products SET name = (?) WHERE id = (?)', [name, id]);
};

const deleteProduct = async (id) => {
  await connection
    .execute('DELETE FROM StoreManager.products WHERE id = (?)', [id]);
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
};