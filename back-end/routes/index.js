const express = require("express");
const router = express.Router();
const orezarRouter = require("./orezar");
const camatarRouter = require("./camatar");

router.use("/orezar", orezarRouter);
router.use("/camatar", camatarRouter);

module.exports = router;