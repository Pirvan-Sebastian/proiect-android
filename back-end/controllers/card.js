const { cardModel } = require("../models");

const cardController = {
    createCard: async (req, res) => {
        try {
            const card = {
                nume: req.body.nume,
                prenume: req.body.prenume,
                numarCopii: req.body.numarCopii,
                orezCules: req.body.orezCules,
            }
            const cardCreat = await cardModel.create(card);
            return res.status(200).json(cardCreat);
        } catch (err) {
            console.log(err);
            return res.status(500).send("Server error");
        }
    },
    getAllCards: async (req, res) => {
        try {
            const cards = await cardModel.findAll();
            if (cards.length <= 0) {
                return res.status(404).send("No cards exist");
            }
            return res.status(200).json(cards);
        } catch (err) {
            console.log(err);
            return res.status(500).send("Server error");
        }
    },
    getCardById: async (req, res) => {
        try {
            const cardId = req.params.id;
            const cardCautat = await cardModel.findByPk(cardId);
            if (!cardCautat) {
                return res.status(404).send(`There is no card with the ID: ${cardId}`);
            }
            return res.status(200).json(cardCautat);
        } catch (err) {
            console.log(err);
            return res.status(500).send("Server error");
        }
    },
    updateCard: async (req, res) => {
        try {
            const cardId = req.params.id;
            const cardCautat = await cardModel.findByPk(cardId);
            if (!cardCautat) {
                return res.status(404).send(`There is no card with the ID: ${cardId}`);
            }
            const noulCard = {
                nume: req.body.nume,
                prenume: req.body.prenume,
                numarCopii: req.body.numarCopii,
                orezCules: req.body.orezCules,
            };
            await cardModel.update(noulCard, {
                where: {
                    id: cardId,
                }
            });
            return res.status(200).json(noulCard);
        } catch (err) {
            console.log(err);
            return res.status(500).send("Server error");
        }
    },
    deleteCard: async (req, res) => {
        try {
            const cardId = req.params.id;
            if(!await cardModel.findByPk(cardId)) {
                return res.status(404).send(`There is no card with the ID: ${cardId}`);
            }
            await cardModel.destroy({
                where: {
                    id: cardId,
                }
            });
            return res.status(200).send(`Card with ID:${cardId} deleted`);
        } catch (err) {
            console.log(err);
            return res.status(500).send("Server error");
        }
    }
}

module.exports = cardController;