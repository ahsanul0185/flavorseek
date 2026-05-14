import React from 'react';

const PopularCollections = () => {
  const collections = [
    {
      title: "The Most-Saved Recipes in the App",
      description: "Like cottage cheese caramelized onion dip and a lentil barley salad.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600&h=400"
    },
    {
      title: "Quick & Healthy Weeknight Dinners",
      description: "Nutritious meals that come together in 30 minutes or less.",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600&h=400"
    }
  ];

  return (
    <section className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-secondary mb-3 block">
            Popular Recipe Collections
          </span>
        </div>
        <div className="flex gap-4">
          <button className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary hover:border-primary transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary hover:border-primary transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {collections.map((col, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="aspect-[16/10] overflow-hidden mb-6 relative">
              <img 
                src={col.image} 
                alt={col.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-white/90 p-2">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
              </div>
            </div>
            <h3 className="font-display text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
              {col.title}
            </h3>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              {col.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularCollections;
