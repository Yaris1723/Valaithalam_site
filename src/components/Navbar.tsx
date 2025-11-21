"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Briefcase, Folder, Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", link: "/", icon: Home },
    { name: "Services", link: "/services", icon: Briefcase },
    { name: "Portfolio", link: "/portfolio", icon: Folder },
    { name: "Contact", link: "/contact", icon: Phone },
  ];

  const isActive = (path: string) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Navbar */}
      <nav
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${scrolled ? 'top-2' : 'top-4'
          }`}
      >
        <div className={`glassmorphism rounded-full px-6 py-3 shadow-lg border border-white/20 transition-all duration-300 ${scrolled ? 'shadow-xl' : ''
          }`}>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.link}
                  className={`flex items-center gap-2 px-5 py-2 rounded-full font-medium transition-all duration-300 ${isActive(item.link)
                      ? "text-white bg-primary shadow-md"
                      : "text-neutral-700 hover:text-primary hover:bg-white/50"
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-neutral-700 hover:bg-white/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 glassmorphism rounded-2xl p-4 shadow-xl border border-white/20 animate-[fadeIn_0.2s_ease-out]">
            <div className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.link}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${isActive(item.link)
                        ? "text-white bg-primary"
                        : "text-neutral-700 hover:bg-white/50"
                      }`}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
