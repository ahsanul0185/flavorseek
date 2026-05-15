import React, { createContext, useState, useContext, useEffect } from 'react';
import { getRecipesByIngredients } from '../services/home';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [allRecipes, setAllRecipes] = useState([]); // Store all fetched recipes
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ingredients, setIngredients] = useState('');
  
  // Pagination state
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const resultsPerPage = 10;

  const searchIngredientsByItems = async (items) => {
    if (!items || !items.trim()) return;

    setLoading(true);
    setError(null);
    try {
      // Always fetch fresh when a new search is initiated
      const data = await getRecipesByIngredients(items, 100);
      setAllRecipes(data || []);
      setTotalResults((data || []).length);
      setPage(1); // Reset to first page on new search
      setIngredients(items);
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Effect to handle client-side pagination slicing
  useEffect(() => {
    if (allRecipes.length > 0) {
      const startIndex = (page - 1) * resultsPerPage;
      const paginatedData = allRecipes.slice(startIndex, startIndex + resultsPerPage);
      setRecipes(paginatedData);
    } else {
      setRecipes([]);
    }
  }, [allRecipes, page, resultsPerPage]);

  const value = {
    recipes,
    setRecipes,
    loading,
    setLoading,
    error,
    setError,
    ingredients,
    setIngredients,
    page,
    setPage,
    totalResults,
    resultsPerPage,
    searchIngredientsByItems
  };

  return (
    <RecipeContext.Provider value={value}>
      {children}
    </RecipeContext.Provider>
  );
};

export const useRecipes = () => {
  const context = useContext(RecipeContext);
  if (!context) {
    throw new Error('useRecipes must be used within a RecipeProvider');
  }
  return context;
};

