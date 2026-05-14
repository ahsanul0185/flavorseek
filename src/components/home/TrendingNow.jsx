import React from 'react';

const TrendingNow = () => {
  const trending = [
    {
      id: 1,
      title: "Cookie Butter Banana Cupcakes",
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&q=80&w=600&h=800",
      large: true
    },
    {
      id: 2,
      title: "Fudgy Cocoa Brownies",
      image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      id: 3,
      title: "Earl Grey-Chocolate Cupcakes",
      image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      id: 4,
      title: "Kentucky Hot Browns",
      image: "https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=400&h=300"
    },
    {
      id: 5,
      title: "Mint Julep",
      image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=400&h=300"
    }
  ];

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
        <div className="relative group overflow-hidden cursor-pointer">
          <div className="aspect-[4/5] lg:aspect-auto h-full w-full overflow-hidden">
            <img 
              src={trending[0].image} 
              alt={trending[0].title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-8">
            <div className="w-10 h-10 bg-secondary flex items-center justify-center text-white font-bold text-lg mb-4">
              1
            </div>
            <h3 className="font-display text-2xl md:text-4xl font-bold text-white max-w-sm">
              {trending[0].title}
            </h3>
          </div>
        </div>

        {/* Small Trending Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {trending.slice(1).map((item) => (
            <div key={item.id} className="relative group overflow-hidden cursor-pointer">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6">
                <div className="w-8 h-8 bg-black/50 backdrop-blur-sm flex items-center justify-center text-white font-bold text-sm mb-3">
                  {item.id}
                </div>
                <h4 className="font-display text-lg font-bold text-white">
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
