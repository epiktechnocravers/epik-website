"use client";

import { useEffect, useState } from "react";

export default function HeroBanner() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className={`relative w-full h-full transition-opacity duration-1000 ${mounted ? "opacity-100" : "opacity-0"}`}>
      <svg viewBox="0 0 600 500" fill="none" className="w-full h-full">
        {/* Floating code editor window */}
        <g className="animate-float-slow">
          <rect x="80" y="40" width="280" height="200" rx="14" className="fill-accent/6 stroke-accent/15" strokeWidth="1.5" />
          <rect x="80" y="40" width="280" height="36" rx="14" className="fill-accent/10" />
          <circle cx="103" cy="58" r="5" className="fill-red-400/50" />
          <circle cx="120" cy="58" r="5" className="fill-yellow-400/50" />
          <circle cx="137" cy="58" r="5" className="fill-green-400/50" />
          {/* Code lines */}
          <rect x="100" y="92" width="55" height="7" rx="3.5" className="fill-accent/25" />
          <rect x="162" y="92" width="80" height="7" rx="3.5" className="fill-accent/12" />
          <rect x="115" y="109" width="100" height="7" rx="3.5" className="fill-accent/18" />
          <rect x="222" y="109" width="45" height="7" rx="3.5" className="fill-accent/10" />
          <rect x="115" y="126" width="70" height="7" rx="3.5" className="fill-accent/15" />
          <rect x="192" y="126" width="90" height="7" rx="3.5" className="fill-accent/08" />
          <rect x="130" y="143" width="120" height="7" rx="3.5" className="fill-accent/12" />
          <rect x="130" y="160" width="60" height="7" rx="3.5" className="fill-accent/20" />
          <rect x="115" y="177" width="40" height="7" rx="3.5" className="fill-accent/15" />
          <rect x="100" y="194" width="30" height="7" rx="3.5" className="fill-accent/25" />
          {/* Cursor blink */}
          <rect x="137" y="194" width="2" height="10" rx="1" className="fill-accent/60 animate-pulse" />
        </g>

        {/* Mobile phone mockup */}
        <g className="animate-float-medium">
          <rect x="400" y="80" width="120" height="210" rx="16" className="fill-accent/6 stroke-accent/15" strokeWidth="1.5" />
          <rect x="413" y="108" width="94" height="160" rx="4" className="fill-accent/08" />
          <rect x="438" y="88" width="44" height="7" rx="3.5" className="fill-accent/12" />
          {/* App content */}
          <rect x="423" y="118" width="74" height="10" rx="5" className="fill-accent/15" />
          <rect x="423" y="138" width="84" height="40" rx="6" className="fill-accent/10 stroke-accent/08" strokeWidth="1" />
          <rect x="423" y="188" width="38" height="38" rx="6" className="fill-accent/12" />
          <rect x="467" y="188" width="38" height="38" rx="6" className="fill-accent/08" />
          <rect x="423" y="236" width="84" height="6" rx="3" className="fill-accent/08" />
          <rect x="423" y="248" width="60" height="6" rx="3" className="fill-accent/06" />
        </g>

        {/* Dashboard / analytics card */}
        <g className="animate-float-fast">
          <rect x="240" y="270" width="260" height="170" rx="14" className="fill-accent/6 stroke-accent/15" strokeWidth="1.5" />
          {/* Mini chart */}
          <rect x="260" y="290" width="100" height="12" rx="6" className="fill-accent/15" />
          <polyline
            points="260,380 285,355 310,365 335,340 360,350 385,325 410,335 435,315 460,320 480,305"
            className="stroke-accent/30"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <polyline
            points="260,380 285,370 310,375 335,360 360,368 385,355 410,362 435,348 460,352 480,340"
            className="stroke-accent/15"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="4 4"
          />
          {/* Stats */}
          <rect x="260" y="400" width="65" height="24" rx="6" className="fill-accent/10" />
          <rect x="335" y="400" width="65" height="24" rx="6" className="fill-accent/10" />
          <rect x="410" y="400" width="65" height="24" rx="6" className="fill-accent/10" />
        </g>

        {/* Floating tech badges */}
        <g className="animate-float-medium">
          <rect x="30" y="280" width="80" height="34" rx="17" className="fill-accent/8 stroke-accent/15" strokeWidth="1" />
          <text x="48" y="302" className="fill-accent/40" fontSize="11" fontFamily="system-ui" fontWeight="500">React</text>
        </g>
        <g className="animate-float-slow">
          <rect x="60" y="340" width="90" height="34" rx="17" className="fill-accent/8 stroke-accent/15" strokeWidth="1" />
          <text x="73" y="362" className="fill-accent/40" fontSize="11" fontFamily="system-ui" fontWeight="500">Next.js</text>
        </g>
        <g className="animate-float-fast">
          <rect x="10" y="400" width="70" height="34" rx="17" className="fill-accent/8 stroke-accent/15" strokeWidth="1" />
          <text x="27" y="422" className="fill-accent/40" fontSize="11" fontFamily="system-ui" fontWeight="500">AWS</text>
        </g>
        <g className="animate-float-medium">
          <rect x="110" y="410" width="95" height="34" rx="17" className="fill-accent/8 stroke-accent/15" strokeWidth="1" />
          <text x="122" y="432" className="fill-accent/40" fontSize="11" fontFamily="system-ui" fontWeight="500">Python</text>
        </g>
        <g className="animate-float-slow">
          <rect x="530" y="310" width="60" height="34" rx="17" className="fill-accent/8 stroke-accent/15" strokeWidth="1" />
          <text x="545" y="332" className="fill-accent/40" fontSize="11" fontFamily="system-ui" fontWeight="500">AI</text>
        </g>
        <g className="animate-float-fast">
          <rect x="520" y="370" width="72" height="34" rx="17" className="fill-accent/8 stroke-accent/15" strokeWidth="1" />
          <text x="534" y="392" className="fill-accent/40" fontSize="11" fontFamily="system-ui" fontWeight="500">IoT</text>
        </g>

        {/* Connecting dots / network lines */}
        <circle cx="370" cy="60" r="4" className="fill-accent/20" />
        <circle cx="390" cy="300" r="4" className="fill-accent/15" />
        <circle cx="220" cy="260" r="4" className="fill-accent/15" />
        <line x1="370" y1="60" x2="400" y2="80" className="stroke-accent/10" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="360" y1="240" x2="390" y2="300" className="stroke-accent/08" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="220" y1="240" x2="220" y2="260" className="stroke-accent/08" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="220" y1="260" x2="240" y2="270" className="stroke-accent/08" strokeWidth="1" strokeDasharray="3 3" />

        {/* Glow orbs */}
        <circle cx="200" cy="150" r="80" className="fill-accent/3" />
        <circle cx="450" cy="350" r="60" className="fill-accent/3" />
      </svg>
    </div>
  );
}
