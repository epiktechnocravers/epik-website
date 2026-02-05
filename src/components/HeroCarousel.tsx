"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const BANNERS = [
  {
    title: "SportsTMS",
    subtitle: "Tournament Management Platform",
    description: "End-to-end sports tournament scheduling, scoring, and analytics",
    tags: ["SaaS", "Sports Tech", "Real-time"],
    gradient: "from-green-600 via-emerald-500 to-teal-400",
    icon: "🏆",
    screenshot: "/screenshots/sportstms.jpg",
  },
  {
    title: "Expedify",
    subtitle: "AI-Powered CRM",
    description: "Intelligent customer relationship management with automation",
    tags: ["AI", "CRM", "Automation"],
    gradient: "from-blue-600 via-indigo-500 to-cyan-400",
    icon: "🤖",
    screenshot: "/screenshots/expedify.jpg",
  },
  {
    title: "BeeFYN",
    subtitle: "HealthTech Marketplace",
    description: "Connecting phlebotomists with diagnostic labs across India",
    tags: ["HealthTech", "Marketplace", "Logistics"],
    gradient: "from-amber-500 via-orange-500 to-yellow-400",
    icon: "🩺",
    screenshot: "/screenshots/beefyn.jpg",
  },
  {
    title: "Konnifel",
    subtitle: "Research Internship Platform",
    description: "Bridging students with global research opportunities",
    tags: ["EdTech", "Marketplace", "Higher Ed"],
    gradient: "from-violet-600 via-purple-500 to-fuchsia-400",
    icon: "🎓",
    screenshot: "/screenshots/konnifel.jpg",
  },
  {
    title: "BAF Consultants",
    subtitle: "Family Business Advisory",
    description: "India's leading family business consulting firm",
    tags: ["Corporate", "Consulting", "Brand"],
    gradient: "from-slate-600 via-gray-500 to-zinc-400",
    icon: "🏢",
    screenshot: "/screenshots/bafconsultants.jpg",
  },
  {
    title: "Bachon Ka Adda",
    subtitle: "Kids Toy Store",
    description: "Safe, certified toys with COD, free delivery, and easy returns",
    tags: ["Shopify", "E-commerce", "D2C"],
    gradient: "from-pink-500 via-rose-500 to-red-400",
    icon: "🧸",
    screenshot: "/screenshots/bachonkaadda.jpg",
  },
  {
    title: "Swatti Kapoor",
    subtitle: "Designer Fashion Label",
    description: "Premium Indian fashion — kurtas, dresses, and cultural collections",
    tags: ["Shopify", "Fashion", "D2C"],
    gradient: "from-violet-500 via-purple-500 to-fuchsia-400",
    icon: "👗",
    screenshot: "/screenshots/swattikapoor.jpg",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % BANNERS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + BANNERS.length) % BANNERS.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [isHovered, next]);

  const banner = BANNERS[current];

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Banner */}
      <div className="relative overflow-hidden rounded-2xl min-h-[280px] sm:min-h-[340px] flex flex-col justify-end">
        {/* Screenshot background */}
        <Image
          src={banner.screenshot}
          alt={banner.title}
          fill
          className="object-cover object-top transition-all duration-700"
          sizes="(max-width: 768px) 100vw, 1200px"
          priority
        />

        {/* Gradient overlay for text readability */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10`} />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl sm:text-3xl">{banner.icon}</span>
            <div>
              <p className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider">
                Case Study
              </p>
              <h3 className="text-white text-xl sm:text-2xl font-bold">
                {banner.title}
              </h3>
            </div>
          </div>
          <p className="text-white/80 text-sm sm:text-base font-medium mb-1">
            {banner.subtitle}
          </p>
          <p className="text-white/60 text-xs sm:text-sm max-w-md mb-4">
            {banner.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {banner.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 rounded-full bg-white/15 text-white/80 backdrop-blur-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors backdrop-blur-sm z-10"
          aria-label="Previous"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 hover:bg-black/50 text-white flex items-center justify-center transition-colors backdrop-blur-sm z-10"
          aria-label="Next"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {BANNERS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current
                ? "bg-accent w-6"
                : "bg-border hover:bg-border-light"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
