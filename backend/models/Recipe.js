const mongoose = require("mongoose");

const NutrientsSchema = new mongoose.Schema({
  calories: String,
  carbohydrateContent: String,
  cholesterolContent: String,
  fiberContent: String,
  proteinContent: String,
  saturatedFatContent: String,
  sodiumContent: String,
  sugarContent: String,
  fatContent: String,
  unsaturatedFatContent: String,
});

const RecipeSchema = new mongoose.Schema({
  Contient: String,
  Country_State: String,
  cuisine: String,
  title: String,
  URL: String,
  rating: Number,
  total_time: Number,
  prep_time: Number,
  cook_time: Number,
  description: String,
  ingredients: [String],
  instructions: [String],
  nutrients: NutrientsSchema,
  serves: String,
});

module.exports = mongoose.model("Recipe", RecipeSchema);
