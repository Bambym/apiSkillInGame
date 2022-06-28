const { DataTypes } = require("sequelize");
const sequelize = require("../DbConnection");
const Jeu_Console = require("./Games_Consoles");
const Console = require("./Consoles");

const Game = sequelize.define( "games", {
  ID_jeu: {
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
  Image: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  
},{tableName:"games"},{freezeTableName:true});
Game.removeAttribute("updatedAt")

// Game.belongsToMany(Console, {
//   through: "games_consoles",
//   foreignKey: "FK_jeu",
//   sourceKey:"ID_jeu",
  
// });
// Console.belongsToMany(Game, {
//   through: "games_consoles",
//   foreignKey: "FK_console",
//   sourceKey:"ID_console",
  
// });

module.exports = Game;
