import React from 'react';

const DietaryDiscovery = () => {
  const filters = ["All", "Vegetarian", "Vegan", "Gluten-Free"];
  
  const recipes = [
    {
      title: "Lamington Cupcakes",
      description: "Australian Classics",
      image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=400&h=500",
      rating: 5
    },
    {
      title: "Zesty Lemon Curd",
      description: "Smooth & Creamy",
      image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&q=80&w=400&h=500",
      rating: 4
    },
    {
      title: "Need-More-Fiber Salad",
      description: "Daily Essentials",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400&h=500",
      rating: 5
    },
    {
      title: "Caramelized Onion Dip",
      description: "Creamy Cottage Cheese Base",
      image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&q=80&w=400&h=500",
      rating: 4
    }
  ];

  return (
    <section className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      <div className="text-center mb-12">
        <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-secondary mb-8 block">
          Dietary Discovery
        </span>
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter, index) => (
            <button 
              key={index}
              className={`px-8 py-2 text-[10px] tracking-[0.2em] font-bold uppercase border transition-all ${
                filter === "All" 
                  ? "bg-primary text-white border-primary" 
                  : "bg-transparent text-primary/60 border-primary/10 hover:border-primary/40 hover:text-primary"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {recipes.map((recipe, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-[4/5] overflow-hidden mb-6">
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <h3 className="font-display text-xl font-bold text-primary mb-2">
              {recipe.title}
            </h3>
            <p className="font-body text-xs text-on-surface-variant mb-4">
              {recipe.description}
            </p>
            <div className="flex text-secondary text-xs gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < recipe.rating ? "opacity-100" : "opacity-20"}>★</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DietaryDiscovery;
