'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Wine, Review }) {
      // define association here
      this.belongsTo(User, {
        through: 'ConnectRateUsers',
        foreignKey: 'ratingId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      this.belongsToMany(Wine, {
        through: 'ConnectRateWines',
        foreignKey: 'ratingId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
      this.hasOne(Review, {
        foreignKey: 'ratingId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Rating.init({
    score: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Rating',
  });
  return Rating;
};
