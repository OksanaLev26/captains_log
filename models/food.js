const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Food name is required"] },
    mealTime: { type: String, required: true },
    mealIsDelicious: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;
