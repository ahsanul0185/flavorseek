import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecipes } from '../../context/RecipeContext';

const IngredientSearchBar = () => {
  const { searchIngredientsByItems, loading } = useRecipes();
  const [searchParams, setSearchParams] = useSearchParams();
  const [localSearch, setLocalSearch] = useState(searchParams.get('ingredients') || '');

  // Sync local input with URL if URL changes externally (e.g. from Header search)
  useEffect(() => {
    const urlIngredients = searchParams.get('ingredients');
    if (urlIngredients !== null) {
      setLocalSearch(urlIngredients);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localSearch.trim()) {
      // Update URL which will trigger the fetch in Recipes.jsx
      setSearchParams({ ingredients: localSearch.trim() });
    }
  };

  return (
    <div className="mb-16 text-center max-w-2xl mx-auto">
      <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-secondary mb-4 block">
        Ingredient Search
      </span>
      <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-8">
        What's in your fridge?
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="e.g. apples, flour, sugar"
          value={localSearch}
          onChange={(e) => setLocalSearch(e.target.value)}
          className="flex-1 bg-surface-container/50 border-b-2 border-primary/10 py-4 px-6 text-sm font-body focus:outline-none focus:border-secondary transition-colors"
        />
        <button 
          type="submit"
          disabled={loading}
          className="bg-primary text-white px-10 py-4 text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-secondary transition-colors disabled:opacity-50"
        >
          {loading ? 'Searching...' : 'Find Recipes'}
        </button>
      </form>
    </div>
  );
};

export default IngredientSearchBar;
