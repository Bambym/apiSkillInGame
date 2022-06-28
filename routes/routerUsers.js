const router = require("express").Router()
const {getAllUsers,getOneUser, setUser, updateUser} = require("../controllers/UserControllers")


router.get('/',getAllUsers)
router.get('/:userId',getOneUser)
router.post('/signUp',setUser)
router.put('/update/:userId',updateUser)

module.exports = router