const { orezarController } = require("../controllers");
const express = require('express');
const router = express.Router();

router.post("/createOrezar", orezarController.createOrezar);
router.get("/getOrezar/:id", orezarController.getOrezarById);
router.get("/getAllOrezari", orezarController.getAllOrezari);
router.put("/updateOrezar/:id", orezarController.updateOrezar);
router.delete("/deleteOrezar/:id", orezarController.deleteOrezar);

module.exports = router;