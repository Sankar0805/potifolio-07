import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, GithubLogo, Globe } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Modern e-commerce solution with 3D product visualization and smooth animations.",
      image: "/lovable-uploads/6c989b07-d56b-4873-b5ce-e3e5d7dc7183.png",
      tech: ["React", "Three.js", "GSAP", "Node.js"],
      color: "neon-cyan"
    },
    {
      id: 2,
      title: "Developer Tools Suite",
      description: "Comprehensive developer tools with interactive documentation and real-time collaboration.",
      image: "/lovable-uploads/4aac1efd-f6c8-4c9d-a4ae-a51d4ed4c772.png",
      tech: ["Next.js", "TypeScript", "WebRTC", "Prisma"],
      color: "neon-purple"
    },
    {
      id: 3,
      title: "AI Dashboard",
      description: "Intelligent analytics dashboard with machine learning insights and predictive modeling.",
      image: "/lovable-uploads/6c989b07-d56b-4873-b5ce-e3e5d7dc7183.png",
      tech: ["Vue.js", "Python", "TensorFlow", "D3.js"],
      color: "neon-orange"
    },
    {
      id: 4,
      title: "Social Media App",
      description: "Real-time social platform with advanced messaging and content sharing features.",
      image: "/lovable-uploads/4aac1efd-f6c8-4c9d-a4ae-a51d4ed4c772.png",
      tech: ["React Native", "Firebase", "WebSocket", "Redis"],
      color: "neon-pink"
    },
    {
      id: 5,
      title: "Blockchain Wallet",
      description: "Secure cryptocurrency wallet with DeFi integration and portfolio tracking.",
      image: "/lovable-uploads/6c989b07-d56b-4873-b5ce-e3e5d7dc7183.png",
      tech: ["Web3.js", "Solidity", "React", "MetaMask"],
      color: "neon-cyan"
    },
    {
      id: 6,
      title: "VR Experience",
      description: "Immersive virtual reality application for architectural visualization and training.",
      image: "/lovable-uploads/4aac1efd-f6c8-4c9d-a4ae-a51d4ed4c772.png",
      tech: ["A-Frame", "WebXR", "Blender", "Three.js"],
      color: "neon-purple"
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Cards animation
    gsap.fromTo(cardsRef.current?.children, 
      { 
        opacity: 0, 
        y: 100,
        scale: 0.8 
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          end: "bottom 20%",
        }
      }
    );

    // Setup hover animations for cards
    const cards = cardsRef.current?.children;
    if (cards) {
      Array.from(cards).forEach((card) => {
        const element = card as HTMLElement;
        
        element.addEventListener('mouseenter', () => {
          gsap.to(element, {
            y: -10,
            scale: 1.02,
            duration: 0.4,
            ease: "power2.out"
          });
        });
        
        element.addEventListener('mouseleave', () => {
          gsap.to(element, {
            y: 0,
            scale: 1,
            duration: 0.4,
            ease: "power2.out"
          });
        });
      });
    }

  }, []);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="min-h-screen py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work combining innovative design with cutting-edge technology
          </p>
        </div>
        
        {/* Projects Grid */}
        <div 
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass rounded-3xl overflow-hidden cursor-pointer group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                
                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-2 rounded-full glass border-glass-border hover:border-accent transition-all duration-300">
                    <GithubLogo size={20} className="text-foreground" />
                  </button>
                  <button className="p-2 rounded-full glass border-glass-border hover:border-accent transition-all duration-300">
                    <Globe size={20} className="text-foreground" />
                  </button>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <ArrowUpRight 
                    size={20} 
                    className={`text-${project.color} opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1`}
                  />
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs bg-secondary rounded-full text-foreground border border-glass-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;