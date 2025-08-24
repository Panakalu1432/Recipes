import React, { useState, useEffect } from "react";
import axios from "axios";
import api from "../services/api";
import Filters from "../components/Filters";
import RecipeTable from "../components/RecipeTable";
import RecipeDrawer from "../components/RecipeDrawer";
import { TailSpin } from 'react-loader-spinner';
import './RecipesPage.css'

const RecipesPage = () => {
  const [recipes, setRecipes] = useState([]);
  const [selected, setSelected] = useState(null);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [isloading, setlodaing] = useState(false);

  const fetchRecipes = async (page=1) => {
    setlodaing(true)
    try {
        
      const res = await api.get(`/recipes?page=${page}&limit=${limit}`);
      setRecipes(res.data.data);
      
    } catch (err) {
      console.error(err);
      setRecipes([]);
      
    } finally {
      setlodaing(false)
    }
  };

  const searchRecipes = async () => {
    try {
      const params = new URLSearchParams(filters).toString();
      const res = await api.get(`/recipes/search?${params}&page=${page}&limit=${limit}`);
      setRecipes(res.data.data);
      
    } catch (err) {
      console.error(err);
      setRecipes([]);
    }
  };

  useEffect(() => {
      if (Object.keys(filters).length > 0) {
        searchRecipes(page, limit);
      } else {
        fetchRecipes(page, limit);
      }
    }, [page, limit, filters]);

  return (
    
    <div className="p-4">
      <Filters
        filters={filters}
        setFilters={setFilters}
        onSearch={searchRecipes}
        onReset={() => {
          setFilters({});
          fetchRecipes();
        }}
      />
      {isloading ?   <TailSpin
          height="50"
          width="50"
          radius="6"
          color="yellow"
          ariaLabel="loading"
          wrapperStyle={{}}
          wrapperClass=""
       
        
        /> :<>
       <RecipeTable recipes={recipes} onRowClick={setSelected} />
       {selected && (
    <RecipeDrawer recipe={selected} onClose={() => setSelected(null)} />
  )} </>}
      <div className="flex justify-between items-center mt-4">
    <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
    >
        Prev
    </button>

  <span>
    Page {page} 
  </span>

  <button
    
    onClick={() => setPage(page + 1)}
    className="px-3 py-1 bg-gray-200 rounded "
  >
    Next
  </button>
    <select
    value={limit}
    onChange={(e) => setLimit(Number(e.target.value))}
    className="ml-4 border rounded px-2 py-1 "
>
    <option value={10}>10</option>
    <option value={15}>15</option>
    <option value={25}>25</option>
    <option value={50}>50</option>
  </select>
      </div>
    </div>
  );
};

export default RecipesPage;
