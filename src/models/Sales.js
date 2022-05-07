const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sale', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      },
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      }
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, { tableName: 'sales' });

  sale.associate = (models) => {
    sale.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });
    sale.belongsTo(models.Product, {
      foreignKey: 'product_id',
      as: 'product'
    });
  }

  return sale;
}
module.exports = Sale;