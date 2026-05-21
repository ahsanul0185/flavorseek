import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import IngredientSearchBar from '../components/recipes/IngredientSearchBar';
import RecipeCard from '../components/recipes/RecipeCard';
import Pagination from '../components/recipes/Pagination';
import { useRecipes } from '../context/RecipeContext';

const DIETARY_FILTERS = [
  { id: 'vegan', label: 'Vegan' },
  { id: 'vegetarian', label: 'Vegetarian' },
  { id: 'gluten-free', label: 'Gluten Free' },
  { id: 'peanut-free', label: 'Peanut Free' }
];

const Home = () => {
  const { 
    recipes, 
    loading, 
    error, 
    healthFilters, 
    ingredients,
    updateHealthFilters,
    searchIngredientsByItems,
    performSearch,
    clearSearch,
    syncSearchState
  } = useRecipes();

  const [searchParams, setSearchParams] = useSearchParams();

  // Sync URL to search state on mount or when URL changes
  useEffect(() => {
    const urlIngredients = searchParams.get('ingredients') || '';
    const urlFilters = searchParams.get('filters') ? searchParams.get('filters').split(',') : [];

    let needsSync = false;
    let nextIngredients = ingredients;
    let nextFilters = healthFilters;

    if (urlIngredients !== ingredients) {
      nextIngredients = urlIngredients === '' ? null : urlIngredients; // Wait, items===null means keep existing in context function! I should just pass '' instead to clear it.
      // Actually Context sets '' if it's not null. So passing '' is correct for clearing.
      // Wait, in searchIngredientsByItems: `items === null ? ingredients : items`. So '' means clear.
      nextIngredients = urlIngredients; 
      needsSync = true;
    }
    
    if (urlFilters.join(',') !== healthFilters.join(',')) {
      nextFilters = urlFilters;
      needsSync = true;
    }

    if (needsSync) {
       syncSearchState(nextIngredients, nextFilters);
    } else {
      if (ingredients === '' && healthFilters.length === 0) {
         if (recipes.length === 0 && !loading && !error) {
           performSearch('random', []);
         }
      }
    }
  }, [searchParams, ingredients, healthFilters]); 

  const toggleFilter = (filterId) => {
    const newFilters = healthFilters.includes(filterId)
      ? healthFilters.filter(id => id !== filterId)
      : [...healthFilters, filterId];
    
    setSearchParams(prev => {
      const p = new URLSearchParams(prev);
      if (newFilters.length > 0) p.set('filters', newFilters.join(','));
      else p.delete('filters');
      return p;
    });
  };

  return (
    <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-12">
      {/* Search Section */}
      <IngredientSearchBar />

      {/* Dietary Filters */}
      <div className="flex flex-col items-center gap-4 mb-8 md:mb-12 mt-[-2rem] w-full px-margin-mobile md:px-0">
        <span className="text-sm font-bold text-on-surface-variant uppercase tracking-widest">
          Filter by:
        </span>
        <div className="flex overflow-x-auto w-full pb-4 justify-start md:justify-center md:flex-wrap gap-2 md:gap-3" style={{ scrollbarWidth: 'none' }}>
          {DIETARY_FILTERS.map(filter => (
            <button
              key={filter.id}
              onClick={() => toggleFilter(filter.id)}
              className={`flex-shrink-0 px-5 md:px-6 py-2 rounded-full border text-xs md:text-sm font-bold uppercase tracking-wider transition-colors ${
                healthFilters.includes(filter.id)
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-primary border-primary/20 hover:border-primary cursor-pointer'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results Grid */}
      <div className="flex flex-col min-h-[400px]">
        {error && (
            <div className="p-8 bg-red-50 border border-red-100 text-red-600 text-center font-body text-sm mb-8">
              {error}
            </div>
        )}
        
        {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 animate-pulse w-full">
                {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className="aspect-[4/3] bg-surface-container/50 border border-primary/5"></div>
                ))}
            </div>
        ) : recipes.length > 0 ? (
            <>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {recipes.map((recipe, index) => (
                    <RecipeCard key={`${recipe.uri || recipe.id}-${index}`} recipe={recipe} />
                    ))}
                </div>
                {/* Pagination */}
                <div className="mt-8">
                  <Pagination />
                </div>
            </>
        ) : !loading && (
            <div className="text-center py-20 bg-surface-container/30 border border-primary/10">
                <p className="font-body text-on-surface-variant">No recipes found. Try adjusting your search or filters.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default Home;
