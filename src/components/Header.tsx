"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setIsScrolled] = useState(false);
  const [, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  const isActiveLink = useCallback((href: string) => pathname === href, [pathname]);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    setIsScrolled(currentScrollY > 10);
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    let ticking = false;
    
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledHandleScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [handleScroll]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('#mobile-menu') && !target.closest('[aria-controls="mobile-menu"]')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "hidden";
      
      const firstFocusableElement = document.querySelector('#mobile-menu a') as HTMLElement;
      firstFocusableElement?.focus();
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

 ;

  const handleMobileMenuItemClick = useCallback(() => {
    setIsMenuOpen(false);
  }, []);


  return (
    <>
     <motion.header 
  className={cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0A1120] backdrop-blur-lg border-b border-emerald-500/20",
  )}
>
  <nav className="max-w-7xl mx-auto px-6">
    <div className="flex justify-between items-center h-20">
      {/* Logo with enhanced animation */}
      <Link href="/" className="flex items-center space-x-3 group">
        <motion.div 
          className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-emerald-400 via-emerald-500 to-blue-600"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-white font-bold text-xl group-hover:scale-110 transition-transform">R</span>
        </motion.div>
        <div className="flex flex-col">
          <span className="text-2xl font-bold text-white">RKG Labs</span>
          <span className="text-xs text-emerald-400/80 tracking-wider">INNOVATION HUB</span>
        </div>
      </Link>

      {/* Desktop Navigation with dynamic effects */}
      <div className="hidden md:flex items-center space-x-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-200 overflow-hidden",
              isActiveLink(item.href)
                ? "text-emerald-400" 
                : "text-gray-300 hover:text-emerald-400"
            )}
          >
            <span className="relative z-10">{item.name}</span>
            <motion.div
              className={cn(
                "absolute inset-0 rounded-xl -z-10",
                isActiveLink(item.href)
                  ? "bg-emerald-500/10"
                  : "bg-transparent hover:bg-emerald-500/5"
              )}
              layoutId="navBackground"
            />
          </Link>
        ))}
        
        <Link
          href="/contact"
          className="ml-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-emerald-500/20 hover:scale-105 transition-all duration-200"
        >
          Let&apos;s Connect
        </Link>
      </div>

      {/* Enhanced Mobile Menu Button */}
      <motion.button
        onClick={toggleMenu}
        className="md:hidden p-3 rounded-xl hover:bg-emerald-500/10 text-gray-300 hover:text-emerald-400 transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <HamburgerIcon isOpen={isMenuOpen} />
      </motion.button>
    </div>
  </nav>

  {/* Refined Mobile Menu */}
  <AnimatePresence>
    {isMenuOpen && (
      <>
        <motion.div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMenuOpen(false)}
        />
        
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-20 left-0 right-0 bg-[#0A1120] border-b border-emerald-500/20 md:hidden"
        >
          <nav className="max-w-7xl mx-auto px-6 py-4">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center py-3 text-sm font-medium",
                    isActiveLink(item.href)
                      ? "text-emerald-400" 
                      : "text-gray-300"
                  )}
                  onClick={handleMobileMenuItemClick}
                >
                  <span className="flex-1">{item.name}</span>
                  {isActiveLink(item.href) && (
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  )}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/contact"
              className="block py-3 text-emerald-400 font-medium hover:text-emerald-300 transition-colors duration-200"
              onClick={handleMobileMenuItemClick}
            >
              Let&apos;s Connect →
            </Link>
          </nav>
        </motion.div>
      </>
    )}
  </AnimatePresence>
</motion.header>


      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16" aria-hidden="true" />
    </>
  );
}

// Enhanced Animated hamburger icon component
function HamburgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-6 h-6 flex flex-col justify-center items-center">
      <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      
      {/* Top line */}
      <motion.div 
        className="w-5 h-0.5 bg-current origin-center"
        animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      
      {/* Middle line */}
      <motion.div 
        className="w-5 h-0.5 bg-current my-1 origin-center"
        animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      />
      
      {/* Bottom line */}
      <motion.div 
        className="w-5 h-0.5 bg-current origin-center"
        animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  );
}
