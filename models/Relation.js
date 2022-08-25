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
    unique:true,

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
  
}, 
{
  indexes:[
    {
      unique:true,
      fields:["id_demandeur","id_receveur"],
      
    }
  ],
  tableName: 'relation'
  
  
}

);




module.exports = Relation ;
