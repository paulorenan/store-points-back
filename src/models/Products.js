const Product = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, { tableName: 'products' });

  return product;
};

module.exports = Product;