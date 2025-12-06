'use client';

import React from "react";
import { Code, Globe, Users } from "lucide-react";
import GradualBlur from "@/components/ui/GradualBlur";
import SpotlightCard from "@/components/ui/SpotlightCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

const services = [
  {
    name: 'Full-Stack Development',
    description: 'From concept to launch, we deliver scalable and secure applications engineered for performance and reliability.',
    icon: Code,
  },
  {
    name: 'Web Application',
    description: 'We create intuitive, responsive web applications that captivate users and function flawlessly on any device.',
    icon: Globe,
  },
  {
    name: 'Social Media Management',
    description: "Our strategic social media management grows your brand's influence and converts followers into loyal customers.",
    icon: Users,
  },
];

const ServicesOverview = () => {
  return (
    <section className="section-spacing bg-gradient-to-b from-white to-neutral-50 relative" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <ScrollReveal animation="fade-up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-sm font-semibold tracking-wider text-primary uppercase mb-3">
              Our Services
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight mb-4 md:mb-6">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              We offer a range of services to help your business succeed in the digital landscape.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal
                key={service.name}
                animation="fade-up"
                delay={0.2 + index * 0.1}
                threshold={0.2}
              >
                <SpotlightCard
                  className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-neutral-100 h-full"
                  spotlightColor="rgba(0, 123, 255, 0.2)"
                >
                  {/* Gradient Border Effect on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-gradient-end/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.name}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
                    {service.description}
                  </p>

                  {/* Hover Arrow */}
                  <div className="mt-6 flex items-center text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-sm">Learn more</span>
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>

      {/* Gradual Blur Effect at Bottom */}
      <GradualBlur
        target="parent"
        position="bottom"
        height="6rem"
        strength={2}
        divCount={5}
        curve="bezier"
        opacity={0.85}
      />
    </section>
  );
};

export default ServicesOverview;
