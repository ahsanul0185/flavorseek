import React from 'react';

const KnowledgeBase = () => {
  const articles = [
    {
      title: "The Fastest Way to Ripen Bananas",
      description: "We tested every hack, from ovens to paper bags.",
      image: "https://images.unsplash.com/photo-1571771894821-ad9902412746?auto=format&fit=crop&q=80&w=300&h=200",
      icon: "🍌"
    },
    {
      title: "Essential Knife Skills for Every Home Cook",
      description: "Master the dice, chiffonade, and julienne.",
      image: "https://images.unsplash.com/photo-1593034509785-5b1869850106?auto=format&fit=crop&q=80&w=300&h=200",
      icon: "🔪"
    },
    {
      title: "The Best Cookware for Your Kitchen",
      description: "From cast iron skillets to stainless steel pans.",
      image: "https://images.unsplash.com/photo-1584946391122-ef0ffea03c33?auto=format&fit=crop&q=80&w=300&h=200",
      icon: "🍳"
    }
  ];

  return (
    <section className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop py-16 md:py-24 bg-surface">
      <div className="mb-12 border-b border-primary/10 pb-8 flex justify-between items-end">
        <div>
          <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-secondary mb-3 block">
            Knowledge Base
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary max-w-lg">
            Expert Advice & Culinary Techniques
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 items-center">
        <div className="overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1534445867742-43195f401b6c?auto=format&fit=crop&q=80&w=800&h=600"
            alt="Cooking techniques"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-md">
          <h3 className="font-display text-2xl md:text-4xl font-bold text-primary mb-6 leading-tight">
            13 Types of Nuts and How to Cook With Them
          </h3>
          <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-8">
            Filberts, goebers, scalp-bark nuts: Explore the world beyond almonds in this definitive guide to common and rare nuts found in today's global pantry.
          </p>
          <button className="bg-primary text-white px-8 py-3 text-[10px] tracking-[0.2em] font-bold uppercase hover:bg-secondary transition-colors">
            Read the Full Guide
          </button>
        </div>
      </div>
    </section>
  );
};

export default KnowledgeBase;
