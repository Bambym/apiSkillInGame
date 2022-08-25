const { DataTypes } = require("sequelize");
const sequelize = require("../DbConnection");
const User = require("./Users");
const Jeu = require("./Games");
const Console = require("./Consoles");

const Annonce = sequelize.define("annonces", {
  ID_annonce: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Title: {
    type: DataTypes.STRING,
  },
  Description: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt:{
    type: DataTypes.DATE,
  },
  ID_user: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "User",
      key: "ID_user",
    },
  },
  ID_jeu: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: "Jeu",
      key: "ID_jeu",
    },
  },
  ID_console: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "Console",
      key: "ID_console",
    },
  },
});



Annonce.belongsTo(Jeu,{foreignKey:"ID_jeu",sourceKey:"ID_jeu"})
Jeu.hasMany(Annonce,{foreignKey:"ID_jeu",targetKey:"ID_jeu"})
Console.hasMany(Annonce,{foreignKey:"ID_console",targetKey:"ID_console"})
Annonce.belongsTo(Console,{foreignKey:"ID_console",sourceKey:"ID_console"})
module.exports = Annonce;
