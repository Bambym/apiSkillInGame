const router = require("express").Router();
const {getAllAnnounces,getAllAnnouncesOneGame,getAllAnnouncesOnePlatform,getAllAnnouncesFromUser,deleteOneAnnounce, createAnnounce} = require("../controllers/AnnounceControllers");

router.get("/", getAllAnnounces);
router.get("/jeu/:jeuId", getAllAnnouncesOneGame);
router.get("/console/:consoleId", getAllAnnouncesOnePlatform);
router.get("/user/:userId", getAllAnnouncesFromUser);
router.delete("/:announceId", deleteOneAnnounce);
router.post("/addAnnounce",createAnnounce)

module.exports = router;
