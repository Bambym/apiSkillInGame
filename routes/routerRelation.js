const router = require("express").Router()
const {getFriendsUser, getNotFriendsUser, updateRelation, getAllFriendsUser, setRelation} = require ("../controllers/RelationControllers")


router.get('/:userId',getFriendsUser)
router.get('/:userId/getNotFriendsUser',getNotFriendsUser)
router.get('/:userId/getAllFriendsUser',getAllFriendsUser)
router.put('/update/:relationId',updateRelation)
router.post('/createRelation',setRelation)
module.exports = router