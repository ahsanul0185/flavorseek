import React, { useState, useEffect } from 'react';
import { searchRecipes } from '../../services/home';

const DietaryDiscovery = () => {
  const tabs = [
    { label: "Main Course", value: "main course" },
    { label: "Breakfast", value: "breakfast" },
    { label: "Dessert", value: "dessert" },
    { label: "Snack", value: "snack" }
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].value);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTabRecipes = async () => {
      setLoading(true);
      try {
        const data = await searchRecipes({
          type: activeTab,
          number: 4
        });
        setRecipes(data.results || []);
      } catch (error) {
        console.error("Failed to fetch recipes for tab:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTabRecipes();
  }, [activeTab]);

  return (
    <section className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-16 md:py-24 bg-surface/50">
      <div className="text-center mb-12">
        <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-secondary mb-8 block">
          Meal Types
        </span>
        <div className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-8 py-2 text-[10px] tracking-[0.2em] font-bold uppercase border transition-all ${activeTab === tab.value
                  ? "bg-primary text-white border-primary"
                  : "bg-transparent text-primary/60 border-primary/10 hover:border-primary/40 hover:text-primary"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-pulse">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="aspect-[4/5] bg-surface-container"></div>
          ))}
        </div>
      ) : recipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="group cursor-pointer bg-white border border-primary/5 hover:border-secondary/20 transition-all duration-500">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <span className="text-[9px] tracking-[0.2em] font-bold uppercase text-secondary mb-2 block">
                  {recipe.readyInMinutes ? `${recipe.readyInMinutes} MINS` : 'QUICK BITE'}
                </span>
                <h3 className="font-display text-lg font-bold text-primary mb-2 line-clamp-2 group-hover:text-secondary transition-colors">
                  {recipe.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-on-surface-variant font-body">
          No recipes found for this category.
        </div>
      )}
    </section>
  );
};

export default DietaryDiscovery;
