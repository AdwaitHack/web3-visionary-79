import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Star, Users, Rocket, ChartBar, MessageSquare, Target, LineChart, Shield, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const contactFormRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshPhongMaterial({
      color: 0x7E69AB,
      transparent: true,
      opacity: 0.7,
    });

    const cubes: THREE.Mesh[] = [];
    
    for (let i = 0; i < 10; i++) {
      const cube = new THREE.Mesh(geometry, material);
      cube.position.set(
        Math.random() * 10 - 5,
        Math.random() * 10 - 5,
        Math.random() * 10 - 5
      );
      cube.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      scene.add(cube);
      cubes.push(cube);
    }

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      cubes.forEach((cube) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  const scrollToRef = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    console.log({
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    });

    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setShowContactForm(false);
  };

  const metrics = [
    { value: "150+", label: "Projects Launched" },
    { value: "$500M+", label: "Total Value Locked" },
    { value: "50+", label: "Partner Networks" },
    { value: "24/7", label: "Support Coverage" },
  ];

  const solutions = [
    {
      title: "Strategic Launch Planning",
      description: "Comprehensive pre and post-launch strategies tailored to your project's unique value proposition.",
    },
    {
      title: "Community Growth",
      description: "Building engaged communities through authentic narrative development.",
    },
    {
      title: "KOL Partnerships",
      description: "Curated influencer partnerships that align with your project values.",
    },
    {
      title: "Market Entry",
      description: "Technical and marketing advisory for successful token launches.",
    },
  ];

  const features = [
    {
      title: "Dedicated Personal Attention",
      description: "Hands-on founder involvement throughout your journey",
      icon: Users,
    },
    {
      title: "Agile Methodology",
      description: "Quick market adaptation and flexible strategies",
      icon: Rocket,
    },
    {
      title: "Deep Ecosystem Understanding",
      description: "Comprehensive knowledge of DeFi and CeFi landscapes",
      icon: ChartBar,
    },
    {
      title: "Sustainable Growth Focus",
      description: "Long-term metrics and sustainable expansion strategies",
      icon: LineChart,
    },
    {
      title: "Transparent Communication",
      description: "Clear reporting and open communication channels",
      icon: MessageSquare,
    },
  ];

  const testimonials = [
    {
      quote: "TokenFlow's strategic guidance was instrumental in our successful launch. Their deep understanding of the Web3 ecosystem is unmatched.",
      author: "Alex Chen",
      role: "CEO, DeFi Protocol",
      image: "https://api.dicebear.com/7.x/avatars/svg?seed=alex",
    },
    {
      quote: "Working with TokenFlow transformed our community engagement strategy. The results exceeded our expectations.",
      author: "Sarah Williams",
      role: "Head of Growth, NFT Platform",
      image: "https://api.dicebear.com/7.x/avatars/svg?seed=sarah",
    },
  ];

  const process = [
    {
      title: "Discovery & Strategy",
      description: "In-depth analysis of your project's goals and market positioning",
      icon: Target,
    },
    {
      title: "Implementation",
      description: "Execute tailored strategies with continuous optimization",
      icon: LineChart,
    },
    {
      title: "Scale & Grow",
      description: "Expand reach and enhance market presence sustainably",
      icon: Rocket,
    },
  ];

  const team = [
    {
      name: "Vinay",
      role: "Core Team",
      description: "Passionate about blockchain technology and Web3 innovation",
      image: "https://api.dicebear.com/7.x/avatars/svg?seed=vinay",
    },
    {
      name: "Leo Rex",
      role: "Core Team",
      description: "Expert in DeFi protocols and smart contract development",
      image: "https://api.dicebear.com/7.x/avatars/svg?seed=leo",
    },
    {
      name: "Usaid",
      role: "Core Team",
      description: "Focused on creating seamless user experiences in the Web3 space",
      image: "https://api.dicebear.com/7.x/avatars/svg?seed=usaid",
    },
    {
      name: "Alphazero",
      role: "Core Team",
      description: "Blockchain enthusiast with a passion for decentralized technologies",
      image: "https://api.dicebear.com/7.x/avatars/svg?seed=alpha",
    },
  ];

  const values = [
    {
      title: "Innovation First",
      description: "Constantly pushing boundaries",
      icon: Rocket,
    },
    {
      title: "Collaboration",
      description: "Success through teamwork",
      icon: Users,
    },
    {
      title: "User-Centric",
      description: "Prioritizing exceptional user experiences",
      icon: Target,
    },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute min-w-full min-h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="https://assets.production.linktr.ee/profile--collab-theme-assets/backgroundVideoDesktop.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 -z-10 bg-black/40" />
      
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold gradient-text">TokenFlow</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="hover:text-neon-blue transition-colors">Solutions</a>
              <button 
                onClick={() => scrollToRef(aboutRef)} 
                className="hover:text-neon-blue transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => navigate('/team')} 
                className="hover:text-neon-blue transition-colors"
              >
                Team
              </button>
              <button 
                onClick={() => {
                  setShowContactForm(true);
                  setTimeout(() => scrollToRef(contactFormRef), 100);
                }} 
                className="hover:text-neon-blue transition-colors"
              >
                Contact
              </button>
            </div>
            <button className="md:hidden text-white p-2">
              <MessageSquare className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center hero-gradient">
        <div className="container mx-auto px-6 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
              Navigating Web3 Success
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Empowering blockchain projects with data-driven growth strategies, community building, and comprehensive market penetration.
            </p>
            <button 
              onClick={() => {
                setShowContactForm(true);
                scrollToRef(contactFormRef);
              }}
              className="bg-primary hover:bg-primary-light transition-colors px-8 py-4 rounded-full text-white font-semibold flex items-center mx-auto space-x-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-2 gradient-text">{metric.value}</h3>
                <p className="text-gray-400">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Core Solutions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-300" />
                <div className="glass-card p-8 relative overflow-hidden border-0">
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold mb-4 group-hover:text-neon-blue transition-colors">{solution.title}</h3>
                    <p className="text-gray-400 mb-6">{solution.description}</p>
                    <ChevronRight className="w-6 h-6 text-neon-blue transform group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-300" />
                <div className="glass-card p-8 text-center relative overflow-hidden border-0">
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative z-10">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <feature.icon className="w-8 h-8 text-neon-blue transform group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 group-hover:text-neon-blue transition-colors">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Client Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-xl opacity-0 group-hover:opacity-20 transition-all duration-300" />
                <div className="glass-card p-8 relative overflow-hidden border-0">
                  <div className="absolute inset-0 bg-white/5 backdrop-blur-xl" />
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative z-10">
                    <Star className="absolute top-4 right-4 text-neon-blue w-6 h-6" />
                    <div className="flex items-center mb-6">
                      <div className="relative w-16 h-16 mr-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full rounded-full object-cover relative z-10 p-0.5"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-lg group-hover:text-neon-blue transition-colors">{testimonial.author}</p>
                        <p className="text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-lg text-gray-300 italic">{testimonial.quote}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Our Process</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass-card p-8 relative"
              >
                <div className="absolute -left-4 top-8 w-8 h-8 rounded-full bg-neon-blue flex items-center justify-center">
                  {index + 1}
                </div>
                <step.icon className="w-10 h-10 mb-4 text-neon-blue" />
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={aboutRef} className="py-20 bg-black/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">About TokenFlow</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300">
                TokenFlow is a leading Web3 consulting firm dedicated to empowering blockchain projects with comprehensive growth strategies and market expertise.
              </p>
              <p className="text-lg text-gray-300">
                Our team of experienced professionals combines deep technical knowledge with strategic insights to help your project succeed in the dynamic Web3 landscape.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-card p-8"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-neon-blue shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Trusted Expertise</h3>
                    <p className="text-gray-400">Years of experience in blockchain and Web3 technologies</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Target className="w-8 h-8 text-neon-blue shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Results-Driven</h3>
                    <p className="text-gray-400">Focused on delivering measurable outcomes for our clients</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={contactFormRef} className="py-20">
        <div className="container mx-auto px-6">
          {showContactForm ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-8 max-w-2xl mx-auto"
            >
              <h3 className="text-2xl font-bold mb-6 gradient-text text-center">Get in Touch</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-white/5 border-white/10"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="bg-white/5 border-white/10"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="How can we help you?"
                    className="bg-white/5 border-white/10 min-h-[120px]"
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Button type="submit" className="w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  <a
                    href="tel:+1234567890"
                    className="flex items-center justify-center space-x-2 px-4 py-2 rounded-md border border-neon-blue text-neon-blue hover:bg-neon-blue/10 transition-colors w-full sm:w-auto"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Us</span>
                  </a>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-card p-12 max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6 gradient-text">Let's Build Your Web3 Success Story</h2>
              <p className="text-xl text-gray-300 mb-8">
                Ready to take your blockchain project to the next level? Let's connect and discuss how we can help you achieve your goals.
              </p>
              <Button
                onClick={() => setShowContactForm(true)}
                className="bg-primary hover:bg-primary-light transition-colors px-8 py-6 rounded-full text-white font-semibold inline-flex items-center space-x-2 group"
              >
                <span>Contact Us</span>
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Index;
