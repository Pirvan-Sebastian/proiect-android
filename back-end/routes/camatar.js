const { camatarController } = require("../controllers");
const express = require("express");
const router = express.Router();

router.post("/createCamatar", camatarController.createCamatar);
router.get("/getAllCamatari", camatarController.getAllCamatari);

module.exports = router;