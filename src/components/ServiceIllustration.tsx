export default function ServiceIllustration({
  icon,
  className = "",
}: {
  icon: string;
  className?: string;
}) {
  const illustrations: Record<string, React.ReactNode> = {
    globe: (
      // Web Development - browser with code
      <svg viewBox="0 0 400 300" fill="none" className={className}>
        <rect x="40" y="30" width="320" height="220" rx="12" className="fill-accent/5 stroke-accent/20" strokeWidth="2" />
        <rect x="40" y="30" width="320" height="40" rx="12" className="fill-accent/10" />
        <rect x="40" y="58" width="320" height="2" className="fill-accent/10" />
        <circle cx="65" cy="50" r="6" className="fill-red-400/60" />
        <circle cx="85" cy="50" r="6" className="fill-yellow-400/60" />
        <circle cx="105" cy="50" r="6" className="fill-green-400/60" />
        <rect x="140" y="42" width="160" height="16" rx="8" className="fill-accent/5 stroke-accent/10" strokeWidth="1" />
        {/* Code lines */}
        <rect x="70" y="85" width="80" height="8" rx="4" className="fill-accent/30" />
        <rect x="90" y="105" width="120" height="8" rx="4" className="fill-accent/15" />
        <rect x="90" y="125" width="100" height="8" rx="4" className="fill-accent/20" />
        <rect x="110" y="145" width="140" height="8" rx="4" className="fill-accent/10" />
        <rect x="110" y="165" width="80" height="8" rx="4" className="fill-accent/25" />
        <rect x="90" y="185" width="60" height="8" rx="4" className="fill-accent/15" />
        <rect x="70" y="205" width="40" height="8" rx="4" className="fill-accent/30" />
        {/* React logo */}
        <circle cx="300" cy="160" r="35" className="stroke-accent/20" strokeWidth="1.5" fill="none" />
        <ellipse cx="300" cy="160" rx="35" ry="14" className="stroke-accent/30" strokeWidth="1.5" fill="none" />
        <ellipse cx="300" cy="160" rx="35" ry="14" className="stroke-accent/30" strokeWidth="1.5" fill="none" transform="rotate(60 300 160)" />
        <ellipse cx="300" cy="160" rx="35" ry="14" className="stroke-accent/30" strokeWidth="1.5" fill="none" transform="rotate(-60 300 160)" />
        <circle cx="300" cy="160" r="5" className="fill-accent/40" />
      </svg>
    ),
    phone: (
      // Mobile - phone with app
      <svg viewBox="0 0 400 300" fill="none" className={className}>
        <rect x="130" y="20" width="140" height="260" rx="20" className="fill-accent/5 stroke-accent/20" strokeWidth="2" />
        <rect x="145" y="50" width="110" height="200" rx="4" className="fill-accent/8" />
        <rect x="175" y="30" width="50" height="8" rx="4" className="fill-accent/15" />
        {/* App UI elements */}
        <rect x="155" y="62" width="90" height="12" rx="6" className="fill-accent/20" />
        <rect x="155" y="86" width="100" height="50" rx="8" className="fill-accent/10 stroke-accent/15" strokeWidth="1" />
        <rect x="155" y="148" width="45" height="45" rx="8" className="fill-accent/15" />
        <rect x="208" y="148" width="45" height="45" rx="8" className="fill-accent/10" />
        <rect x="155" y="205" width="100" height="8" rx="4" className="fill-accent/10" />
        <rect x="155" y="220" width="70" height="8" rx="4" className="fill-accent/8" />
        {/* Floating elements */}
        <rect x="30" y="80" width="80" height="60" rx="10" className="fill-accent/8 stroke-accent/15" strokeWidth="1.5" />
        <text x="50" y="115" className="fill-accent/40" fontSize="10" fontFamily="monospace">Swift</text>
        <rect x="290" y="120" width="80" height="60" rx="10" className="fill-accent/8 stroke-accent/15" strokeWidth="1.5" />
        <text x="303" y="155" className="fill-accent/40" fontSize="10" fontFamily="monospace">Kotlin</text>
        <circle cx="60" cy="200" r="25" className="fill-accent/5 stroke-accent/15" strokeWidth="1.5" />
        <text x="44" y="204" className="fill-accent/30" fontSize="9" fontFamily="monospace">RN</text>
        <circle cx="340" cy="70" r="25" className="fill-accent/5 stroke-accent/15" strokeWidth="1.5" />
        <text x="325" y="74" className="fill-accent/30" fontSize="8" fontFamily="monospace">Flutter</text>
      </svg>
    ),
    layers: (
      // E-commerce / SaaS - dashboard
      <svg viewBox="0 0 400 300" fill="none" className={className}>
        {/* Dashboard frame */}
        <rect x="30" y="30" width="340" height="240" rx="12" className="fill-accent/5 stroke-accent/20" strokeWidth="2" />
        {/* Sidebar */}
        <rect x="30" y="30" width="80" height="240" rx="12" className="fill-accent/8" />
        <rect x="45" y="55" width="50" height="8" rx="4" className="fill-accent/25" />
        <rect x="45" y="80" width="40" height="6" rx="3" className="fill-accent/15" />
        <rect x="45" y="100" width="45" height="6" rx="3" className="fill-accent/10" />
        <rect x="45" y="120" width="35" height="6" rx="3" className="fill-accent/10" />
        <rect x="45" y="140" width="42" height="6" rx="3" className="fill-accent/10" />
        {/* Cards */}
        <rect x="125" y="50" width="110" height="65" rx="8" className="fill-accent/10 stroke-accent/15" strokeWidth="1" />
        <rect x="140" y="62" width="50" height="6" rx="3" className="fill-accent/20" />
        <text x="140" y="95" className="fill-accent/40" fontSize="20" fontWeight="bold">₹2.4L</text>
        <rect x="250" y="50" width="110" height="65" rx="8" className="fill-accent/10 stroke-accent/15" strokeWidth="1" />
        <rect x="265" y="62" width="40" height="6" rx="3" className="fill-accent/20" />
        <text x="265" y="95" className="fill-accent/40" fontSize="20" fontWeight="bold">1,247</text>
        {/* Chart */}
        <rect x="125" y="130" width="235" height="120" rx="8" className="fill-accent/5 stroke-accent/10" strokeWidth="1" />
        <polyline points="140,230 170,200 200,210 230,180 260,190 290,160 320,170 345,140" className="stroke-accent/40" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points="140,230 170,215 200,220 230,200 260,210 290,195 320,205 345,185" className="stroke-accent/20" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="4 4" />
      </svg>
    ),
    brain: (
      // AI - neural network
      <svg viewBox="0 0 400 300" fill="none" className={className}>
        {/* Neural network nodes */}
        {/* Input layer */}
        <circle cx="70" cy="80" r="15" className="fill-accent/10 stroke-accent/25" strokeWidth="2" />
        <circle cx="70" cy="150" r="15" className="fill-accent/10 stroke-accent/25" strokeWidth="2" />
        <circle cx="70" cy="220" r="15" className="fill-accent/10 stroke-accent/25" strokeWidth="2" />
        {/* Hidden layer 1 */}
        <circle cx="170" cy="60" r="15" className="fill-accent/15 stroke-accent/30" strokeWidth="2" />
        <circle cx="170" cy="130" r="15" className="fill-accent/15 stroke-accent/30" strokeWidth="2" />
        <circle cx="170" cy="200" r="15" className="fill-accent/15 stroke-accent/30" strokeWidth="2" />
        <circle cx="170" cy="260" r="15" className="fill-accent/10 stroke-accent/20" strokeWidth="2" />
        {/* Hidden layer 2 */}
        <circle cx="270" cy="90" r="15" className="fill-accent/20 stroke-accent/35" strokeWidth="2" />
        <circle cx="270" cy="170" r="15" className="fill-accent/20 stroke-accent/35" strokeWidth="2" />
        <circle cx="270" cy="240" r="15" className="fill-accent/15 stroke-accent/25" strokeWidth="2" />
        {/* Output */}
        <circle cx="350" cy="150" r="20" className="fill-accent/25 stroke-accent/40" strokeWidth="2.5" />
        {/* Connections */}
        <line x1="85" y1="80" x2="155" y2="60" className="stroke-accent/12" strokeWidth="1" />
        <line x1="85" y1="80" x2="155" y2="130" className="stroke-accent/12" strokeWidth="1" />
        <line x1="85" y1="80" x2="155" y2="200" className="stroke-accent/8" strokeWidth="1" />
        <line x1="85" y1="150" x2="155" y2="60" className="stroke-accent/10" strokeWidth="1" />
        <line x1="85" y1="150" x2="155" y2="130" className="stroke-accent/15" strokeWidth="1.5" />
        <line x1="85" y1="150" x2="155" y2="200" className="stroke-accent/12" strokeWidth="1" />
        <line x1="85" y1="220" x2="155" y2="130" className="stroke-accent/8" strokeWidth="1" />
        <line x1="85" y1="220" x2="155" y2="200" className="stroke-accent/12" strokeWidth="1" />
        <line x1="85" y1="220" x2="155" y2="260" className="stroke-accent/10" strokeWidth="1" />
        <line x1="185" y1="60" x2="255" y2="90" className="stroke-accent/15" strokeWidth="1.5" />
        <line x1="185" y1="60" x2="255" y2="170" className="stroke-accent/8" strokeWidth="1" />
        <line x1="185" y1="130" x2="255" y2="90" className="stroke-accent/12" strokeWidth="1" />
        <line x1="185" y1="130" x2="255" y2="170" className="stroke-accent/15" strokeWidth="1.5" />
        <line x1="185" y1="200" x2="255" y2="170" className="stroke-accent/12" strokeWidth="1" />
        <line x1="185" y1="200" x2="255" y2="240" className="stroke-accent/10" strokeWidth="1" />
        <line x1="185" y1="260" x2="255" y2="240" className="stroke-accent/12" strokeWidth="1" />
        <line x1="285" y1="90" x2="330" y2="150" className="stroke-accent/20" strokeWidth="2" />
        <line x1="285" y1="170" x2="330" y2="150" className="stroke-accent/25" strokeWidth="2" />
        <line x1="285" y1="240" x2="330" y2="150" className="stroke-accent/15" strokeWidth="1.5" />
        {/* Pulse dots */}
        <circle cx="200" cy="95" r="3" className="fill-accent/40" />
        <circle cx="230" cy="140" r="3" className="fill-accent/30" />
        <circle cx="310" cy="130" r="3" className="fill-accent/35" />
      </svg>
    ),
    cpu: (
      // IoT - circuit board with devices
      <svg viewBox="0 0 400 300" fill="none" className={className}>
        {/* Central chip */}
        <rect x="150" y="100" width="100" height="100" rx="8" className="fill-accent/10 stroke-accent/30" strokeWidth="2" />
        <rect x="170" y="120" width="60" height="60" rx="4" className="fill-accent/15 stroke-accent/20" strokeWidth="1" />
        <text x="183" y="156" className="fill-accent/40" fontSize="12" fontWeight="bold">IoT</text>
        {/* Pins */}
        <line x1="170" y1="100" x2="170" y2="75" className="stroke-accent/25" strokeWidth="2" />
        <line x1="200" y1="100" x2="200" y2="75" className="stroke-accent/25" strokeWidth="2" />
        <line x1="230" y1="100" x2="230" y2="75" className="stroke-accent/25" strokeWidth="2" />
        <line x1="170" y1="200" x2="170" y2="225" className="stroke-accent/25" strokeWidth="2" />
        <line x1="200" y1="200" x2="200" y2="225" className="stroke-accent/25" strokeWidth="2" />
        <line x1="230" y1="200" x2="230" y2="225" className="stroke-accent/25" strokeWidth="2" />
        <line x1="150" y1="130" x2="125" y2="130" className="stroke-accent/25" strokeWidth="2" />
        <line x1="150" y1="160" x2="125" y2="160" className="stroke-accent/25" strokeWidth="2" />
        <line x1="250" y1="130" x2="275" y2="130" className="stroke-accent/25" strokeWidth="2" />
        <line x1="250" y1="160" x2="275" y2="160" className="stroke-accent/25" strokeWidth="2" />
        {/* Connected devices */}
        <rect x="30" y="40" width="70" height="50" rx="8" className="fill-accent/8 stroke-accent/15" strokeWidth="1.5" />
        <text x="43" y="70" className="fill-accent/35" fontSize="9">Sensor</text>
        <line x1="100" y1="65" x2="150" y2="130" className="stroke-accent/15" strokeWidth="1" strokeDasharray="4 3" />
        <rect x="300" y="40" width="70" height="50" rx="8" className="fill-accent/8 stroke-accent/15" strokeWidth="1.5" />
        <text x="316" y="70" className="fill-accent/35" fontSize="9">Cloud</text>
        <line x1="300" y1="65" x2="250" y2="130" className="stroke-accent/15" strokeWidth="1" strokeDasharray="4 3" />
        <rect x="30" y="210" width="70" height="50" rx="8" className="fill-accent/8 stroke-accent/15" strokeWidth="1.5" />
        <text x="38" y="240" className="fill-accent/35" fontSize="9">Gateway</text>
        <line x1="100" y1="235" x2="150" y2="170" className="stroke-accent/15" strokeWidth="1" strokeDasharray="4 3" />
        <rect x="300" y="210" width="70" height="50" rx="8" className="fill-accent/8 stroke-accent/15" strokeWidth="1.5" />
        <text x="305" y="240" className="fill-accent/35" fontSize="9">Dashboard</text>
        <line x1="300" y1="235" x2="250" y2="170" className="stroke-accent/15" strokeWidth="1" strokeDasharray="4 3" />
      </svg>
    ),
    cloud: (
      // Cloud & DevOps - infrastructure
      <svg viewBox="0 0 400 300" fill="none" className={className}>
        {/* Cloud shape */}
        <path d="M120 140 C120 100 160 70 200 70 C230 70 260 85 270 110 C280 105 295 105 305 115 C320 115 340 130 340 150 C340 175 320 190 300 190 L120 190 C95 190 80 170 80 150 C80 135 95 120 120 120 Z" className="fill-accent/8 stroke-accent/20" strokeWidth="2" />
        {/* Server racks below */}
        <rect x="100" y="210" width="55" height="70" rx="6" className="fill-accent/10 stroke-accent/20" strokeWidth="1.5" />
        <rect x="110" y="222" width="35" height="6" rx="2" className="fill-accent/20" />
        <rect x="110" y="235" width="35" height="6" rx="2" className="fill-accent/15" />
        <rect x="110" y="248" width="35" height="6" rx="2" className="fill-accent/20" />
        <circle cx="140" cy="267" r="3" className="fill-green-400/50" />
        <rect x="172" y="210" width="55" height="70" rx="6" className="fill-accent/10 stroke-accent/20" strokeWidth="1.5" />
        <rect x="182" y="222" width="35" height="6" rx="2" className="fill-accent/15" />
        <rect x="182" y="235" width="35" height="6" rx="2" className="fill-accent/20" />
        <rect x="182" y="248" width="35" height="6" rx="2" className="fill-accent/15" />
        <circle cx="212" cy="267" r="3" className="fill-green-400/50" />
        <rect x="244" y="210" width="55" height="70" rx="6" className="fill-accent/10 stroke-accent/20" strokeWidth="1.5" />
        <rect x="254" y="222" width="35" height="6" rx="2" className="fill-accent/20" />
        <rect x="254" y="235" width="35" height="6" rx="2" className="fill-accent/15" />
        <rect x="254" y="248" width="35" height="6" rx="2" className="fill-accent/20" />
        <circle cx="284" cy="267" r="3" className="fill-green-400/50" />
        {/* Connection lines */}
        <line x1="127" y1="190" x2="127" y2="210" className="stroke-accent/20" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="200" y1="190" x2="200" y2="210" className="stroke-accent/20" strokeWidth="1.5" strokeDasharray="3 3" />
        <line x1="272" y1="190" x2="272" y2="210" className="stroke-accent/20" strokeWidth="1.5" strokeDasharray="3 3" />
        {/* Docker/K8s icons in cloud */}
        <rect x="160" y="115" width="30" height="25" rx="4" className="fill-accent/15 stroke-accent/25" strokeWidth="1" />
        <rect x="200" y="115" width="30" height="25" rx="4" className="fill-accent/15 stroke-accent/25" strokeWidth="1" />
        <rect x="180" y="145" width="30" height="25" rx="4" className="fill-accent/15 stroke-accent/25" strokeWidth="1" />
      </svg>
    ),
  };

  return illustrations[icon] || illustrations["globe"];
}
