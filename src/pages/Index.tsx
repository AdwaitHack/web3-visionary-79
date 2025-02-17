import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Star, Users, Rocket, ChartBar, MessageSquare, Target, LineChart, Shield, Send } from "lucide-react";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Create floating cubes
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

    // Add lights
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      cubes.forEach((cube) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
      });

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
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
      <div ref={containerRef} className="absolute inset-0 -z-10" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold gradient-text">TokenFlow</div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="hover:text-neon-blue transition-colors">Solutions</a>
              <a href="#about" className="hover:text-neon-blue transition-colors">About</a>
              <a href="#team" className="hover:text-neon-blue transition-colors">Team</a>
              <a href="#contact" className="hover:text-neon-blue transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
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
            <button className="bg-primary hover:bg-primary-light transition-colors px-8 py-4 rounded-full text-white font-semibold flex items-center mx-auto space-x-2 group">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Metrics Section */}
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

      {/* Solutions Section */}
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
                className="glass-card p-8 hover:border-neon-blue/50 transition-colors"
              >
                <h3 className="text-2xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-gray-400">{solution.description}</p>
                <ChevronRight className="w-6 h-6 text-neon-blue mt-4" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
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
                className="glass-card p-6 text-center"
              >
                <feature.icon className="w-10 h-10 mx-auto mb-4 text-neon-blue" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
                className="glass-card p-8 relative"
              >
                <Star className="absolute top-4 right-4 text-neon-blue w-6 h-6" />
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full mb-4"
                />
                <p className="text-lg mb-4 text-gray-300">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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

      {/* Team Section */}
      <section id="team" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-neon-blue mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-black/10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center"
              >
                <value.icon className="w-10 h-10 mx-auto mb-4 text-neon-blue" />
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card p-12 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 gradient-text">Let's Build Your Web3 Success Story</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to take your blockchain project to the next level? Let's connect and discuss how we can help you achieve your goals.
            </p>
            <button className="bg-primary hover:bg-primary-light transition-colors px-8 py-4 rounded-full text-white font-semibold flex items-center mx-auto space-x-2 group">
              <span>Contact Us</span>
              <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
