import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

const Galaxy = () => {
  const galaxyRef = useRef();
  const [hover, setHover] = useState(false);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (galaxyRef.current) {
      galaxyRef.current.rotation.y = t * 0.02;
      galaxyRef.current.rotation.x = Math.sin(t / 10) * 0.1;

      if (hover) {
        galaxyRef.current.rotation.y += 0.02;
      }
    }
  });

  return (
    <group ref={galaxyRef} onPointerOver={() => setHover(true)} onPointerOut={() => setHover(false)}>
      <Stars radius={150} depth={100} count={8000} factor={5} saturation={0} fade speed={1} />
    </group>
  );
};

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Stars & Effects */}
      <div className="absolute inset-0 !z-0">
        <Canvas>
          <Galaxy />
        </Canvas>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center h-full text-center md:text-left px-6 ">
        {/* Profile Image */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="w-48 h-48">
          <div className="relative w-48 h-48">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse" style={{ filter: "blur(40px)" }} />
            <img
              src="https://media.discordapp.net/attachments/1105377358665498674/1341683701284601916/IMG_0276.jpg?ex=67b6e3d1&is=67b59251&hm=82a521d85ad51cffe58e614739036955c3fb66efff26b7b7792abb84d6e9e9fe&=&format=webp&width=334&height=350"
              alt="Profile"
              className="relative w-48 h-48 rounded-full object-cover border-4 border-purple-500/30"
            />
          </div>
        </motion.div>

        {/* Text Section */}

        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.3 }} 
          className="md:ml-10 mt-6 md:mt-0 text-white"
        >
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
            Muhammed Yaseen
          </h2>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text leading-tight">
            Front End Developer
          </h1>
          <p className="text-gray-300 text-xl mt-4">
            Building dynamic, responsive, and visually stunning user interfaces with modern frontend technologies and a keen eye for design.
          </p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 mt-6" // Added mt-6 to push it down
          >
            <a href="https://github.com" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:example@email.com" className="text-gray-300 hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
