import React, { useState } from 'react';
import { useRecipes } from '../../context/RecipeContext';

const Header = () => {
  const [searchValue, setSearchValue] = useState('');
  const { fetchRecipes } = useRecipes();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchValue.trim()) {
      fetchRecipes(searchValue);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-surface py-6 border-b border-primary/5">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop flex items-center justify-between">
        
        {/* Logo - Elegant Editorial Serif */}
        <div className="shrink-0">
          <a href="/" className="group block">
            <h1 className="font-display text-2xl md:text-3xl font-bold tracking-[-0.03em] text-primary transition-colors hover:text-secondary">
              FlavorSeek
              <span className="block h-px w-0 bg-secondary transition-all group-hover:w-full"></span>
            </h1>
          </a>
        </div>

        {/* Search Bar - Minimalist Right Aligned */}
        <div className="flex items-center gap-8">
          <form onSubmit={handleSearch} className="relative flex items-center">
            <input
              type="text"
              placeholder="SEARCH RECIPES..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              className="w-48 md:w-64 bg-transparent border-b border-primary/20 py-2 text-xs tracking-[0.2em] font-body uppercase text-primary placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary transition-all"
            />
            <button 
              type="submit"
              className="ml-2 text-primary opacity-60 hover:opacity-100 transition-opacity"
              aria-label="Search"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </form>
        </div>

      </div>
    </header>
  );
};

export default Header;