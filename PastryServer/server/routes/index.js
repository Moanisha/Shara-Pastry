const productController = require('../controllers').products;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'PRODUCTS API!',
  }));

  app.get('/api/product-list', productController.list);
};