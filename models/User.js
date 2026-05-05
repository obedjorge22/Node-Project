const { Sequelize, DataTypes } = require("sequelize");
const connection = require("../database/database"); 

const User = connection.define("User", {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    // allowNull defaults to true
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

User.sync()
  .then(() => {
    console.log("User table created successfully.");
  })
  .catch((error) => {
    console.error("Error creating User table:", error);
  });
module.exports = User;