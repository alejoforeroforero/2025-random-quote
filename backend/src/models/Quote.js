import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database.js';

const Quote = sequelize.define('Quote', {
  text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

export default Quote;