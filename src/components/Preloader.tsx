import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const percentageRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Initial state
    gsap.set([logoRef.current, progressBarRef.current, percentageRef.current], {
      opacity: 0,
      y: 30
    });
    
    // Animate logo and progress bar in
    tl.to([logoRef.current, progressBarRef.current, percentageRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });
    
    // Animate progress bar fill
    tl.to(progressBarRef.current?.querySelector('.fill'), {
      width: "100%",
      duration: 2.5,
      ease: "power2.out",
      onUpdate: function() {
        const progress = Math.round(this.progress() * 100);
        if (percentageRef.current) {
          percentageRef.current.textContent = `${progress}%`;
        }
      }
    }, "-=0.3");
    
    // Logo glow animation during loading
    gsap.to(logoRef.current, {
      textShadow: "0 0 20px hsl(180 100% 50% / 0.8)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut"
    });
    
    // Exit animation
    tl.to([logoRef.current, progressBarRef.current, percentageRef.current], {
      opacity: 0,
      y: -30,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.in"
    }, "+=0.5");
    
    tl.to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        onComplete();
      }
    }, "-=0.3");

  }, [onComplete]);

  return (
    <div 
      ref={preloaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-background"
    >
      <div className="flex flex-col items-center space-y-8">
        {/* Animated Logo */}
        <div 
          ref={logoRef}
          className="text-6xl md:text-8xl font-bold gradient-text"
        >
          SANKAR
        </div>
        
        {/* Progress Bar Container */}
        <div className="flex flex-col items-center space-y-4">
          <div 
            ref={progressBarRef}
            className="w-80 h-1 bg-secondary rounded-full overflow-hidden"
          >
            <div className="fill h-full bg-gradient-primary rounded-full w-0"></div>
          </div>
          
          {/* Percentage */}
          <span 
            ref={percentageRef}
            className="text-accent font-medium tracking-wider"
          >
            0%
          </span>
        </div>
        
        {/* Floating orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-neon-cyan rounded-full animate-float opacity-60"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-neon-purple rounded-full float-delayed opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-neon-orange rounded-full animate-float opacity-70"></div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;