import React, { useCallback, useState, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { getRandomRecipes } from '../../services/home';

const PopularCollections = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' });
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        setLoading(true);
        // Fetch 8 highly rated/random recipes to act as featured items
        // Removed 'popular' tag as it was returning empty results from Spoonacular
        const data = await getRandomRecipes(8);
        if (data.recipes && data.recipes.length > 0) {
          setCollections(data.recipes);
        } else {
          throw new Error("Empty recipes returned");
        }
      } catch (error) {
        console.error("Failed to fetch collections, using fallback:", error);
        // Fallback to mock data if API limit reached or fails
        setCollections([
          {
            id: 1,
            title: "The Most-Saved Recipes in the App",
            summary: "Like cottage cheese caramelized onion dip and a lentil barley salad.",
            image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=600&h=400"
          },
          {
            id: 2,
            title: "Quick & Healthy Weeknight Dinners",
            summary: "Nutritious meals that come together in 30 minutes or less.",
            image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=600&h=400"
          },
          {
            id: 3,
            title: "Ultimate Comfort Food Classics",
            summary: "Warm, cozy recipes perfect for a rainy weekend.",
            image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&q=80&w=600&h=400"
          },
          {
            id: 4,
            title: "Decadent Chocolate Desserts",
            summary: "Rich and gooey treats for the ultimate sweet tooth.",
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=600&h=400"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  // Utility to strip HTML tags from Spoonacular summary
  const stripHtml = (html) => {
    if (!html) return '';
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  return (
    <section className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-16 md:py-24">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-secondary mb-3 block">
            Popular Recipe Collections
          </span>
        </div>
        <div className="flex gap-4">
          <button
            onClick={scrollPrev}
            disabled={loading}
            className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary hover:border-primary transition-all cursor-pointer disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button
            onClick={scrollNext}
            disabled={loading}
            className="w-10 h-10 border border-primary/20 flex items-center justify-center text-primary hover:border-primary transition-all cursor-pointer disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-8 cursor-grab active:cursor-grabbing">
          {loading ? (
            // Skeleton Loading State
            [1, 2, 3, 4].map(i => (
              <div key={i} className="flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] min-w-0 animate-pulse">
                <div className="aspect-[16/10] bg-surface-container mb-6"></div>
                <div className="h-6 bg-surface-container w-3/4 mb-3"></div>
                <div className="h-4 bg-surface-container w-full mb-1"></div>
                <div className="h-4 bg-surface-container w-2/3"></div>
              </div>
            ))
          ) : (
            collections.map((col, index) => (
              <div key={col.id || index} className="group flex-[0_0_100%] md:flex-[0_0_calc(50%-1rem)] min-w-0">
                <div className="aspect-[16/10] overflow-hidden mb-6 relative bg-surface-container">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 select-none"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/90 p-2 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" /></svg>
                  </div>
                </div>
                <h3 className="font-display text-2xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-1">
                  {col.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                  {stripHtml(col.summary)}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default PopularCollections;
