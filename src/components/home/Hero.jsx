import React, { useState, useEffect } from 'react';
import { getRandomRecipes } from '../../services/home';

const Hero = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHeroRecipes = async () => {
      try {
        setLoading(true);
        const data = await getRandomRecipes(3);
        setRecipes(data.recipes || []);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch hero recipes:', err);
        setError('Failed to load featured recipes.');
      } finally {
        setLoading(false);
      }
    };

    fetchHeroRecipes();
  }, []);

  const stripHtml = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  if (loading) {
    return (
      <section className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-pulse">
          <div className="lg:col-span-2 bg-gray-200 aspect-[16/9] md:aspect-auto md:h-[600px]"></div>
          <div className="flex flex-col gap-6">
            <div className="flex-1 bg-gray-200 aspect-4/3"></div>
            <div className="flex-1 bg-gray-200 aspect-4/3"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error || recipes.length < 3) {
    return null; // Or show a fallback UI
  }

  const featuredRecipe = recipes[0];
  const sideRecipes = recipes.slice(1, 3);

  return (
    <section className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Main Featured Card */}
        <div className="lg:col-span-2 relative group overflow-hidden bg-surface-container cursor-pointer">
          <div className="aspect-video lg:aspect-auto lg:h-full w-full overflow-hidden">
            <img
              src={featuredRecipe.image}
              alt={featuredRecipe.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
            <span className="inline-block bg-secondary px-3 py-1 text-[10px] tracking-[0.2em] font-bold uppercase text-white mb-4 w-fit">
              Featured Recipe
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 max-w-xl leading-[1.1]">
              {featuredRecipe.title}
            </h2>
            <p className="font-body text-sm md:text-base text-white/80 max-w-lg leading-relaxed line-clamp-2">
              {stripHtml(featuredRecipe.summary)}
            </p>
          </div>
        </div>

        {/* Side Column */}
        <div className="flex flex-col gap-6">
          {sideRecipes.map((recipe, index) => (
            <div key={recipe.id} className="flex-1 group cursor-pointer bg-surface-container p-3">
              <div className="aspect-4/3 w-full overflow-hidden mb-4">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div>
                <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-secondary mb-2 block">
                  {recipe.dishTypes?.[0] || 'Recipe'}
                </span>
                <h3 className="font-display text-xl font-bold text-primary leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                  {recipe.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;

