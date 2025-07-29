import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PaperPlaneTilt, GithubLogo, LinkedinLogo, EnvelopeSimple } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Form animation
    gsap.fromTo(formRef.current?.children, 
      { 
        opacity: 0, 
        x: -50,
        filter: "blur(5px)"
      },
      {
        opacity: 1,
        x: 0,
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

    // Social icons animation
    gsap.fromTo(socialsRef.current?.children, 
      { 
        opacity: 0, 
        scale: 0,
        rotation: 180
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: socialsRef.current,
          start: "top 80%",
        }
      }
    );

  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Animate submit button
    const submitBtn = e.currentTarget.querySelector('.submit-btn') as HTMLElement;
    if (submitBtn) {
      gsap.to(submitBtn, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
      });
    }
    
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="min-h-screen flex items-center py-20 px-6"
    >
      <div className="max-w-4xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 glass rounded-2xl border-glass-border focus:border-accent focus:outline-none focus:shadow-glow-soft transition-all duration-300 text-foreground placeholder-muted-foreground"
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 glass rounded-2xl border-glass-border focus:border-accent focus:outline-none focus:shadow-glow-soft transition-all duration-300 text-foreground placeholder-muted-foreground"
                  required
                />
              </div>
              
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 glass rounded-2xl border-glass-border focus:border-accent focus:outline-none focus:shadow-glow-soft transition-all duration-300 text-foreground placeholder-muted-foreground resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="submit-btn w-full btn-neon px-8 py-4 rounded-2xl text-lg font-medium inline-flex items-center justify-center space-x-3 transition-all duration-300"
              >
                <span>Send Message</span>
                <PaperPlaneTilt size={20} />
              </button>
            </form>
          </div>
          
          {/* Contact Info & Social */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative projects, 
                or just having a chat about the latest in web development.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 glass rounded-xl border-glass-border">
                  <EnvelopeSimple size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted-foreground">roalityzoro@gmail.com</p>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-medium mb-4 text-foreground">
                Follow Me
              </h4>
              <div ref={socialsRef} className="flex space-x-4">
                <a
                  href="#"
                  className="p-4 glass rounded-xl border-glass-border hover:border-accent hover:shadow-glow-soft transition-all duration-300 group"
                >
                  <GithubLogo 
                    size={24} 
                    className="text-foreground group-hover:text-accent transition-colors duration-300" 
                  />
                </a>
                <a
                  href="https://www.linkedin.com/in/dupana-sai-sankar-reddy-29b32a368/"
                  className="p-4 glass rounded-xl border-glass-border hover:border-accent hover:shadow-glow-soft transition-all duration-300 group"
                >
                  <LinkedinLogo 
                    size={24} 
                    className="text-foreground group-hover:text-accent transition-colors duration-300" 
                  />
                </a>
                <a
                  href="#"
                  className="p-4 glass rounded-xl border-glass-border hover:border-accent hover:shadow-glow-soft transition-all duration-300 group"
                >
                  <EnvelopeSimple 
                    size={24} 
                    className="text-foreground group-hover:text-accent transition-colors duration-300" 
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
