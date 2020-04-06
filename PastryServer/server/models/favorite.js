module.exports = (sequelize, DataTypes) => {
    const Favorite = sequelize.define('Favorite', {
        productId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Products',
              key: 'id'
            },
            allowNull: false
          },
          userId: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Users',
              key: 'id'
            },
            allowNull: false
          }
    });
  
    
    return Favorite;
  };