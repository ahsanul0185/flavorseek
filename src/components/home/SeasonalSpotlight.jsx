import React from 'react';

const SeasonalSpotlight = () => {
  return (
    <section className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      <div className="flex flex-col lg:flex-row bg-[#ffecc6] overflow-hidden">
        
        {/* Text Content */}
        <div className="lg:w-1/2 p-12 md:p-20 flex flex-col justify-center">
          <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-secondary mb-6 block">
            Seasonal Spotlight
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-primary mb-8 leading-[1.1]">
            63 Side Dishes That Scream Spring
          </h2>
          <p className="font-body text-base text-primary/80 mb-12 leading-relaxed max-w-md">
            These bright dishes are all great excuses to stock up on the season's best produce and flavors—and possibly even take the meal outdoors.
          </p>
          
          <div className="flex flex-wrap gap-12 border-t border-primary/10 pt-10">
            <div>
              <h4 className="font-body text-[10px] tracking-widest uppercase font-bold text-primary mb-3">Spring Lamb w/ Herbs</h4>
              <div className="flex text-secondary text-sm gap-1">
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
            </div>
            <div>
              <h4 className="font-body text-[10px] tracking-widest uppercase font-bold text-primary mb-3">21 Spring Cocktails</h4>
              <p className="font-body text-[10px] tracking-widest uppercase text-primary/60">Warmer days ahead</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&q=80&w=1000&h=1200" 
            alt="Spring side dishes" 
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default SeasonalSpotlight;
