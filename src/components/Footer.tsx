import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GithubLogo, LinkedinLogo, EnvelopeSimple, Heart } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    // Footer fade in animation
    gsap.fromTo(footer.children, 
      { 
        opacity: 0, 
        y: 60,
        filter: "blur(5px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footer,
          start: "top 90%",
        }
      }
    );

    // Floating particles animation
    gsap.to(particlesRef.current?.children, {
      y: -30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.8
    });

  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: GithubLogo, href: '#', label: 'GitHub' },
    { icon: LinkedinLogo, href: '#', label: 'LinkedIn' },
    { icon: EnvelopeSimple, href: '#', label: 'Email' }
  ];

  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-neon-cyan rounded-full opacity-60"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-neon-purple rounded-full opacity-40"></div>
        <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-neon-orange rounded-full opacity-50"></div>
        <div className="absolute top-3/4 right-1/6 w-2 h-2 bg-neon-pink rounded-full opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-3 bg-neon-cyan rounded-full opacity-45"></div>
      </div>

      <div ref={footerRef} className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-3xl font-bold gradient-text">
              SANKAR
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Crafting exceptional digital experiences with passion and precision.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-muted-foreground hover:text-accent transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Social & Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">
              Connect
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 glass rounded-xl border-glass-border hover:border-accent hover:shadow-glow-soft transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon 
                    size={20} 
                    className="text-foreground group-hover:text-accent transition-colors duration-300" 
                  />
                </a>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              sankar@example.com
            </p>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-glass-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © 2024 Sankar. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>and cutting-edge tech</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;