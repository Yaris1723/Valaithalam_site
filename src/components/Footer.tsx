'use client';

import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Github, Linkedin } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    navigation: [
      { name: 'Home', href: '/' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'GitHub', icon: Github, href: '#' },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <ScrollReveal animation="fade-up" delay={0.1}>
            <div className="sm:col-span-2 md:col-span-1">
              <h3 className="text-2xl font-bold gradient-text mb-3">JM&L</h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Digital Excellence, Delivered.
              </p>
            </div>
          </ScrollReveal>

          {/* Navigation */}
          <ScrollReveal animation="fade-up" delay={0.2}>
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Navigation
              </h4>
              <ul className="space-y-3">
                {footerLinks.navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1 transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* Contact */}
          <ScrollReveal animation="fade-up" delay={0.3}>
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Contact
              </h4>
              <ul className="space-y-3 text-neutral-400">
                <li>
                  <a href="mailto:jailokdigitals@gmail.com" className="hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1 transform">
                    jailokdigitals@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+919487739484" className="hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1 transform">
                    +91 94877 39484
                  </a>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          {/* Legal */}
          <ScrollReveal animation="fade-up" delay={0.4}>
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-neutral-400 hover:text-primary transition-colors duration-300 inline-block hover:translate-x-1 transform"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Bottom Bar */}
        <ScrollReveal animation="fade-up" delay={0.5}>
          <div className="pt-8 border-t border-neutral-800 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4 order-2 md:order-1">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white hover:scale-110 hover:rotate-12 transition-all duration-300 touch-target"
                    aria-label={social.name}
                    style={{
                      animation: `fadeIn 0.5s ease-out ${0.6 + index * 0.1}s backwards`
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>

            {/* Copyright */}
            <p className="text-sm text-neutral-500 order-1 md:order-2">
              &copy; {currentYear} JM&L. All rights reserved.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;