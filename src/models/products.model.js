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

module.exports = {
  getAll,
  getById,
};