import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-primary pt-16 pb-8 border-t border-white/5">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">

          <div className="max-w-xs">
            <h2 className="font-display text-2xl font-bold text-white mb-4">
              FlavorSeek
            </h2>
            <p className="font-body text-sm text-white/70 leading-relaxed">
              A curated collection of culinary heritage, bringing the sun-drenched flavors of the Mediterranean to your kitchen.
            </p>
          </div>

          <div className="flex flex-col gap-4 mt-8 md:mt-0">
            <h3 className="font-display font-medium text-white tracking-wide mb-2 uppercase text-xs">Popular Ingredients</h3>
            <div className="grid grid-cols-2 gap-x-12 gap-y-3">
              <Link to="/?ingredients=chicken" className="font-body text-sm text-white/70 hover:text-secondary transition-colors">Chicken</Link>
              <Link to="/?ingredients=tomato" className="font-body text-sm text-white/70 hover:text-secondary transition-colors">Tomato</Link>
              <Link to="/?ingredients=garlic" className="font-body text-sm text-white/70 hover:text-secondary transition-colors">Garlic</Link>
              <Link to="/?ingredients=lemon" className="font-body text-sm text-white/70 hover:text-secondary transition-colors">Lemon</Link>
              <Link to="/?ingredients=olive%20oil" className="font-body text-sm text-white/70 hover:text-secondary transition-colors">Olive Oil</Link>
              <Link to="/?ingredients=basil" className="font-body text-sm text-white/70 hover:text-secondary transition-colors">Basil</Link>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] tracking-widest text-white/40">
            © 2026 FlavorSeek. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              <span className="sr-only">Instagram</span>
              <FaInstagram size={16} />
            </a>
            <a href="#" className="text-white/40 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <FaTwitter size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;