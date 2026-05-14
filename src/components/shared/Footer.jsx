import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-surface-container-low pt-16 pb-8 border-t border-primary/5">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="max-w-xs">
            <h2 className="font-display text-2xl font-bold text-primary mb-4">
              SimpleSpoon
            </h2>
            <p className="font-body text-sm text-on-surface-variant leading-relaxed">
              A curated collection of culinary heritage, bringing the sun-drenched flavors of the Mediterranean to your kitchen.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-16">
            <div>
              <h3 className="font-body text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6">Explore</h3>
              <ul className="space-y-4">
                <li><a href="#" className="font-body text-sm text-on-surface-variant hover:text-secondary transition-colors">Recipes</a></li>
                <li><a href="#" className="font-body text-sm text-on-surface-variant hover:text-secondary transition-colors">Ingredients</a></li>
                <li><a href="#" className="font-body text-sm text-on-surface-variant hover:text-secondary transition-colors">Cuisines</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-body text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6">About</h3>
              <ul className="space-y-4">
                <li><a href="#" className="font-body text-sm text-on-surface-variant hover:text-secondary transition-colors">Our Story</a></li>
                <li><a href="#" className="font-body text-sm text-on-surface-variant hover:text-secondary transition-colors">Contact</a></li>
                <li><a href="#" className="font-body text-sm text-on-surface-variant hover:text-secondary transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] tracking-widest uppercase text-on-surface-variant/60">
            © 2026 Mediterráneo Editorial. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-primary/40 hover:text-primary transition-colors">
              <span className="sr-only">Instagram</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="#" className="text-primary/40 hover:text-primary transition-colors">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-1 2-2 3c1.1 0 2-1 2-1s-1 1-2 2c0 4.5-3.3 9-9 9-2.7 0-5.2-.8-7.2-2.2 1 .1 2 0 3-.5-2.2-.4-4-1.9-4-4.5 1 .1 2 .1 3 0-2.3-.5-4-2.5-4-4.9 1 .5 2 .7 3 .7-2.3-1.6-3-4.6-1.7-6.9 2.5 3 6.1 5 10.2 5.2-.1-.8-.1-1.6.2-2.4C15.6 3 18.1 3 19.9 4.5c.8-.1 1.5-.4 2.1-.8-.3.9-1 1.5-1.7 2 .7-.1 1.4-.3 2-.6z"></path></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;