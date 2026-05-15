import React from 'react';
import { useRecipes } from '../../context/RecipeContext';

const RecipeFilters = () => {
  const { ranking, setRanking, ingredients, searchIngredientsByItems } = useRecipes();

  const handleRankingChange = (val) => {
    setRanking(val);
    if (ingredients.trim()) {
      searchIngredientsByItems(ingredients, val);
    }
  };

  return (
    <aside className="w-full lg:w-64 shrink-0">
      <div className="sticky top-32">
        <h2 className="font-display text-xl font-bold text-primary mb-6 border-b border-primary/10 pb-4">
          Filters
        </h2>
        
        <div className="mb-8">
          <label className="text-[10px] tracking-[0.2em] font-bold uppercase text-on-surface-variant mb-4 block">
            Search Priority
          </label>
          <div className="flex flex-col gap-3">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="radio" 
                name="ranking" 
                value="1" 
                checked={ranking === 1}
                onChange={() => handleRankingChange(1)}
                className="accent-secondary"
              />
              <span className="font-body text-sm text-primary group-hover:text-secondary transition-colors">Maximize Used Ingredients</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="radio" 
                name="ranking" 
                value="2" 
                checked={ranking === 2}
                onChange={() => handleRankingChange(2)}
                className="accent-secondary"
              />
              <span className="font-body text-sm text-primary group-hover:text-secondary transition-colors">Minimize Missing Ingredients</span>
            </label>
          </div>
        </div>

        <div className="p-6 bg-surface-container rounded-sm">
          <h3 className="font-display text-sm font-bold text-primary mb-2">Pro Tip</h3>
          <p className="font-body text-[11px] text-on-surface-variant leading-relaxed">
            Separate ingredients with commas for better results. Common pantry items like salt and water are ignored by default.
          </p>
        </div>
      </div>
    </aside>
  );
};

export default RecipeFilters;
