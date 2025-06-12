"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  impact?: string;
  category: string;
}

const projects: Project[] = [
  {
    title: "Dynatrace Automation System",
    description: "Built custom processing rules integration for Dynatrace alerts to Slack and Microsoft Teams, reducing incident response time by 40% for Marriott International.",
    technologies: ["Dynatrace", "Node.js", "React", "Kubernetes", "OpenTelemetry"],
    impact: "40% faster incident response",
    category: "Enterprise Integration"
  },
  {
    title: "3D Web Application",
    description: "Developed immersive 3D application for neom.com using WebGL, Three.js, and Unreal Engine 5.2 Pixel Streaming with cloud infrastructure on AWS.",
    technologies: ["Three.js", "WebGL", "React", "Unreal Engine", "AWS"],
    impact: "Immersive user experience",
    category: "3D Development"
  }
];

export function RecentWork() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#0A1120] via-[#111827] to-[#0A1120] relative overflow-hidden" aria-labelledby="recent-work-heading">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/5 via-transparent to-transparent" />
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `
              linear-gradient(rgba(16, 185, 129, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(16, 185, 129, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
              Recent Highlights
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Key achievements and transformative projects that showcase innovation
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project) => (
            <motion.article 
              key={project.title}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 text-sm rounded-lg border border-emerald-500/20 mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-emerald-400 transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                {project.description}
              </p>
              
              {project.impact && (
                <div className="mb-6 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                  <p className="text-emerald-400 font-medium">
                    Impact: {project.impact}
                  </p>
                </div>
              )}
              
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-blue-500/10 text-blue-400 text-sm rounded-lg border border-blue-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="/experience"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-300"
          >
            View Full Experience
            <motion.svg 
              className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </motion.svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}