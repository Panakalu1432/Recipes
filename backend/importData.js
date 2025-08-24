import fs from "fs";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Recipe from "./models/recipeModel.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);
console.log("MongoDB connected");

let rawData = fs.readFileSync("./US_recipes.json", "utf-8");
const replaceRawData = rawData.replace(/\bNaN\b/g, "null");

let recipes = JSON.parse(replaceRawData);

if (!Array.isArray(recipes)) {
  recipes = Object.values(recipes);
}

recipes = recipes.map(r => {
  for (const key in r) {
    if (r[key] !== null && typeof r[key] === "number" && isNaN(r[key])) {
      r[key] = null;
    }
  }
  return r;
});

try {
  await Recipe.insertMany(recipes);
  console.log(`Inserted ${recipes.length} recipes`);
  process.exit();
} catch (err) {
  console.error("Error importing data:", err.message);
  process.exit(1);
}
