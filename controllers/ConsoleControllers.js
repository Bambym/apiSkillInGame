const Annonce = require("../models/Annonces");
const Console = require("../models/Consoles");
const Game = require("../models/Games");
const Game_Console = require("../models/Games_Consoles");
const Users = require("../models/Users")

exports.getAllConsoles = async (req, res) => {
  try {
    const consoles = await Console.findAll();
    res.send(consoles);
  } catch (err) {
    console.log(err);
  }
};
// exports.getAllGamesFromAConsole = async (req, res) => {
//   try {
//     // const consoles = await Console.findAll({
//     //   include: [
//     //     {
//     //       model: Game,
//     //       through: {
//     //         model: Game_Console,
//     //         where:{FK_console:req.params.consoleId},
//     //     },include:[
//     //       {
//     //         model:Annonce
//     //       }
//     //     ]
        
//     //     },
//     //   ],
//     // });
//     // res.send(consoles);
//     // const consoles = await Console.findAll({
//     //    through: {
//     //         model: Game_Console,
//     //         where:{FK_console:req.params.consoleId},
//     //       },
//     //         include: [
//     //     {
//     //       model: Game,
//     //      include:{
//     //         model:Annonce
//     //       }
//     //     },
          
//     //     ]
        
      
//     // });
//     // res.send(consoles);
//     const consoles = await Console.findByPk(req.params.consoleId,{
//       include: [
//         {
//           model: Game,
//           through: {
//                model: Game_Console,
//               //  where:{FK_console:req.params.consoleId},
//              },
//           include:{
//             model:Annonce, 
//             include:{
//             model:Users
//           }
//           },
         
//         },
        
//       ]
      
      
//    });
//    res.send(consoles);
//   } catch (err) {
//     console.log(err);
//   }
// };
