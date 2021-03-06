module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type:DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.TEXT,
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false
    },
    image: DataTypes.BLOB
  });

  Product.associate = function(models) {
    models.Product.belongsToMany(models.User, {as: 'Pastry', through: 'Favorites'});
  };

  return Product;
};