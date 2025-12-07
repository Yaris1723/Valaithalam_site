"use client";
import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
  }[];
  className?: string;
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn(
          "fixed top-4 inset-x-0 mx-auto flex w-[90%] max-w-6xl items-center justify-between rounded-2xl border border-gray-200 dark:border-white/[0.2] bg-white/80 dark:bg-black/70 backdrop-blur-md shadow-lg px-8  z-[5000]",
          className
        )}
      >
        {/* ✅ Left: Logo and Site Name */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png" // <-- replace with your logo path
            alt="Valaidhalam Logo"
            width={40}
            className="h-8 w-auto"
            priority
          />
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Valaidhalam
          </span>
        </Link>

        {/* ✅ Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((navItem, idx) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className="relative text-[1rem] text-neutral-700 dark:text-neutral-50 hover:text-primary dark:hover:text-primary transition font-medium"
            >
              {navItem.name}
            </Link>
          ))}
        </div>

        {/* ✅ Right: Call-to-Action Button */}
        <button className="border text-sm font-medium relative border-neutral-300 dark:border-white/[0.2] text-black dark:text-white px-6 py-2.5 rounded-full hover:bg-primary hover:text-white transition">
          <span>Book a Call</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
