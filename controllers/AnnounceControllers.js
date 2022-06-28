const Annonce = require("../models/Annonces");
const User = require("../models/Users");
const Game = require("../models/Games");
const Game_Console = require("../models/Games_Consoles");
const Console = require("../models/Consoles");


exports.getAllAnnounces = async (req, res) => {
  try {
   
    const announces = await Annonce.findAll({ 
      include:  [
        {
          model: Game,
        }, 
        {
          model: Console,
       
        },
        {
          model: User,
       
        },

      
    ],});
    res.send(announces);
  } catch (err) {
    console.log(err);
  }
};
exports.getAllAnnouncesOneGame = async (req, res) => {
  try {
    const announces = await Annonce.findAll({
      include: [User],
      where: { ID_jeu: req.params.jeuId },
    });
    res.send(announces);
  } catch (err) {
    console.log(err);
  }
};
exports.getAllAnnouncesOnePlatform = async (req, res) => {
  try {
    const announces = await Annonce.findAll({
      where: { ID_console: req.params.consoleId },
      include: [{model:Game},{model:User},{model:Console}]
     
    });
    res.send(announces);
  } catch (err) {
    console.log(err);
  }
};

exports.getAllAnnouncesFromUser = async (req, res) => {
  try {
    const announces = await Annonce.findAll({
      include: [{model: User }],
      where:{ ID_user: req.params.userId },
      include : [
        {
          model: Game,
        }, 
        {
          model: Console,
       
        }
      
    ],
    
     
    });
    res.send(announces);
  } catch (err) {
    console.log(err);
  }
};
exports.deleteOneAnnounce = async (req, res) =>{
  try {
    const announces = await Annonce.destroy({where:{ID_annonce:req.params.announceId}})
   if(announces === 0 ) return res.status(404).json({msg:"not found"})
   res.status(201).json({msg:"delete réussi"})
   
  } catch (error) {
    res.status(500).json(error)
    
  }
};
exports.createAnnounce = async (req, res) => {
  try {
      console.log(req.body)
      const announce = await Annonce.create({...req.body});
      res.status(201).json({msg:"announce create"})
  } catch (err) {
    console.log(err);
  }
};