import React from 'react';

const Hero = () => {
  const images = {
    salmon: "https://lh3.googleusercontent.com/aida-public/AB6AXuBI-zjFUbHEQevw1S045ozc16FuGUPX9NIglYQ26ANF7LIPq2wGKAQZXp8S_jdCIpNSCS4WkK7ZJ1tG6NXmXnZzA1sfrZ5H3RhyueWfPH8izxvhNQR2EXwvLCvbq_ayvGG_EXL4wpoMpoY3duz1kBud6XmsnALumlv7b5Oyy6LYbbAtDogbfLNvZEnm6oE9WSZquN8IIlTngsH9eecTTD_LDsdWlleyWvDa0DfcbBf-LzJR6tQJkobAyKvmJZuRRNSVaPZ-9jYOKwun",
    brownies: "https://lh3.googleusercontent.com/aida-public/AB6AXuCWIFFeT6oJ7Ghx47w_M5oMnKpMPyj5vZxX0SWOPmLs4pK6xawx_3JWJWuQW1isRY_9A6ArOWp8chZFSCcYiw1PNkDFJyZ_A-_8lS-BWqmGTyXv0yZe1kPWlGPWIDOqJ-gM9v3r31MBSq_H6nc1ZtpQK4-ASZnDBmpNW50y_2vuqg0J36hn1zt4DgWY2oE2gyeMZ1uOUnW8tDA_dFf6pltN83BBXBkOMbIb0C2tSpIpvsMCeZO2n9bps5RDuQsLLuDySGVzyovBK4ED",
    pasta: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzlG00zoKLuK2ulABlGjUkTWEFmECUJpAXTsHYfUncME45WLf13VgRUVb3EO6d-Y4A400x5C2sNPI83gCyRW9iQV4xDGz9ye8HKP8bzKGuk8JHHyBrNT8nCN_oZeD7TU-fx2YOFz0jtVExDsoGjoUVWVlr7faZRZfTAkhcPSMRrdSYcDLsKh6rURiWxs4nEzsr4-8pdzbVkKfNvP4HGLZSMLc284smVjFYBpjJh5Sl-rBj4bzNaJ8rchpKY25ONjq2TnUbLyGC9EcZ"
  };

  return (
    <section className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Featured Card */}
        <div className="lg:col-span-2 relative group overflow-hidden bg-surface-container cursor-pointer">
          <div className="aspect- w-full overflow-hidden">
            <img 
              src={images.salmon} 
              alt="Soy-Glazed Salmon Bowls" 
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12">
            <span className="inline-block bg-secondary px-3 py-1 text-[10px] tracking-[0.2em] font-bold uppercase text-white mb-4 w-fit">
              Featured Recipe
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-4 max-w-xl leading-[1.1]">
              Soy-Glazed Salmon Bowls
            </h2>
            <p className="font-body text-sm md:text-base text-white/80 max-w-lg leading-relaxed">
              Cutting salmon into cubes speeds up the cooking for this quick weeknight dinner.
            </p>
          </div>
        </div>

        {/* Side Column */}
        <div className="flex flex-col gap-6">
          
          {/* Top Side Card */}
          <div className="flex-1 group cursor-pointer bg-surface-container p-3">
            <div className="aspect-4/3 w-full overflow-hidden  mb-4">
              <img 
                src={images.brownies} 
                alt="Brownie Recipes" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-secondary mb-2 block">
                Chocolate
              </span>
              <h3 className="font-display text-xl font-bold text-primary leading-tight group-hover:text-secondary transition-colors">
                23 Brownie Recipes for Every Craving
              </h3>
            </div>
          </div>

          {/* Bottom Side Card */}
          <div className="flex-1 group cursor-pointer bg-surface-container p-3">
            <div className="aspect-4/3 w-full overflow-hidden mb-4">
              <img 
                src={images.pasta} 
                alt="Spring Pastas" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-secondary mb-2 block">
                Spring
              </span>
              <h3 className="font-display text-xl font-bold text-primary leading-tight group-hover:text-secondary transition-colors">
                21 Spring Pastas with Seasonal Produce
              </h3>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
