import React from 'react';

const RecipeCard = ({ recipe }) => {
  const recipeUrl = recipe.url || recipe.sourceUrl || recipe.spoonacularSourceUrl || `https://spoonacular.com/recipes/${(recipe.title || recipe.label || '').replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${recipe.id}`;
  
  const title = recipe.label || recipe.title;
  const time = recipe.totalTime || recipe.readyInMinutes;

  return (
    <a href={recipeUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-white border border-primary/5 hover:shadow-xl transition-all duration-500">
      <div className="aspect-[4/3] overflow-hidden relative border-b border-primary/5">
        <img
          src={recipe.image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {time ? (
          <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-secondary text-white px-2 py-0.5 md:py-1 text-[8px] md:text-[9px] font-bold uppercase tracking-wider shadow-sm">
            {time} Mins
          </div>
        ) : null}
      </div>
      <div className="p-3 md:p-6 flex-1 flex flex-col bg-surface-container/10">
        <h3 className="font-display text-base md:text-lg font-bold text-primary mb-1 md:mb-2 leading-tight group-hover:text-secondary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-[10px] md:text-xs font-body text-on-surface-variant line-clamp-1 mt-auto">
           {recipe.source || 'FlavorSeek'}
        </p>
      </div>
    </a>
  );
};

export default RecipeCard;
