import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function About() {
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
                  About Radhakrishnan Gopal
                </span>
              </h1>
            </div>

            {/* Professional Summary */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-emerald-500/20 p-8 sm:p-10 mb-12 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-white">Professional Summary</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Distinguished Technical Architect with 17+ years of experience driving innovation in 
                enterprise software development. Specializing in crafting and fine-tuning prompts to 
                optimize AI/LLM outputs for diverse use cases, including front-end, back-end, and API 
                development tasks.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-emerald-400">Full Stack Expertise</h3>
                  <ul className="space-y-4 text-gray-300">
                    {[
                      'Architecting modern SPAs using React 18, Next.js, and Angular',
                      'Advanced state management with Redux Toolkit, RTK Query',
                      'Building high-performance design systems',
                      'Creating immersive 3D web experiences'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-emerald-400">Leadership & Innovation</h3>
                  <ul className="space-y-4 text-gray-300">
                    {[
                      'Pioneering 3D web experiences via Unreal Engine 5',
                      'Leading cross-functional teams for Fortune 500 clients',
                      'Architecting cloud-native solutions',
                      'Driving technical excellence through CI/CD'
                    ].map((item, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-emerald-500/20 p-8 sm:p-10 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-10 text-white text-center">Core Values & Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    icon: "💡",
                    title: "Innovation",
                    description: "Continuously exploring new technologies and pushing boundaries"
                  },
                  {
                    icon: "🎯",
                    title: "Excellence",
                    description: "Delivering high-quality solutions that exceed expectations"
                  },
                  {
                    icon: "🤝",
                    title: "Collaboration",
                    description: "Building strong partnerships and fostering team growth"
                  }
                ].map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <span className="text-2xl">{value.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-emerald-400">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
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