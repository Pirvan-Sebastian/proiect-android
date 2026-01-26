const express = require("express");
const router = express.Router();
const cardRouter = require("./card");
// const camatarRouter = require("./camatar");

router.use("/card", cardRouter);
// router.use("/camatar", camatarRouter);

module.exports = router;