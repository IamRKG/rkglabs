"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#0A1120] via-[#111827] to-[#0A1120] flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px'
          }}
        />
        
        {/* Animated Glow */}
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(16, 185, 129, 0.3) 0%, transparent 50%)',
            backgroundSize: '100% 100%',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div 
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          <motion.div 
            className="mb-8"
            variants={itemVariants}
          >
            <span className="inline-block text-emerald-400 text-lg font-semibold tracking-wider mb-4">
              WELCOME TO MY PORTFOLIO
            </span>
            <h1 
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
            >
              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
                RKG
              </span>
            </h1>
          </motion.div>

          <motion.p 
            className="text-xl sm:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Distinguished Technical Architect & Full Stack Developer
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            17+ years of driving innovation in enterprise software development across Fortune 500 companies
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            variants={itemVariants}
          >
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-emerald-600 to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/20 overflow-hidden z-10"
            >
              <span className="relative z-10 flex items-center justify-center">
                Get In Touch
                <motion.svg 
                  className="ml-2 w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link
              href="/experience"
              className="px-8 py-4 border-2 border-emerald-500/30 text-gray-300 font-semibold rounded-lg hover:bg-emerald-500/10 hover:border-emerald-500/50 hover:text-white transition-all duration-300 hover:scale-105 z-10"
            >
              View Experience
            </Link>
          </motion.div>

          {/* Stats Section */}
          <motion.div 
            className="mt-16 flex justify-center gap-8 text-gray-400"
            variants={itemVariants}
          >
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-emerald-400">17+</span>
              <span className="text-sm">Years Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-emerald-400">20+</span>
              <span className="text-sm">Projects Delivered</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-emerald-400">100%</span>
              <span className="text-sm">Client Satisfaction</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}