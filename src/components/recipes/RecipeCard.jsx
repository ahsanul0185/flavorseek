import React from 'react';

const RecipeCard = ({ recipe }) => {
  const recipeUrl = recipe.url || recipe.sourceUrl || recipe.spoonacularSourceUrl || `https://spoonacular.com/recipes/${(recipe.title || recipe.label || '').replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${recipe.id}`;

  const title = recipe.source || 'FlavorSeek';

  return (
    <a href={recipeUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-white border border-primary/5 hover:shadow-xl transition-all duration-500">
      <div className="aspect-[4/3] overflow-hidden relative border-b border-primary/5">
        <img
          src={recipe.image}
          alt={recipe.label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      <div className="p-3 md:p-6 flex-1 flex flex-col bg-surface-container/10">
        <h3 className="font-display text-base md:text-lg font-bold text-primary mb-1 md:mb-2 leading-tight group-hover:text-secondary transition-colors line-clamp-1">
          {title}
        </h3>
        <p className="text-[10px] md:text-xs font-body text-on-surface-variant line-clamp-2 mt-auto">
          {recipe.label}
        </p>
      </div>
    </a>
  );
};

export default RecipeCard;
