const router = require("express").Router()

const {getAllConsoles, getAllGamesFromAConsole} = require ("../controllers/ConsoleControllers")

router.get('/',getAllConsoles)
// router.get('/:consoleId',getAllGamesFromAConsole)







module.exports = router