const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chickenSchema = new Schema(
  {
    username: { type: String, required: true },
    tag: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      required: true,
    },
    initWeight: {
      type: Number,
      required: true,
    },
    finalWeight: {
      type: Number,
      required: true,
    },
    date: { type: Date, required: true },
    calorieAte: { type: Number, required: true },
    qrCode: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Chicken = mongoose.model("Chicken", chickenSchema);

module.exports = Chicken;
