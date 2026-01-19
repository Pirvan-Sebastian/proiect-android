const orezarModel = require("./orezar");
const camatarModel = require("./camatar");

camatarModel.belongsToMany(orezarModel, { through: "datorieModel" });
orezarModel.belongsToMany(camatarModel, { through: "datorieModel" });

module.exports = {
    orezarModel,
    camatarModel,
}