'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import ScrollReveal from "@/components/ui/ScrollReveal";

const About = () => {
  const [projectCount, setProjectCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    // Counter animation for statistics
    const projectTarget = 100;
    const clientTarget = 50;
    const duration = 2000; // 2 seconds
    const steps = 60;
    const projectIncrement = projectTarget / steps;
    const clientIncrement = clientTarget / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setProjectCount(Math.min(Math.floor(projectIncrement * currentStep), projectTarget));
      setClientCount(Math.min(Math.floor(clientIncrement * currentStep), clientTarget));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-spacing bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image Section */}
          <ScrollReveal animation="fade-right" delay={0.2} className="order-2 lg:order-1">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-gradient-end/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/images/2456073.jpg"
                alt="Team working together"
                className="relative rounded-2xl shadow-xl w-full hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
                width={800}
                height={600}
              />
            </div>
          </ScrollReveal>

          {/* Text Section */}
          <ScrollReveal animation="fade-left" delay={0.3} className="order-1 lg:order-2 space-y-6">
            <div>
              <span className="inline-block text-sm font-semibold tracking-wider text-primary uppercase mb-3">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 leading-tight">
                A Partner in Your{' '}
                <span className="gradient-text">Digital Journey</span>
              </h2>
            </div>

            <p className="text-base md:text-lg text-neutral-600 leading-relaxed">
              Our mission is to empower businesses by creating impactful digital
              solutions. We believe in partnership, innovation, and a commitment
              to excellence, ensuring every project we undertake drives tangible
              value and success for our clients.
            </p>

            {/* Stats with Counter Animation */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <ScrollReveal animation="scale" delay={0.5}>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {projectCount}+
                  </div>
                  <div className="text-sm md:text-base text-neutral-600">Projects Delivered</div>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="scale" delay={0.6}>
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-bold text-primary">
                    {clientCount}+
                  </div>
                  <div className="text-sm md:text-base text-neutral-600">Happy Clients</div>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default About;
