const connection = require('./db/connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products ORDER BY id',
  );

  return result;
};

const getById = async (id) => {
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

module.exports = {
  getAll,
  getById,
  insertProduct,
  updateProduct,
};