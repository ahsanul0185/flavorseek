import React from 'react';
import { useRecipes } from '../../context/RecipeContext';

const Pagination = () => {
  const { page, setPage, totalResults, resultsPerPage, loading } = useRecipes();

  const totalPages = Math.ceil(totalResults / resultsPerPage);

  if (loading || totalPages <= 1) return null;

  const handlePrev = () => setPage(p => Math.max(1, p - 1));
  const handleNext = () => setPage(p => Math.min(totalPages, p + 1));

  // Logic to show "prev, 1, 2, 3 ... 12, 13, next"
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages + 2) {
      // Show all if not too many
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first, last, current, and surrounding
      pages.push(1);

      let start = Math.max(2, page - 1);
      let end = Math.min(totalPages - 1, page + 1);

      if (page <= 3) {
        end = 4;
      }
      if (page >= totalPages - 2) {
        start = totalPages - 3;
      }

      if (start > 2) {
        pages.push('...');
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push('...');
      }

      pages.push(totalPages);
    }

    return pages.map((p, index) => (
      <button
        key={index}
        onClick={() => typeof p === 'number' && setPage(p)}
        disabled={p === '...'}
        className={`w-10 h-10 flex items-center justify-center border font-body text-sm transition-all ${
          p === page 
            ? 'bg-primary border-primary text-white' 
            : p === '...'
              ? 'border-transparent text-on-surface-variant cursor-default'
              : 'border-primary/20 text-primary hover:bg-primary/5 cursor-pointer'
        }`}
      >
        {p}
      </button>
    ));
  };

  return (
    <div className="flex items-center justify-center gap-2 pt-12 border-t border-primary/10">
      <button 
        onClick={handlePrev}
        disabled={page === 1}
        className="px-4 h-10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary cursor-pointer"
      >
        Prev
      </button>
      
      <div className="flex gap-1">
        {renderPageNumbers()}
      </div>

      <button 
        onClick={handleNext}
        disabled={page === totalPages}
        className="px-4 h-10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary cursor-pointer"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
