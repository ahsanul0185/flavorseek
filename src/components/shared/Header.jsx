import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="sticky top-0 z-50 w-full bg-surface py-6 border-b border-primary/5 shadow-sm">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop flex items-center justify-between">
        
        {/* Logo - Elegant Editorial Serif */}
        <div className="shrink-0 flex items-center gap-12">
          <Link to="/" className="block">
            <h1 className="font-display text-2xl md:text-3xl font-bold tracking-[-0.03em] text-primary">
              FlavorSeek
            </h1>
          </Link>
        </div>

      </div>
    </header>
  );
};

export default Header;