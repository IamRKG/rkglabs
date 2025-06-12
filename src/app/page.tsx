import { Metadata } from "next";
import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
// import { StatsSection } from "@/components/home/StatsSection";
import { SkillsPreview } from "@/components/home/SkillsPreview";
import { RecentWork } from "@/components/home/RecentWork";
import { CTASection } from "@/components/home/CTASection";

// Lazy load non-critical components
const AnimatedBackground = dynamic(() => import("@/components/ui/AnimatedBackground"), {
  ssr: true,
});

export const metadata: Metadata = {
  title: "Radhakrishnan Gopal - Distinguished Technical Architect & Full Stack Developer",
  description: "17+ years of driving innovation in enterprise software development across Fortune 500 companies. Specialized in React, Node.js, Cloud Architecture, and 3D Web Applications.",
  keywords: [
    "Technical Architect",
    "Full Stack Developer",
    "React",
    "Node.js",
    "Three.js",
    "AWS",
    "Cloud Architecture",
    "TypeScript",
    "Enterprise Software"
  ],
  authors: [{ name: "Radhakrishnan Gopal" }],
  creator: "Radhakrishnan Gopal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rkglabs.com",
    title: "Radhakrishnan Gopal - Distinguished Technical Architect",
    description: "17+ years of driving innovation in enterprise software development across Fortune 500 companies.",
    siteName: "RKG Labs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Radhakrishnan Gopal - Distinguished Technical Architect",
    description: "17+ years of driving innovation in enterprise software development across Fortune 500 companies.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Radhakrishnan Gopal",
    jobTitle: "Distinguished Technical Architect & Full Stack Developer",
    description: "17+ years of driving innovation in enterprise software development across Fortune 500 companies",
    url: "https://rkglabs.com",
    sameAs: [
      "https://linkedin.com/in/radhakrishnan-gopal",
      "https://github.com/rkgopal"
    ],
    knowsAbout: [
      "React",
      "Node.js",
      "TypeScript",
      "Three.js",
      "AWS",
      "Cloud Architecture",
      "Enterprise Software Development"
    ],
    alumniOf: "Fortune 500 Companies",
    hasOccupation: {
      "@type": "Occupation",
      name: "Technical Architect",
      occupationLocation: {
        "@type": "Place",
        name: "Global"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <Header />
      
      <main id="main-content" className="min-h-screen" role="main">
        <AnimatedBackground />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900">
          <HeroSection />
        </section>

        {/* Key Stats */}
        {/* <StatsSection /> */}

        {/* Skills Preview */}
        <SkillsPreview />

        {/* Recent Work */}
        <RecentWork />

        {/* CTA Section */}
        <CTASection />
      </main>
      
      <Footer />
    </>
  );
}
