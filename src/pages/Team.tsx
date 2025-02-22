import { motion } from "framer-motion";
import { Users, Rocket, Target, Linkedin, Github, Twitter, Mail, X, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Team = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const team = [
    {
      name: "Vinay",
      role: "Core Team",
      description: "Passionate about blockchain technology and Web3 innovation",
      image: "https://api.dicebear.com/7.x/avatars/svg?seed=vinay",
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
        email: "mailto:vinay@tokenflow.com"
      }
    },
    {
      name: "Leo Rex",
      role: "Core Team",
      description: "Expert in DeFi protocols and smart contract development",
      image: "https://api.dicebear.com/7.x/avatars/svg?seed=leo",
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
        email: "mailto:leo@tokenflow.com"
      }
    },
    {
      name: "Usaid",
      role: "Core Team",
      description: "Focused on creating seamless user experiences in the Web3 space",
      image: "https://api.dicebear.com/7.x/avatars/svg?seed=usaid",
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
        email: "mailto:usaid@tokenflow.com"
      }
    },
    {
      name: "Alphazero",
      role: "Core Team",
      description: "Blockchain enthusiast with a passion for decentralized technologies",
      image: "https://api.dicebear.com/7.x/avatars/svg?seed=alpha",
      socials: {
        linkedin: "https://linkedin.com",
        github: "https://github.com",
        twitter: "https://twitter.com",
        email: "mailto:alpha@tokenflow.com"
      }
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="bg-gradient-to-r from-neon-purple/10 via-primary/10 to-neon-blue/10 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between h-16">
              <button 
                onClick={() => navigate('/')} 
                className="text-xl font-bold gradient-text hover:opacity-80 transition-opacity"
              >
                TokenFlow Consulting
              </button>

              <button 
                onClick={toggleMobileMenu}
                className="p-2 text-gray-200 hover:text-neon-blue transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <MessageSquare className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isMobileMenuOpen ? 1 : 0, y: isMobileMenuOpen ? 0 : -10 }}
          transition={{ duration: 0.2 }}
          className={`absolute top-16 left-0 right-0 bg-gradient-to-b from-black/95 to-primary/20 backdrop-blur-lg border-b border-white/10 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        >
          <div className="container mx-auto px-6 py-6">
            <button 
              onClick={() => {
                navigate('/');
                toggleMobileMenu();
              }}
              className="w-full text-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 hover:from-neon-blue/30 hover:to-neon-purple/30 rounded-full transition-all duration-300 border border-neon-blue/50 hover:border-neon-purple/50"
            >
              Back to Home
            </button>
          </div>
        </motion.div>
      </nav>

      <div className="container mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Industry experts passionate about driving Web3 innovation and success
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/30 to-neon-pink/30 rounded-xl blur-[2px]" />
              <div className="glass-card p-8 relative overflow-hidden border border-white/10 rounded-xl backdrop-blur-xl bg-black/30">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] to-transparent opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="relative z-10">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-full opacity-20 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover relative z-10 p-1"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-blue transition-colors">{member.name}</h3>
                  <p className="text-neon-blue font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300 mb-6">{member.description}</p>
                  
                  <div className="flex justify-center space-x-4">
                    <a 
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <Linkedin className="w-5 h-5 text-[#0A66C2] group-hover:scale-110 transition-transform" />
                    </a>
                    <a 
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <Github className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
                    </a>
                    <a 
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <Twitter className="w-5 h-5 text-[#1DA1F2] group-hover:scale-110 transition-transform" />
                    </a>
                    <a 
                      href={member.socials.email}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors group"
                    >
                      <Mail className="w-5 h-5 text-[#EA4335] group-hover:scale-110 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold gradient-text mb-16">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/30 to-neon-pink/30 rounded-xl blur-[2px]" />
                <div className="glass-card p-8 relative overflow-hidden border border-white/10 rounded-xl backdrop-blur-xl bg-black/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.1] to-transparent opacity-50" />
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="relative z-10">
                    <value.icon className="w-16 h-16 mx-auto mb-6 text-neon-blue transform group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-neon-blue transition-colors">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <Button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 hover:from-neon-blue/30 hover:to-neon-purple/30 transition-all duration-300 px-8 py-6 rounded-full text-white font-semibold inline-flex items-center space-x-2 border border-neon-blue/50 hover:border-neon-purple/50"
          >
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
