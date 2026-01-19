const { camatarModel, orezarModel, datorieModel } = require("../models");

const camatarController = {
    createCamatar: async (req, res) => {
        try {
            const camatar = {
                porecla: req.body.porecla,
                diametruBrat: req.body.diametruBrat,
                valuta: req.body.valuta,
            };
            const camatarCreat = await camatarModel.create(camatar);
            return res.status(200).send(camatarCreat);
        } catch (err) {
            console.log(err);
            return res.status(500).send("Server erorr");
        }
    },
    getAllCamatari: async (req, res) => {
        try {
            const camatari = await camatarModel.findAll({
                include: {
                    model: orezarModel,
                    through: { attributes: [] },
                    attributes: ["nume", "prenume"],
                },
            });
            if (camatari.length <= 0) {
                return res.status(404).send("Nu exista camatari");
            };
            return res.status(200).json(camatari);
        } catch (err) {
            console.log(err);
            return res.status(500).send("Eroare");
        }
    }
}

module.exports = camatarController;