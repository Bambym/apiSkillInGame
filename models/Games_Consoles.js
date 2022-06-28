const { DataTypes } = require('sequelize');
const sequelize = require('../DbConnection')


const Game_Console = sequelize.define("games_consoles", {
    FK_jeu: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    FK_console: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
     
  },{tableName:"games_consoles"});
  
  Game_Console.removeAttribute('Id'),
  Game_Console.removeAttribute('createdAt'),
  Game_Console.removeAttribute('updatedAt'),





module.exports= Game_Console


