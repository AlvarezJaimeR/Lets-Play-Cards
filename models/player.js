const mongoose = require("mongoose");

const Joi = require("joi");


const playerSchema = new mongoose.Schema({
    score: {type: Number, require: true, integer: true},
    users: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }]
});

function validatePlayer(player) {
  const schema = Joi.object({
    score: Joi.number().required()
  });
  return schema.validate(player);
}

const Player = mongoose.model("Player", playerSchema);

exports.Player = Player;
exports.validatePlayer = validatePlayer;
exports.playerSchema = playerSchema;
