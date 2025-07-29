import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Code, 
  DeviceMobile, 
  Globe, 
  Sparkle,
  Rocket,
  PaintBrush 
} from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'Frontend', icon: Code, color: 'neon-cyan' },
    { name: 'Mobile', icon: DeviceMobile, color: 'neon-purple' },
    { name: 'Web3', icon: Globe, color: 'neon-orange' },
    { name: 'UI/UX', icon: PaintBrush, color: 'neon-pink' },
    { name: 'Animation', icon: Sparkle, color: 'neon-cyan' },
    { name: 'Performance', icon: Rocket, color: 'neon-purple' }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Image animation
    gsap.fromTo(imageRef.current, 
      { 
        opacity: 0, 
        x: -100,
        rotateY: -15 
      },
      {
        opacity: 1,
        x: 0,
        rotateY: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );

    // Content animation
    gsap.fromTo(contentRef.current?.children, 
      { 
        opacity: 0, 
        y: 50,
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
          trigger: section,
          start: "top 70%",
        }
      }
    );

    // Skills animation
    gsap.fromTo(skillsRef.current?.children, 
      { 
        opacity: 0, 
        scale: 0.8,
        y: 30
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
        }
      }
    );

    // Profile image hover effect
    const profileImage = imageRef.current;
    if (profileImage) {
      profileImage.addEventListener('mouseenter', () => {
        gsap.to(profileImage, {
          scale: 1.05,
          rotateY: 5,
          duration: 0.4,
          ease: "power2.out"
        });
      });
      
      profileImage.addEventListener('mouseleave', () => {
        gsap.to(profileImage, {
          scale: 1,
          rotateY: 0,
          duration: 0.4,
          ease: "power2.out"
        });
      });
    }

  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div 
              ref={imageRef}
              className="relative w-80 h-80 rounded-full overflow-hidden glass p-2 cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              <div className="w-full h-full rounded-full bg-gradient-primary p-1">
                <img 
                  src="/lovable-uploads/9299ca8a-fbab-4ecb-b626-ca1361b10697.png"
                  alt="Sankar - Web Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-xl"></div>
            </div>
          </div>
          
          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate web developer specializing in creating immersive digital experiences 
                that blend cutting-edge technology with stunning visual design. With expertise in 
                modern frameworks and animation libraries, I transform ideas into interactive realities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From responsive web applications to complex 3D interactions, I craft solutions 
                that not only look incredible but perform flawlessly across all devices.
              </p>
            </div>
            
            {/* Skills Grid */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Skills & Technologies
              </h3>
              <div 
                ref={skillsRef}
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
              >
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="glass p-6 rounded-2xl hover:scale-105 transition-all duration-300 hover:shadow-glow-soft cursor-pointer group"
                  >
                    <div className="flex flex-col items-center space-y-3">
                      <skill.icon 
                        className={`w-8 h-8 text-${skill.color} group-hover:scale-110 transition-transform duration-300`}
                      />
                      <span className="text-foreground font-medium">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;