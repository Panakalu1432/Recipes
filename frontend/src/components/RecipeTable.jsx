import React from "react";
import { Rating } from "@mui/material";

const RecipeTable = ({ recipes, onRowClick }) => {
  if (!recipes || recipes.length === 0) {
    return <div>No results found</div>;
  }

const normalizeRating = (val) => {
    const n = parseFloat(val);
    return Number.isFinite(n) ? n : 0;
  };

  return (
    <table className="table-auto border-collapse border border-gray-300 w-full">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Title</th>
          <th className="border p-2">Cuisine</th>
          <th className="border p-2">Rating</th>
          <th className="border p-2">Total Time</th>
          <th className="border p-2">Serves</th>
        </tr>
      </thead>
      <tbody>
        {recipes.map((r) => (
          <tr
            key={r._id}
            className="cursor-pointer hover:bg-gray-50"
            onClick={() => onRowClick(r)}
          >
            <td className="border p-2 truncate max-w-[150px]">{r.title}</td>
            <td className="border p-2">{r.cuisine}</td>
            <td className="border p-2">
              <Rating
              
                 name="read-only"
                value={normalizeRating(r.rating)}
                precision={0.5}
                readOnly
              />
            </td>
            <td className="border p-2">{r.total_time} mins</td>
            <td className="border p-2">{r.serves || "N/A"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RecipeTable;
