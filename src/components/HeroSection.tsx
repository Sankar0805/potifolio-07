import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'phosphor-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    // Initial states
    gsap.set([headlineRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 50,
      filter: "blur(10px)"
    });
    
    gsap.set(splineRef.current, {
      opacity: 0,
      x: 100,
      scale: 0.8
    });
    
    // Animate elements in sequence
    tl.to(headlineRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.8,
      ease: "power2.out"
    }, "-=0.6")
    .to(splineRef.current, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 1.5,
      ease: "power2.out"
    }, "-=1");
    
    // Floating background orbs
    gsap.to('.floating-orb', {
      y: -20,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5
    });
    
    // CTA button hover animation setup
    const button = ctaRef.current;
    if (button) {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });
      
      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }
    
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background */}
      <div ref={splineRef} className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/glassmorphlandingpage-2CT4e01jRHDQcV1oPTGXCCu9/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full"
        />
      </div>
      
      {/* Floating Neon Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb absolute top-1/4 left-1/6 w-8 h-8 bg-neon-cyan rounded-full opacity-60 animate-pulse-glow"></div>
        <div className="floating-orb absolute top-2/3 right-1/5 w-12 h-12 bg-neon-purple rounded-full opacity-40 animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
        <div className="floating-orb absolute bottom-1/4 left-1/3 w-6 h-6 bg-neon-orange rounded-full opacity-70 animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="floating-orb absolute top-1/2 right-1/3 w-10 h-10 bg-neon-pink rounded-full opacity-50 animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div 
          ref={headlineRef}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Hi, I'm <span className="gradient-text">Sankar</span>
            <br />
            <span className="text-foreground font-light">Web Developer</span>
          </h1>
        </div>
        
        <div 
          ref={subtitleRef}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
            Crafting immersive digital experiences with cutting-edge technologies and stunning visual design.
          </p>
        </div>
        
        <button
          ref={ctaRef}
          className="btn-neon px-8 py-4 rounded-full text-lg font-medium inline-flex items-center space-x-3 transition-all duration-300"
        >
          <span>Hire Me</span>
          <ArrowRight size={20} />
        </button>
      </div>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/60 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;