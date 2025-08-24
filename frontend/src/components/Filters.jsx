import React from "react";

const Filters = ({ filters, setFilters, onSearch, onReset }) => {
  return (
    <div className="flex gap-4 mb-4">
      <input
        type="text"
        placeholder="Search title..."
        className="border p-2 rounded"
        value={filters.title || ""}
        onChange={(e) => setFilters({ ...filters, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Cuisine"
        className="border p-2 rounded"
        value={filters.cuisine || ""}
        onChange={(e) => setFilters({ ...filters, cuisine: e.target.value })}
      />
      <select
        className="border p-2 rounded"
        value={filters.rating || ""}
        onChange={(e) => setFilters({ ...filters, rating: e.target.value })}
      >
        <option value="">Rating</option>
        <option value=">=4">≥ 4</option>
        <option value="<=3">≤ 3</option>
        <option value="=5">= 5</option>
      </select>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={onSearch}
      >
        Search
      </button>
      <button
        className="bg-gray-500 text-white px-4 py-2 rounded"
        onClick={onReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Filters;
