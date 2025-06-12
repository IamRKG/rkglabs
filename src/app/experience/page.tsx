import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Experience() {
  const experiences = [
    {
      company: "KMC CORP",
      client: "Marriott International",
      role: "Technical Architect",
      location: "Chennai",
      period: "April 2024 – Present",
      achievements: [
        "Automated Dynatrace Alerting System – Built a custom processing rules integration for Dynatrace alerts to Slack and Microsoft Teams, reducing incident response time by 40%",
        "Kubernetes Observability Setup – Configured OpenTelemetry tracing with Dynatrace for distributed microservices, enhancing system observability",
        "Cloud Cost Optimization – Leveraged monitoring data to optimize AWS/Azure cloud resources, reducing costs by 20%",
        "Grail & DQL Dashboarding – Created advanced dashboards using Dynatrace Grail and DQL, improving log analytics and anomaly detection by 30%",
        "Crafting and fine-tuning prompts to optimize AI/LLM outputs for diverse use cases, including front-end, back-end, and API development tasks",
        "Developed modern React applications using Vite, employing dynamic form rendering with JSON Forms and JSON Schema"
      ],
      technologies: ["React", "Vite", "Material-UI", "BaseUI", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Dynatrace", "OpenTelemetry", "Kubernetes", "AWS", "Azure"]
    },
    {
      company: "Ignite IPA",
      role: "UI/UX / Node.js Architect",
      location: "Chennai",
      period: "Sep 2023 – Jan 2024",
      achievements: [
        "Leveraged Next.js to implement both Server-Side Rendering (SSR) and Client-Side Rendering (CSR) patterns",
        "Developed comprehensive High-Level Design (HLD) and Low-Level Design (LLD) documentation",
        "Architected a component-driven system using Next.js, React.js, Ant Design (AntD), Redux Toolkit, RTK Query",
        "Optimized application performance and API interactions by implementing RTK Query",
        "Established a unit testing framework for the existing Next.js codebase using Vitest",
        "Provided technical leadership by mentoring junior developers"
      ],
      technologies: ["Next.js", "React.js", "Ant Design", "Redux Toolkit", "RTK Query", "Vitest", "TypeScript", "Zod"]
    },
    {
      company: "TechMahindra",
      role: "Lead Developer / Architect",
      location: "Chennai",
      period: "Apr 2019 – Sep 2023",
      achievements: [
        "Developed a 3D application for neom.com using WebGL, Three.js, React, React Three-Fiber, TypeScript, and Unreal Engine 5.2 Pixel Streaming",
        "Integrated Match Maker service and Signaling web server hosted on AWS Cloud, Docker, Kubernetes, and ArgoCD",
        "Designed component-driven architecture to address challenges in the 3D product industry",
        "Created industrial diagrams using JointJS and AntV for bakerhughes.com",
        "Contributed to microservices-based enterprise product for Baker Hughes using Docker, Kubernetes, Angular",
        "Developed Node.js REST APIs and GraphQL services using Azure Functions, API Management, App Service"
      ],
      technologies: ["WebGL", "Three.js", "React", "React Three-Fiber", "Unreal Engine 5", "TypeScript", "AWS", "Docker", "Kubernetes", "Angular", "Node.js", "GraphQL", "Azure"]
    },
    {
      company: "Ford Motor Company",
      role: "Project Lead",
      location: "Chennai",
      period: "Jan 2014 – Apr 2019",
      achievements: [
        "Worked in a Full Stack Environment, utilizing Backend technologies such as Java, JPA, JPQL, EclipseLink",
        "Developed REST APIs using Node.js, Express, Angular, and MongoDB",
        "Created responsive web applications and RWD (Responsive Web Design) apps",
        "Conducted unit testing using Jasmine and Karma to ensure code quality",
        "Promoted and implemented Test-Driven Development (TDD) practices",
        "Developed a QR Code Scanner web app using HTML5 WebRTC technology",
        "Successfully delivered four projects: TFOAMS, WIPS, Purchasing Desktop, and Tool Tag"
      ],
      technologies: ["Java", "JPA", "Node.js", "Express", "Angular", "MongoDB", "HTML5", "CSS", "JavaScript", "Jasmine", "Karma"]
    },
    {
      company: "HCL Technologies",
      role: "Senior Interaction Designer",
      location: "Chennai",
      period: "Feb 2012 – Jan 2014",
      achievements: [
        "Delivered Information Architecture (IA), wireframes, visual design, HTML prototypes",
        "Utilized jQuery and JavaScript for dynamic functionality and development support",
        "Applied usability concepts to improve user experience",
        "Designed the visual interface for the NIC portal",
        "Ensured application and code compliance with W3C standards",
        "Provided solutions to development team for jQuery and JavaScript issues"
      ],
      technologies: ["jQuery", "JavaScript", "HTML", "CSS", "W3C Standards", "UI/UX Design"]
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
                  Professional Experience
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                17+ years of driving innovation in enterprise software development across Fortune 500 companies
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-emerald-500/20 p-8 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                    <div className="mb-4 lg:mb-0">
                      <h2 className="text-2xl font-bold text-white mb-2">
                        {exp.company}
                        {exp.client && (
                          <span className="text-emerald-400 ml-2">
                            (Client - {exp.client})
                          </span>
                        )}
                      </h2>
                      <h3 className="text-xl font-semibold text-emerald-400 mb-2">{exp.role}</h3>
                      <p className="text-gray-400">{exp.location}</p>
                    </div>
                    <div className="bg-emerald-500/10 text-emerald-400 px-6 py-2 rounded-lg text-sm font-medium border border-emerald-500/20">
                      {exp.period}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                    <ul className="space-y-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start space-x-3 text-gray-300">
                          <span className="w-1.5 h-1.5 mt-2 rounded-full bg-emerald-500 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-4">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-emerald-500/10 text-emerald-400 text-sm rounded-lg border border-emerald-500/20 hover:bg-emerald-500/20 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Awards Section */}
            <div className="mt-20">
              <h2 className="text-3xl font-bold mb-12 text-center">
                <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-blue-600 bg-clip-text text-transparent">
                  Awards & Recognition
                </span>
              </h2>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-emerald-500/20 p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-3xl">🏆</span>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Best AngularJS Trainer</h3>
                <p className="text-gray-400 mb-2">Ford Motor Company • 2019</p>
                <p className="text-gray-300">Recognized for excellence in team development and technical mentorship.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}