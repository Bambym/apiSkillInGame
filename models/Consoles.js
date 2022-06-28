const { DataTypes } = require("sequelize");
const sequelize = require("../DbConnection");
const Game_Console = require("./Games_Consoles");
const Annonce = require("./Annonces")

const Console = sequelize.define("Consoles", {
  ID_console: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  Name: {
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
});

Console.removeAttribute('updatedAt')

// Console.associate = (models) => {
//   Console.belongsToMany(models.Jeu, {
//     through: "Jeu_Console",
//     sourceKey: "ID_console",
//     targetKey: "ID_jeu",
//     onDelete: "cascade",
//   });
// };

module.exports= Console