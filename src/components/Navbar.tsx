import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { Menu, X, Gamepad2 } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Gaming Stations', href: '#stations' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Tournaments', href: '#tournaments' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-md border-b border-white/5 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer group"
            onClick={() => scrollTo('#home')}
          >
            <Gamepad2 className="w-8 h-8 text-accent group-hover:text-primary transition-colors" />
            <span className="font-display font-bold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              POWERPLAY
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                className="text-sm font-medium text-foreground/80 hover:text-white relative group uppercase tracking-wider transition-colors"
              >
                {link.name}
                <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-300 group-hover:w-full shadow-[0_0_8px_hsl(var(--accent))]" />
              </button>
            ))}
          </nav>

          <button
            className="md:hidden text-foreground hover:text-accent transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-background/95 backdrop-blur-xl flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="font-display font-bold text-2xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                POWERPLAY
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-foreground hover:text-accent p-2"
              >
                <X className="w-8 h-8" />
              </button>
            </div>
            
            <div className="flex flex-col gap-6 items-center justify-center flex-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-2xl font-display uppercase tracking-widest hover:text-accent transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
