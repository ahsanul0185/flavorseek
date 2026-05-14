import React, { createContext, useState, useContext } from 'react';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch recipes - can be expanded as needed
  const fetchRecipes = async (query) => {
    setLoading(true);
    setError(null);
    try {
      // User will implement their specific fetch logic here
      // For now, this is a placeholder
      console.log(`Fetching recipes for: ${query}`);
      // const response = await fetch(`API_URL?q=${query}`);
      // const data = await response.json();
      // setRecipes(data.hits || []);
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const value = {
    recipes,
    setRecipes,
    loading,
    setLoading,
    error,
    setError,
    fetchRecipes
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
