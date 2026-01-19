const cardModel = require("./card");
const camatarModel = require("./camatar");

camatarModel.belongsToMany(cardModel, { through: "datorieModel" });
cardModel.belongsToMany(camatarModel, { through: "datorieModel" });

module.exports = {
    cardModel,
    camatarModel,
}