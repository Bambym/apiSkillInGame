const { DataTypes } = require("sequelize");
const sequelize = require("../DbConnection");


const Relation = sequelize.define("relation", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_demandeur: {
    type: DataTypes.STRING,
    allowNull: false,
   
  },
  id_receveur: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  statut:{
    type: DataTypes.INTEGER,
    defaultValue : 1,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt:{
    type: DataTypes.DATE,
  },
  
}, {
  tableName: 'relation'
})


module.exports = Relation ;