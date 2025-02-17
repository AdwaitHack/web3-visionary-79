
import { motion } from "framer-motion";
import { Users, Rocket, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();

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
    <div className="min-h-screen bg-background pb-20">
      <nav className="fixed top-0 w-full z-50 glass-effect">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')} 
              className="text-xl font-bold gradient-text"
            >
              TokenFlow
            </button>
          </div>
        </div>
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
              whileHover={{ 
                scale: 1.05,
                rotateY: 10,
                translateZ: 20,
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity" />
              <div className="glass-card p-8 relative overflow-hidden backdrop-blur-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink rounded-full animate-spin-slow opacity-0 group-hover:opacity-100 transition-opacity" />
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover relative z-10 p-1"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-neon-blue font-semibold mb-3">{member.role}</p>
                  <p className="text-gray-300">{member.description}</p>
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
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                className="glass-card p-8 relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/20 via-neon-purple/20 to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                <div className="relative z-10">
                  <value.icon className="w-16 h-16 mx-auto mb-6 text-neon-blue transform group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
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
            className="bg-primary hover:bg-primary-light transition-colors px-8 py-6 rounded-full text-white font-semibold inline-flex items-center space-x-2 group"
          >
            Back to Home
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
