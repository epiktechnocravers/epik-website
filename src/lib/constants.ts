export const SITE_NAME = "Epik Technocravers";
export const SITE_URL = "https://technocravers.com";
export const SITE_DESCRIPTION =
  "We build software systems that work. Web, mobile, SaaS, AI, and IoT solutions — engineered for scale.";
export const CONTACT_EMAIL = "sunny@epiktechnocravers.com";
export const WHATSAPP_NUMBER = "919910456981";
export const PHONE_NUMBER = "+91 99104 56981";
export const LOCATION = "G-8, Milap Nagar, Uttam Nagar, New Delhi - 110059";

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    title: "Web Development",
    description:
      "Full-stack applications built with React, Next.js, Vue, and Node.js. Fast, accessible, and production-ready.",
    icon: "globe",
    tags: ["React", "Next.js", "Vue", "Node.js", "PostgreSQL"],
  },
  {
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps for iOS and Android. Clean UX, reliable performance.",
    icon: "phone",
    tags: ["React Native", "iOS", "Android", "Flutter"],
  },
  {
    title: "SaaS Platforms",
    description:
      "Multi-tenant, subscription-based products built to scale. From auth to billing to dashboards.",
    icon: "layers",
    tags: ["Multi-tenant", "Stripe", "Auth", "Dashboards"],
  },
  {
    title: "AI & Automation",
    description:
      "AI agents, ML pipelines, and intelligent automation that actually solve problems.",
    icon: "brain",
    tags: ["LLMs", "ML Pipelines", "Agents", "Automation"],
  },
  {
    title: "IoT Solutions",
    description:
      "Hardware-software integration with Raspberry Pi, edge computing, and real-time data pipelines.",
    icon: "cpu",
    tags: ["Raspberry Pi", "Edge Computing", "MQTT", "Sensors"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Infrastructure that doesn't wake you up at 3 AM. AWS, GCP, CI/CD, and monitoring done right.",
    icon: "cloud",
    tags: ["AWS", "GCP", "Docker", "Kubernetes", "CI/CD"],
  },
] as const;

export const CASE_STUDIES = [
  {
    title: "Bachon Ka Adda",
    description:
      "Indian online toy store offering safe, certified kids' toys with COD, free delivery, and 30-day returns.",
    tags: ["Shopify", "E-commerce", "Mobile-responsive"],
    gradient: "from-pink-500 to-rose-600",
    url: "https://bachonkaadda.in",
    industry: "E-commerce / Kids & Toys",
  },
  {
    title: "Lahori Zeera",
    description:
      "Desi fizzy beverage brand offering chatpata flavoured drinks — Zeera, Shikanji, and Nimboo. \"Desi Hi Changa.\"",
    tags: ["Shopify", "Brand Website", "HTML5 Video"],
    gradient: "from-amber-500 to-yellow-600",
    url: "https://lahorizeera.com",
    industry: "FMCG / Beverages",
  },
  {
    title: "Swatti Kapoor",
    description:
      "Premium Indian fashion label offering designer kurtas, dresses, and culturally-inspired collections.",
    tags: ["Shopify", "E-commerce", "Fashion D2C"],
    gradient: "from-violet-500 to-fuchsia-600",
    url: "https://swattikapoor.com",
    industry: "Fashion / Luxury Apparel",
  },
  {
    title: "Anjeer",
    description:
      "Restaurant brand website with a modern, minimal SPA design for a premium dining experience.",
    tags: ["Custom JS", "SPA", "Brand Website"],
    gradient: "from-emerald-500 to-teal-600",
    url: "https://anjeer.restaurant",
    industry: "Food & Beverage",
  },
  {
    title: "Sparrow",
    description:
      "Art & design initiative by Prasun Mazumdar Design — a collaborative platform bringing together artists to create unique art pieces.",
    tags: ["Custom HTML/CSS", "Portfolio", "Branding"],
    gradient: "from-sky-500 to-blue-600",
    url: "https://thesparrow.in",
    industry: "Art & Design",
  },
  {
    title: "Rainbow Bazaar",
    description:
      "LGBTQ+ empowered marketplace connecting queer sellers with corporate buyers, hosting Pride Month exhibitions.",
    tags: ["WordPress", "WooCommerce", "Marketplace"],
    gradient: "from-red-500 via-yellow-500 to-green-500",
    url: "https://rainbowbazaar.shop",
    industry: "Social Enterprise / Marketplace",
  },
  {
    title: "Rocketeers",
    description:
      "Online store selling model rocketry kits and components for hobbyists and STEM education.",
    tags: ["WordPress", "WooCommerce", "E-commerce"],
    gradient: "from-orange-500 to-red-600",
    url: "https://rocketeers.in",
    industry: "Hobby & STEM Education",
  },
  {
    title: "Augmentum Diagnostics",
    description:
      "NABL & ILAC accredited diagnostic lab in Delhi offering health checkups, blood tests, and free home sample collection.",
    tags: ["WordPress", "Healthcare", "SEO-optimized"],
    gradient: "from-indigo-500 to-purple-600",
    url: "https://augmentumdiagnostics.com",
    industry: "Healthcare / Diagnostics",
  },
  {
    title: "SportsTMS",
    description:
      "Sports tournament management system for organizing, scheduling, and managing tournaments end-to-end.",
    tags: ["SaaS", "Sports Tech", "Event Scheduling"],
    gradient: "from-green-500 to-emerald-600",
    url: "https://sportstms.in",
    industry: "Sports / Event Management",
  },
  {
    title: "Expedify",
    description:
      "AI-powered CRM platform that reimagines customer relationship management with intelligent automation.",
    tags: ["AI", "CRM", "SaaS", "Automation"],
    gradient: "from-cyan-500 to-blue-600",
    url: "https://www.expedify.ai",
    industry: "SaaS / Business Software",
  },
  {
    title: "Konnifel",
    description:
      "Platform connecting students with research internship opportunities under university professors and researchers worldwide.",
    tags: ["EdTech", "Marketplace", "Higher Education"],
    gradient: "from-teal-500 to-cyan-600",
    url: "https://konnifel.com",
    industry: "EdTech / Research",
  },
  {
    title: "BeeFYN",
    description:
      "Network platform connecting phlebotomists with diagnostic labs for affordable, hassle-free blood sample collection.",
    tags: ["HealthTech", "Marketplace", "Logistics"],
    gradient: "from-yellow-500 to-orange-600",
    url: "https://beefyn.in",
    industry: "HealthTech / Diagnostics",
  },
  {
    title: "BAF Consultants",
    description:
      "India's leading dedicated family business consulting firm — guiding families through growth, transitions, and harmony across generations.",
    tags: ["Corporate Website", "Consulting", "Brand"],
    gradient: "from-slate-500 to-zinc-700",
    url: "https://www.bafconsultants.com",
    industry: "Business Consulting",
  },
] as const;
