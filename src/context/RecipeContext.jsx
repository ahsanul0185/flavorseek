import React, { createContext, useState, useContext, useEffect } from 'react';
import { getEdamamRecipes } from '../services/edamam';

const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [ingredients, setIngredients] = useState('');
  const [healthFilters, setHealthFilters] = useState([]);

  // Pagination state mapping page numbers (1-indexed) to the URL needed to fetch that page
  // pageTokens[1] == url for page 2. pageTokens[0] == null (base search)
  const [pageTokens, setPageTokens] = useState([null]);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);

  const performSearch = async (q, filters) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getEdamamRecipes({ q, healthFilters: filters });
      setRecipes(data.hits.map(hit => hit.recipe) || []);

      const nextUrl = data._links?.next?.href || null;
      setPageTokens([null, nextUrl]);
      setPage(1);
      setHasNextPage(!!nextUrl);
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const searchIngredientsByItems = async (items) => {
    const newIngredients = items === null ? ingredients : items;
    setIngredients(newIngredients);
    await performSearch(newIngredients, healthFilters);
  };

  const updateHealthFilters = async (filters) => {
    setHealthFilters(filters);
    await performSearch(ingredients, filters);
  };

  const fetchPage = async (pageNumber) => {
    if (pageNumber === 1) {
      await performSearch(ingredients, healthFilters);
      return;
    }
    const url = pageTokens[pageNumber - 1];
    if (!url) return;

    setLoading(true);
    setError(null);
    try {
      const data = await getEdamamRecipes({ url });
      setRecipes(data.hits.map(hit => hit.recipe) || []);

      const nextUrl = data._links?.next?.href || null;
      setPageTokens(prev => {
        const nextTokens = [...prev];
        nextTokens[pageNumber] = nextUrl;
        return nextTokens;
      });
      setPage(pageNumber);
      setHasNextPage(!!nextUrl);
    } catch (err) {
      setError('Failed to fetch page. Please try again.');
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
    ingredients,
    setIngredients,
    healthFilters,
    updateHealthFilters,

    page,
    setPage: fetchPage,
    hasNextPage,

    // Kept to avoid breaking existing usages
    totalResults: 0,
    resultsPerPage: 20,

    searchIngredientsByItems,
    performSearch
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
