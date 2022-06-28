const Game = require('../models/Games');

exports.getAllGames = async (req, res) => {
    try {
      const games = await Game.findAll();
      res.send(games);
    } catch (err) {
      console.log(err);
    }
  };

