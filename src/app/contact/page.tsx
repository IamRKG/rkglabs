import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-[#0A1120] via-[#111827] to-[#0A1120]">
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
                  Let&apos;s Connect
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to discuss your next project or explore collaboration opportunities? 
                Let&apos;s build something extraordinary together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-emerald-500/20 p-8 hover:border-emerald-500/40 transition-all duration-300">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    {[
                      {
                        icon: "📍",
                        title: "Location",
                        content: "Chennai, India",
                        link: null
                      },
                      {
                        icon: "📞",
                        title: "Phone",
                        content: "+91 9884401698",
                        link: "tel:+919884401698"
                      },
                      {
                        icon: "✉️",
                        title: "Email",
                        content: "radhacreative@gmail.com",
                        link: "mailto:radhacreative@gmail.com"
                      }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-xl flex items-center justify-center">
                          <span className="text-white text-xl">{item.icon}</span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{item.title}</h3>
                          {item.link ? (
                            <a 
                              href={item.link}
                              className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-gray-300">{item.content}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-emerald-500/20 p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Availability</h2>
                  <div className="space-y-4">
                    {[
                      "Project Consultation",
                      "Technical Architecture",
                      "Team Leadership",
                      "Mentoring"
                    ].map((service, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-gray-300 font-medium">{service}</span>
                        <span className="px-4 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-medium border border-emerald-500/20">
                          Available
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-emerald-500/20 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send a Message</h2>
                
                <form className="space-y-6">
                  {[
                    { label: "Name", type: "text", placeholder: "Your full name" },
                    { label: "Email", type: "email", placeholder: "your.email@example.com" },
                    { 
                      label: "Subject",
                      type: "select",
                      options: [
                        "Project Consultation",
                        "Technical Architecture",
                        "Development Services",
                        "Mentoring & Training",
                        "Collaboration Opportunity",
                        "Other"
                      ]
                    },
                    { 
                      label: "Message",
                      type: "textarea",
                      placeholder: "Tell me about your project, requirements, or how I can help you..."
                    }
                  ].map((field, index) => (
                    <div key={index}>
                      <label className="block text-sm font-medium text-white mb-2">
                        {field.label} *
                      </label>
                      {field.type === "textarea" ? (
                        <textarea
                          required
                          rows={6}
                          className="w-full px-4 py-3 bg-gray-800 border border-emerald-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-gray-400"
                          placeholder={field.placeholder}
                        />
                      ) : field.type === "select" ? (
                        <select
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-emerald-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white"
                        >
                          <option value="">Select a subject</option>
                          {field.options?.map((option) => (
                            <option key={option} value={option.toLowerCase().replace(/ & /g, '-')}>
                              {option}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          type={field.type}
                          required
                          className="w-full px-4 py-3 bg-gray-800 border border-emerald-500/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-white placeholder-gray-400"
                          placeholder={field.placeholder}
                        />
                      )}
                    </div>
                  ))}

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>

                <div className="mt-8 pt-6 border-t border-emerald-500/20">
                  <p className="text-sm text-gray-400 text-center">
                    I typically respond within 24 hours. For urgent matters, please call directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}