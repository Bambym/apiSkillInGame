const Relation = require ("../models/Relation")

const Sequelize = require('sequelize');
const Op = Sequelize.Op
const {UniqueConstraintError} = require('sequelize')

exports.getFriendsUser = async (req ,res) => {
    try {
        const friends = await Relation.findAll({
          where :{
            [Op.and] : [{statut : 2}],
            [Op.or] :[{id_demandeur : req.params.userId},{id_receveur:req.params.userId}]
            
        
          }   
        })
        res.send(friends);
        console.log(friends)
    } catch (error) {
        res.status(500).json(error)
    }

}
exports.getNotFriendsUser = async (req ,res) => {
    try {
        const friends = await Relation.findAll({
          where :{
            [Op.and] : [{statut : 1}],
            [Op.or] :[{id_demandeur : req.params.userId},{id_receveur:req.params.userId}]
          
          }
        })
        res.send(friends);
        console.log(friends)
    } catch (error) {
        res.status(500).json(error)
    }

}
exports.getAllFriendsUser = async (req ,res) => {
  try {
      const friends = await Relation.findAll({
        where :{
          
          id_demandeur : req.params.userId
          
      
        }   
      })
      res.send(friends);
      console.log(friends)
  } catch (error) {
      res.status(500).json(error)
  }

}

exports.updateRelation = async(req, res) => {
  try {
    const relation = await Relation.findByPk(req.params.relationId)
    relation.statut = req.body.statut
    relation.save()
    
    res.status(201).json({msg : "Updated ressources"})
    
  }catch(err){
    console.log(err)
  }
};
exports.setRelation = async (req, res) => {
  try {
      console.log(req.body)
      const relation = await Relation.create({...req.body});
      res.status(201).json({msg : "created ressources"})
  } catch (errors) {
    console.log(errors.message);
    if(errors instanceof UniqueConstraintError){
      return res.status(400).json({message: errors.message, data : errors })
              
    }
   
  }
};