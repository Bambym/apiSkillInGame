const router = require("express").Router()
const {getAllGames} = require ("../controllers/GameControllers")

router.get('/',getAllGames)




module.exports = router