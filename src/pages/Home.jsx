import React, { useState } from 'react';
import IngredientSearchBar from '../components/recipes/IngredientSearchBar';
import RecipeCard from '../components/recipes/RecipeCard';

const DUMMY_RECIPES = [
  {
    id: 1,
    title: "Garlic Butter Chicken and Rice",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 30,
    sourceUrl: "https://example.com/recipe1",
  },
  {
    id: 2,
    title: "Broccoli and Cheese Stuffed Chicken",
    image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 45,
    sourceUrl: "https://example.com/recipe2",
  },
  {
    id: 3,
    title: "Vegetable Stir Fry with Rice",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 20,
    sourceUrl: "https://example.com/recipe3",
  },
  {
    id: 4,
    title: "Spicy Lemon Garlic Shrimp",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=800",
    readyInMinutes: 15,
    sourceUrl: "https://example.com/recipe4",
  }
];

const DIETARY_FILTERS = [
  { id: 'vegan', label: 'Vegan' },
  { id: 'gluten-free', label: 'Gluten Free' },
  { id: 'peanut-free', label: 'Peanuts' },
];

const Home = () => {
  const [activeFilters, setActiveFilters] = useState([]);

  const toggleFilter = (filterId) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-12">
      {/* Search Section */}
      <IngredientSearchBar />

      {/* Dietary Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 mt-[-2rem]">
        {DIETARY_FILTERS.map(filter => (
          <button
            key={filter.id}
            onClick={() => toggleFilter(filter.id)}
            className={`px-6 py-2 rounded-full border text-sm font-bold uppercase tracking-wider transition-colors ${
              activeFilters.includes(filter.id)
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-primary border-primary/20 hover:border-primary'
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {DUMMY_RECIPES.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Home;
