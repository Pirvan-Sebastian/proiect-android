const { cardController } = require("../controllers");
const express = require('express');
const router = express.Router();

router.post("/createCard", cardController.createCard);
router.get("/getCard/:id", cardController.getCardById);
router.get("/getAllCards", cardController.getAllCards);
router.put("/updateCard/:id", cardController.updateCard);
router.delete("/deleteCard/:id", cardController.deleteCard);

module.exports = router;