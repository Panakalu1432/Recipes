import React, { useState } from "react";
import { Drawer } from "@mui/material";
import NutrientsTable from "./NutrientsTable";
import { Rating } from "@mui/material";


const RecipeDrawer = ({ recipe, onClose }) => {
  const [expanded, setExpanded] = useState(false);

  if (!recipe) return null;
  const ratingVal = Number.isFinite(parseFloat(recipe.rating))
    ? parseFloat(recipe.rating)
    : 0;

    const normalizeRating = (val) => {
    const n = parseFloat(val);
    return Number.isFinite(n) ? n : 0;
  };

  return (
    <Drawer anchor="right" open={!!recipe} onClose={onClose}>
      <div className="w-96 p-4">
        <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
        <p className="text-gray-600 mb-4">Cuisine: {recipe.cuisine}</p>

        <div className="mb-3">
          <Rating
              
                 name="read-only"
                value={normalizeRating(recipe.rating)}
                precision={0.5}
                readOnly
              />
        </div>
        
        <p className="mb-2">
          <strong>Description:</strong> {recipe.description}
        </p>
        <p className="mb-2">
          <strong>Total Time:</strong> {recipe.total_time} mins
        </p>

        <button
          className="text-blue-500 underline mb-2"
          onClick={() => setExpanded((s) => !s)}
        >
          {expanded ? "Hide Prep/Cook Time" : "Show Prep/Cook Time"}
        </button>

        {expanded && (
          <div className="mb-4">
            <p>Prep Time: {recipe.prep_time} mins</p>
            <p>Cook Time: {recipe.cook_time} mins</p>
          </div>
        )}

        <NutrientsTable nutrients={recipe.nutrients} />
      </div>
    </Drawer>
  );
};

export default RecipeDrawer;
