import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRecipes } from '../context/RecipeContext';
import IngredientSearchBar from '../components/recipes/IngredientSearchBar';
import RecipeCard from '../components/recipes/RecipeCard';
import Pagination from '../components/recipes/Pagination';

const Recipes = () => {
  const { recipes, loading, error, ingredients, searchIngredientsByItems } = useRecipes();
  const [searchParams, setSearchParams] = useSearchParams();

  // Sync URL to search state on mount or when URL changes
  useEffect(() => {
    const urlIngredients = searchParams.get('ingredients');
    if (urlIngredients && urlIngredients !== ingredients) {
      searchIngredientsByItems(urlIngredients);
    }
  }, [searchParams]);

  return (
    <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-12">
      
      {/* Search Section */}
      <IngredientSearchBar />

      <div className="flex flex-col gap-12">
        {/* Main Content */}
        <div className="flex-1">
          {error && (
            <div className="p-8 bg-red-50 border border-red-100 text-red-600 text-center font-body text-sm">
              {error}
            </div>
          )}

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-pulse">
              {[1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                <div key={i} className="aspect-square bg-surface-container"></div>
              ))}
            </div>
          ) : recipes.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
                {recipes.map((recipe) => (
                  <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
              </div>

              {/* Pagination */}
              <Pagination />
            </>
          ) : !loading && ingredients && (
            <div className="text-center py-20 bg-surface-container">
              <p className="font-body text-on-surface-variant">No recipes found for these ingredients.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipes;


