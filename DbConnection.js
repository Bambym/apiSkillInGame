const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('db_skill_in_game', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    
},{ define: { freezeTableName: true } });



module.exports = sequelize;