"use client";

import { useState, useEffect, useCallback } from "react";

const BANNERS = [
  {
    title: "SportsTMS",
    subtitle: "Tournament Management Platform",
    description: "End-to-end sports tournament scheduling, scoring, and analytics",
    tags: ["SaaS", "Sports Tech", "Real-time"],
    gradient: "from-green-600 via-emerald-500 to-teal-400",
    icon: "🏆",
  },
  {
    title: "Expedify",
    subtitle: "AI-Powered CRM",
    description: "Intelligent customer relationship management with automation",
    tags: ["AI", "CRM", "Automation"],
    gradient: "from-blue-600 via-indigo-500 to-cyan-400",
    icon: "🤖",
  },
  {
    title: "BeeFYN",
    subtitle: "HealthTech Marketplace",
    description: "Connecting phlebotomists with diagnostic labs across India",
    tags: ["HealthTech", "Marketplace", "Logistics"],
    gradient: "from-amber-500 via-orange-500 to-yellow-400",
    icon: "🩺",
  },
  {
    title: "Konnifel",
    subtitle: "Research Internship Platform",
    description: "Bridging students with global research opportunities",
    tags: ["EdTech", "Marketplace", "Higher Ed"],
    gradient: "from-violet-600 via-purple-500 to-fuchsia-400",
    icon: "🎓",
  },
  {
    title: "BAF Consultants",
    subtitle: "Family Business Advisory",
    description: "India's leading family business consulting firm",
    tags: ["Corporate", "Consulting", "Brand"],
    gradient: "from-slate-600 via-gray-500 to-zinc-400",
    icon: "🏢",
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
      <div
        className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${banner.gradient} p-8 sm:p-12 transition-all duration-500 min-h-[280px] sm:min-h-[320px] flex flex-col justify-between`}
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
              backgroundSize: "60px 60px, 80px 80px",
            }}
          />
        </div>

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-black/10 rounded-full blur-2xl" />

        {/* Content */}
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl sm:text-4xl">{banner.icon}</span>
            <div>
              <p className="text-white/70 text-xs sm:text-sm font-medium uppercase tracking-wider">
                Case Study
              </p>
              <h3 className="text-white text-2xl sm:text-3xl font-bold">
                {banner.title}
              </h3>
            </div>
          </div>
          <p className="text-white/90 text-lg sm:text-xl font-medium mb-2">
            {banner.subtitle}
          </p>
          <p className="text-white/70 text-sm sm:text-base max-w-md">
            {banner.description}
          </p>
        </div>

        {/* Tags */}
        <div className="relative z-10 flex flex-wrap gap-2 mt-6">
          {banner.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
          aria-label="Previous"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
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
