import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "⚛",
      description: "Creating exceptional user experiences with modern frameworks",
      skills: ["React", "Angular", "Material-UI", "BaseUI", "Three.js", "WebGL", "Next.js", "TypeScript", "CSS-in-JS", "CSS Modules"]
    },
    {
      title: "Backend & APIs",
      icon: "🔧",
      description: "Building robust and scalable server-side solutions",
      skills: ["Node.js", "Express.js", "NestJS", "GraphQL", "RESTful APIs", "TypeORM", "JWT Authentication", "OAuth/OIDC"]
    },
    {
      title: "3D Applications",
      icon: "🎮",
      description: "Crafting immersive 3D experiences for the web",
      skills: ["React Three-Fiber", "Unreal Engine", "Pixel Streaming", "WebGL", "Three.js", "3D Web Experiences"]
    },
    {
      title: "Cloud & DevOps",
      icon: "☁",
      description: "Implementing cloud-native solutions and automation",
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD Pipelines", "ArgoCD", "Microservices"]
    },
    {
      title: "Databases",
      icon: "🗄",
      skills: ["PostgreSQL", "MongoDB", "Redis", "TypeORM", "Database Design", "Query Optimization"]
    },
    {
      title: "Architecture & Design",
      icon: "🏗",
      skills: ["Component-Driven Design", "State Management", "Redux", "RTK Query", "Zustand", "Design Systems"]
    },
    {
      title: "Testing & Quality",
      icon: "🧪",
      skills: ["Cypress", "Jest", "Vitest", "SonarQube", "Unit Testing", "Integration Testing", "TDD"]
    },
    {
      title: "Team Leadership",
      icon: "👥",
      skills: ["Mentorship", "Agile Practices", "Scrum", "SAFe", "HLD/LLD Creation", "Code Reviews"]
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-[#0A1120] via-[#111827] to-[#0A1120]">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
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

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
                <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  Technical Skills
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A comprehensive toolkit built over 17+ years of experience in enterprise software development,
                from frontend interfaces to cloud architecture.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {skillCategories.map((category, index) => (
                <div 
                  key={index} 
                  className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-emerald-500/20 p-8 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <span className="text-white text-2xl">{category.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                      <p className="text-sm text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center space-x-2 group/skill"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50 group-hover/skill:bg-emerald-400 transition-colors duration-200" />
                        <span className="text-gray-300 group-hover/skill:text-emerald-400 transition-colors duration-200">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Professional Competencies */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold mb-12 text-center">
                <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  Professional Competencies
                </span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: "🧠",
                    title: "Problem Solving",
                    description: "Strong analytical thinking for quick root cause analysis of complex technical challenges."
                  },
                  {
                    icon: "💬",
                    title: "Communication",
                    description: "Excellent collaboration skills, bridging gaps between DevOps, SRE, and business teams."
                  },
                  {
                    icon: "⚡",
                    title: "Agile Mindset",
                    description: "Ability to work effectively in fast-paced, Agile environments with changing requirements."
                  },
                  {
                    icon: "🔄",
                    title: "Automation",
                    description: "Passion for automation and DevOps best practices to improve efficiency and reliability."
                  }
                ].map((competency, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all duration-300"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-white text-2xl">{competency.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-emerald-400 mb-4 text-center">{competency.title}</h3>
                    <p className="text-gray-300 text-center">{competency.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}