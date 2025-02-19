import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { SkillsScene } from './components/SkillsScene';
import { ProjectCard } from './components/ProjectCard';
import Hero from './components/Hero';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-[#0f1729] to-[#0f172a]">
      {/* Hero Section */}
      <Hero />


      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text mb-4">Technical Skills</h2>
          <p className="text-gray-300 mb-12 max-w-2xl mx-auto">
            Expertise in modern web technologies and development tools, with a focus on creating scalable and efficient solutions.
          </p>
          <SkillsScene />
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            title="E-Commerce Platform"
            description="A full-stack e-commerce solution with real-time inventory management"
            image="https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            tags={['React', 'Node.js', 'MongoDB']}
          />
          {/* <ProjectCard
            title="AI Chat Application"
            description="Real-time chat application with AI-powered responses"
            image="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            tags={['Python', 'TensorFlow', 'WebSocket']}
          />
          <ProjectCard
            title="Cloud Infrastructure"
            description="Scalable cloud infrastructure setup with monitoring"
            image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            tags={['AWS', 'Terraform', 'Docker']}
          /> */}
        </div>
      </section>

      {/* Contact Section */}
      <footer className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-8">
            I'm always open to new opportunities and interesting projects.
          </p>
          <a
            href="mailto:muhammedyaseen533789@gmail.com"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Me
          </a>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;