import React from 'react';

const RecipeCard = ({ recipe }) => {
  const recipeUrl = recipe.sourceUrl || recipe.spoonacularSourceUrl || `https://spoonacular.com/recipes/${recipe.title?.replace(/[^a-zA-Z0-9]/g, '-').toLowerCase()}-${recipe.id}`;

  return (
    <a href={recipeUrl} target="_blank" rel="noopener noreferrer" className="group flex flex-col bg-white border border-primary/5 hover:shadow-xl transition-all duration-500">
      <div className="aspect-[4/3] overflow-hidden relative">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-secondary text-white px-2 py-1 text-[9px] font-bold uppercase tracking-wider">
          {recipe.likes} Likes
        </div>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-lg font-bold text-primary mb-4 leading-tight group-hover:text-secondary transition-colors line-clamp-2">
          {recipe.title}
        </h3>

        <div className="mt-auto space-y-4">
          {recipe.usedIngredientCount > 0 && recipe.usedIngredients && (
            <div>
              <span className="text-[9px] tracking-[0.1em] font-bold uppercase text-green-600 mb-2 block">
                Used Ingredients ({recipe.usedIngredientCount})
              </span>
              <div className="flex flex-wrap gap-1">
                {recipe.usedIngredients.map(ing => (
                  <span key={ing.id} className="text-[10px] bg-green-50 text-green-700 px-2 py-1 rounded-sm font-body">
                    {ing.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </a>
  );
};

export default RecipeCard;
