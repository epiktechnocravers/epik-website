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
      "Full-stack web applications from prototyping to production. We handle interface design, server programming, business logic, and post-launch support — an end-to-end engineering partner.",
    detail:
      "Built with React, Next.js, Vue.js, Angular, and Node.js. From dynamic SPAs to server-rendered sites, we pick the right tool for the job. We also specialise in WordPress, Shopify, and custom CMS solutions with the best plugin configurations for speed and security.",
    icon: "globe",
    tags: ["React", "Next.js", "Vue.js", "Angular", "Node.js", "WordPress", "Shopify", "PHP"],
  },
  {
    title: "Mobile Applications",
    description:
      "Native and cross-platform mobile apps for iOS and Android. Clean UX, reliable performance, and smooth App Store deployments.",
    detail:
      "From consumer apps to enterprise tools, we build for both platforms using React Native, Flutter, and native Swift/Kotlin when performance demands it.",
    icon: "phone",
    tags: ["React Native", "Flutter", "iOS", "Android", "Swift", "Kotlin"],
  },
  {
    title: "E-Commerce Solutions",
    description:
      "Online stores and marketplaces that convert. Multi-vendor platforms, payment integrations, inventory management, and logistics — all wired together.",
    detail:
      "We've built stores on Shopify, WooCommerce, and fully custom stacks. From D2C fashion brands to B2B marketplaces, our e-commerce solutions handle real-world scale.",
    icon: "layers",
    tags: ["Shopify", "WooCommerce", "Stripe", "Razorpay", "Multi-vendor", "D2C"],
  },
  {
    title: "SaaS Platforms",
    description:
      "Multi-tenant, subscription-based products built to scale. From auth to billing to dashboards — the full SaaS stack.",
    detail:
      "We architect SaaS products with proper tenant isolation, role-based access, usage metering, and billing integrations. Designed to go from 100 to 100k users without rearchitecting.",
    icon: "layers",
    tags: ["Multi-tenant", "Stripe", "Auth", "Dashboards", "APIs"],
  },
  {
    title: "AI & Automation",
    description:
      "AI agents, ML pipelines, and intelligent automation that actually solve business problems — not just demos.",
    detail:
      "We build LLM-powered agents, computer vision systems, recommendation engines, and workflow automation. From chatbots to real-time data processing, we turn AI hype into production systems.",
    icon: "brain",
    tags: ["LLMs", "Computer Vision", "ML Pipelines", "AI Agents", "Python", "Automation"],
  },
  {
    title: "IoT Solutions",
    description:
      "From smart logistics to asset tracking to utility monitoring — we build the full IoT stack from edge devices to cloud dashboards.",
    detail:
      "Hardware-software integration with Raspberry Pi, Arduino, edge computing, and real-time data pipelines. We transform businesses with connected devices and intelligent sensor networks.",
    icon: "cpu",
    tags: ["Raspberry Pi", "Arduino", "Edge Computing", "MQTT", "Sensors", "Smart Devices"],
  },
  {
    title: "Cloud & DevOps",
    description:
      "For speedy and agile functionality — infrastructure that scales, CI/CD that ships, and monitoring that sleeps so you don't have to.",
    detail:
      "AWS, GCP, Azure, Docker, Kubernetes — we design and manage cloud infrastructure with proper security, auto-scaling, and cost optimisation. Your deploy pipeline, done right.",
    icon: "cloud",
    tags: ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform"],
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
