const productController = require('../controllers').products;
const userController = require('../controllers').users;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'PRODUCTS API!',
  }));

  app.get('/api/product-list', productController.list);

  app.post('/api/add-user', userController.addUser);
  app.post('/api/login', userController.login);
  app.get('/api/logout', userController.logout);
  app.get('/api/favorites/:id', userController.getUserFav);
  app.post('/api/save-fav', productController.saveFavoritePastry);
  app.post('/api/remove-fav', productController.removeFavoritePastry);
  app.get('/api/user-fav/:id', productController.getUserFavorites);
  app.get('/api/product/:id', productController.getProductDetails);
};