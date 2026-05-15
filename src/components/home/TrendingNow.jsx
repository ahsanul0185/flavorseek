import React, { useState, useEffect } from 'react';
import { searchRecipes } from '../../services/home';

const TrendingNow = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrending = async () => {
      try {
        setLoading(true);
        const data = await searchRecipes({
          sort: 'popularity',
          number: 5
        });
        setRecipes(data.results || []);
      } catch (error) {
        console.error("Failed to fetch trending recipes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTrending();
  }, []);

  if (loading) {
    return (
      <section className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary tracking-[0.1em] uppercase relative inline-block">
            Trending Now
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-secondary"></span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 animate-pulse">
          <div className="aspect-[4/5] lg:aspect-auto h-full w-full bg-surface-container"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="aspect-[4/3] bg-surface-container w-full"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (recipes.length < 5) return null;

  const featured = recipes[0];
  const others = recipes.slice(1);

  return (
    <section className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-primary tracking-[0.1em] uppercase relative inline-block">
          Trending Now
          <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-secondary"></span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Large Trending Item */}
        <div className="relative group overflow-hidden cursor-pointer bg-surface-container">
          <div className="aspect-[4/5] lg:aspect-auto lg:h-full w-full overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary flex items-center justify-center text-white font-bold text-lg">
                1
              </div>
              {featured.aggregateLikes > 0 && (
                <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-3 py-2 uppercase tracking-widest">
                  {featured.aggregateLikes.toLocaleString()} Likes
                </span>
              )}
            </div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white max-w-sm leading-tight">
              {featured.title}
            </h3>
          </div>
        </div>

        {/* Small Trending Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {others.map((item, index) => (
            <div key={item.id} className="relative group overflow-hidden cursor-pointer bg-surface-container">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm">
                    {index + 2}
                  </div>
                  {item.aggregateLikes > 0 && (
                    <span className="text-white/80 text-[10px] font-bold uppercase tracking-widest">
                      {item.aggregateLikes.toLocaleString()} Likes
                    </span>
                  )}
                </div>
                <h4 className="font-display text-lg font-bold text-white leading-tight line-clamp-2">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
