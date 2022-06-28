const { DataTypes } = require('sequelize');
const sequelize = require('../DbConnection')
const Annonce = require("./Annonces")


const User = sequelize.define('User', {
  
  ID_user: {
    type: DataTypes.STRING,
    primaryKey:true,
    allowNull: false
  },
  userName: {
    type: DataTypes.STRING
    
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    
  },
  updatedAt: {
    type: DataTypes.DATE,
   
  },
  
 })
 
  User.hasMany(Annonce,{foreignKey:"ID_user",targetKey:"ID_user"})
  Annonce.belongsTo(User,{foreignKey:"ID_user",sourceKey:"ID_user"})
  // User.associate = (models) => {
  //   User.hasMany(models.Annonce,{
      
  //     foreignKey: "ID_user",
  //     targetKey: "ID_user",
      
  //   } 
      // {as:'Annonce',foreignKey:"ID_user"}
  //   );
  // };
module.exports= User ; 