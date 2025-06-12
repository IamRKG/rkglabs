"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Skill {
  title: string;
  description: string;
  icon: string;
  technologies: string[];
}

const skills: Skill[] = [
  {
    title: "Frontend Development",
    description: "Modern web applications with cutting-edge frameworks",
    icon: "⚛️",
    technologies: ["React", "Angular", "Vue.js", "TypeScript"]
  },
  {
    title: "3D Web Applications",
    description: "Immersive experiences with WebGL and 3D graphics",
    icon: "🎮",
    technologies: ["Three.js", "WebGL", "React Three Fiber"]
  },
  {
    title: "Cloud Architecture",
    description: "Scalable infrastructure and containerization",
    icon: "☁️",
    technologies: ["AWS", "Azure", "Kubernetes", "Docker"]
  },
  {
    title: "Backend Development",
    description: "Robust APIs and server-side solutions",
    icon: "🔧",
    technologies: ["Node.js", "Java", "GraphQL", "REST APIs"]
  },
  {
    title: "Team Leadership",
    description: "Mentoring teams and driving technical excellence",
    icon: "👥",
    technologies: ["Mentoring", "Architecture Design", "Best Practices"]
  },
  {
    title: "DevOps & Monitoring",
    description: "Performance optimization and system reliability",
    icon: "📊",
    technologies: ["Dynatrace", "OpenTelemetry", "CI/CD"]
  }
];

export function SkillsPreview() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-[#0A1120] via-[#111827] to-[#0A1120]" aria-labelledby="skills-heading">
      {/* Background Elements */}
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

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
              Core Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Specialized in modern web technologies, cloud architecture, and team leadership
          </p>
        </motion.div>

        <motion.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skills.map((skill) => (
            <motion.div 
              key={skill.title}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-emerald-500/10 hover:border-emerald-500/30 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-200">
                {skill.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4">
                {skill.title}
              </h3>
              
              <p className="text-gray-300 mb-6 text-lg">
                {skill.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {skill.technologies.slice(0, 3).map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-2 bg-emerald-500/10 text-emerald-400 text-sm rounded-lg border border-emerald-500/20"
                  >
                    {tech}
                  </span>
                ))}
                {skill.technologies.length > 3 && (
                  <span className="px-4 py-2 bg-gray-800 text-gray-400 text-sm rounded-lg border border-gray-700">
                    +{skill.technologies.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            href="/skills"
            className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-300"
          >
            Explore All Skills
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