import { useState, useEffect } from 'react';
import { List, X } from 'phosphor-react';
import { gsap } from 'gsap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo('.mobile-nav-item', 
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">
            SANKAR
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-accent transition-all duration-300 hover:glow-soft font-medium tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg glass border-glass-border hover:border-accent transition-all duration-300"
          >
            {isOpen ? (
              <X size={24} className="text-accent" />
            ) : (
              <List size={24} className="text-foreground" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`fixed inset-0 z-50 md:hidden transition-all duration-500 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="absolute inset-0 bg-background/95 backdrop-blur-xl"></div>
        
        <div className="relative flex flex-col items-center justify-center h-full space-y-8">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-lg glass border-glass-border"
          >
            <X size={24} className="text-accent" />
          </button>
          
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="mobile-nav-item text-3xl font-light text-foreground hover:text-accent transition-all duration-300 hover:scale-110"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;