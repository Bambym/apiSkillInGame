const User = require("../models/Users");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
     
    });
    res.send(users);
  } catch (err) {
    console.log(err);
  }
};
exports.getOneUser = async (req, res) => {
  try {
    //   console.log(req)
    const user = await User.findAll({
        // attributes: ["ID_user", "username", "email", "password"],
        where: {
        ID_user: req.params.userId,
      },
    });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};
exports.setUser = async (req, res) => {
  try {
      console.log(req.body)
      const user = await User.create({
        ID_user:req.body.ID_user , 
        email : req.body.email
      })
      
      res.status(201).json({msg : "created ressources"})
     
  } catch (err) {
    console.log(err);
    res.status(400).send(err)
  }
};
exports.updateUser = async(req, res) => {
  try {
    const user = await User.findByPk(req.params.userId)
    user.userName = req.body.username
    user.save()
    
    res.status(201).json({msg : "Updated ressources"})
    
  }catch(err){
    console.log(err)
  }
};