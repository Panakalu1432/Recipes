import mongoose from 'mongoose';

const recipeSchema = new mongoose.Schema({
  Contient: String,
  Country_State: String,
  cuisine: String,
  title: { type: String, required: true },
  URL: String,
  rating: Number,
  total_time: Number,
  prep_time: Number,
  cook_time: Number,
  description: String,
  ingredients: [String],
  instructions: [String],
  nutrients: {
    calories: String,
    carbohydrateContent: String,
    cholesterolContent: String,
    fiberContent: String,
    proteinContent: String,
    saturatedFatContent: String,
    sodiumContent: String,
    sugarContent: String,
    fatContent: String,
    unsaturatedFatContent: String
  },
  serves: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);
export default Recipe;
