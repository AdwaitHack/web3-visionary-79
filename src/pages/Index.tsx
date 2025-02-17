
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

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
    </div>
  );
};

export default Index;
