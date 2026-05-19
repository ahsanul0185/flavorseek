import React from 'react';
import { useRecipes } from '../../context/RecipeContext';

const Pagination = () => {
  const { page, setPage, hasNextPage, loading } = useRecipes();

  // If we're loading or it's the first page and there's no next page, don't show pagination
  if (loading || (page === 1 && !hasNextPage)) return null;

  const handlePrev = () => setPage(Math.max(1, page - 1));
  const handleNext = () => setPage(page + 1);

  return (
    <div className="flex items-center justify-center gap-4 pt-12 border-t border-primary/10">
      <button
        onClick={handlePrev}
        disabled={page === 1}
        className="px-6 h-10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary cursor-pointer rounded-sm"
      >
        Prev
      </button>

      <div className="flex items-center justify-center w-10 h-10 border border-primary text-primary font-bold rounded-sm">
        {page}
      </div>

      <button
        onClick={handleNext}
        disabled={!hasNextPage}
        className="px-6 h-10 border border-primary/20 text-[10px] font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-primary cursor-pointer rounded-sm"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
