const { orezarModel } = require("../models");

const orezarController = {
    createOrezar: async (req, res) => {
        try {
            const orezar = {
                nume: req.body.nume,
                prenume: req.body.prenume,
                numarCopii: req.body.numarCopii,
                orezCules: req.body.orezCules,
            }
            const orezarCreat = await orezarModel.create(orezar);
            return res.status(200).json(orezarCreat);
        } catch (err) {
            console.log(err);
            return res.status(500).send("Server error");
        }
    },
    getAllOrezari: async (req, res) => {
        try {
            const orezari = await orezarModel.findAll();
            if (orezari.length <= 0) {
                return res.status(404).send("Nu exista orezari");
            }
            return res.status(200).json(orezari);
        } catch (err) {
            console.log(err);
            return res.status(500).send("Server error");
        }
    },
    getOrezarById: async (req, res) => {
        try {
            const orezarId = req.params.id;
            const orezarCautat = await orezarModel.findByPk(orezarId);
            if (!orezarCautat) {
                return res.status(404).send(`Nu exista orezarul cu id-ul ${orezarId}`);
            }
            return res.status(200).json(orezarCautat);
        } catch (err) {
            console.log(err);
            return res.status(500).send("Server error");
        }
    },
    updateOrezar: async (req, res) => {
        try {
            const orezarId = req.params.id;
            const orezarCautat = await orezarModel.findByPk(orezarId);
            if (!orezarCautat) {
                return res.status(404).send(`Nu exista orezarul cu id-ul ${orezarId}`);
            }
            const noulOrezar = {
                nume: req.body.nume,
                prenume: req.body.prenume,
                numarCopii: req.body.numarCopii,
                orezCules: req.body.orezCules,
            };
            await orezarModel.update(noulOrezar, {
                where: {
                    id: orezarId,
                }
            });
            return res.status(200).json(noulOrezar);
        } catch (err) {
            console.log(err);
            return res.status(500).send("Server error");
        }
    },
    deleteOrezar: async (req, res) => {
        try {
            const orezarId = req.params.id;
            if(!await orezarModel.findByPk(orezarId)) {
                return res.status(404).send(`Nu exista orezarul cu id-ul ${orezarId}`);
            }
            await orezarModel.destroy({
                where: {
                    id: orezarId,
                }
            });
            return res.status(200).send(`Orezarul cu id-il ${orezarId} a fost sters cu succes`);
        } catch (err) {
            console.log(err);
            return res.status(500).send("Server error");
        }
    }
}

module.exports = orezarController;