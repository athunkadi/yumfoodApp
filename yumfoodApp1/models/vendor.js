'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendor.hasMany(models.Menu, { foreignKey: 'VendorId'});
    }
  };
  Vendor.init({
    name: DataTypes.STRING,
    logo: DataTypes.STRING,
    address: DataTypes.STRING,
    tlp: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vendor',
  });
  return Vendor;
};