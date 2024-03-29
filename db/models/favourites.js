'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favourites extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Favourites.init({
    userId: DataTypes.INTEGER,
    wineId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Favourites',
  });
  return Favourites;
};
