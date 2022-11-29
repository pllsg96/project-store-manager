const validateProductId = (req, res, next) => {
  const products = req.body;

  const everyProductHasId = products.every(({ productId }) => productId !== '');

  if (!everyProductHasId) return res.status(400).json({ message: '"productId" is required' });
  
  next();
};

module.exports = validateProductId;