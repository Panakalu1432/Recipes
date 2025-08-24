import express from "express";
import Recipe from "../models/recipeModel.js";

const router = express.Router();

// 1. Get all recipes
router.get("/", async (req, res) => {
  try {
   
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    
    const recipes = await Recipe.find().skip(skip).limit(limit);
    
    res.json({
      data: recipes});
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
});

// Get only search recipes
router.get("/search", async (req, res) => {

  try {
    
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const { title, cuisine, calories, total_time, rating } = req.query;
    let filter = {};

    if (title) filter.title = { $regex: title, $options: "i" };
    if (cuisine) filter.cuisine = cuisine;

    if (calories) {
      if (calories.startsWith("<=")) filter["nutrients.calories"] = { $lte: Number(calories.slice(2)) };
      else if (calories.startsWith(">=")) filter["nutrients.calories"] = { $gte: Number(calories.slice(2)) };
      else if (calories.startsWith("=")) filter["nutrients.calories"] = Number(calories.slice(1));
    }

    if (total_time) {
      if (total_time.startsWith("<=")) filter.total_time = { $lte: Number(total_time.slice(2)) };
      else if (total_time.startsWith(">=")) filter.total_time = { $gte: Number(total_time.slice(2)) };
      else if (total_time.startsWith("=")) filter.total_time = Number(total_time.slice(1));
    }

    if (rating) {
      if (rating.startsWith("<=")) filter.rating = { $lte: Number(rating.slice(2)) };
      else if (rating.startsWith(">=")) filter.rating = { $gte: Number(rating.slice(2)) };
      else if (rating.startsWith("=")) filter.rating = Number(rating.slice(1));
    }


    const recipes = await Recipe.find(filter).skip(skip).limit(limit);
    
    res.json({ data: recipes });
  } catch (error) {
    
    res.status(500).json({ message: error.message });
  }
});



export default router;
