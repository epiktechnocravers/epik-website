import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import HeroCarousel from "@/components/HeroCarousel";
import { SERVICES } from "@/lib/constants";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden grid-bg">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-32 sm:py-44">
          <AnimateOnScroll>
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-6">
              Software Engineering Studio
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={100}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl">
              We build systems
              <br />
              <span className="gradient-text">that work.</span>
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="mt-6 text-lg sm:text-xl text-text-secondary max-w-2xl leading-relaxed">
              Web, mobile, SaaS, AI, and IoT solutions — engineered for scale,
              built for production. No fluff, just software that delivers.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
              >
                Start a Project
                <svg
                  className="ml-2 w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 text-sm font-medium text-text-secondary transition-all hover:border-border-light hover:text-text-primary"
              >
                View Our Work
              </Link>
            </div>
          </AnimateOnScroll>
        </div>

        {/* Gradient orb decorations */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />
      </section>

      {/* Hero Banners - Project Showcase */}
      <section className="border-t border-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="text-center mb-10">
              <p className="text-sm font-medium text-accent tracking-wider uppercase mb-2">
                Featured Projects
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Built by us, used in the real world
              </h2>
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <HeroCarousel />
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Overview */}
      <section className="border-t border-border py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll>
            <SectionHeading
              label="What We Do"
              title="Full-spectrum engineering"
              description="From frontend to firmware, we cover the full stack. Every project gets the same level of care — clean architecture, tested code, reliable deployments."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, index) => (
              <AnimateOnScroll key={service.title} delay={index * 100}>
                <div className="group rounded-xl border border-border bg-surface p-6 transition-all hover:border-border-light hover:bg-surface-light">
                  <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-accent/10 p-2.5 text-accent">
                    <ServiceIcon icon={service.icon} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-md bg-background text-text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="border-t border-border py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll>
            <SectionHeading
              label="Why Us"
              title="Engineering, not guesswork"
              description="We don't outsource your work or run a body shop. Every project is handled by our core team with direct communication, no middlemen."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Ship Fast",
                description:
                  "Rapid iteration with production-grade quality. We don't sacrifice reliability for speed.",
              },
              {
                number: "02",
                title: "Scale Smart",
                description:
                  "Architecture designed for growth. From 100 users to 100k without rearchitecting.",
              },
              {
                number: "03",
                title: "Own Everything",
                description:
                  "You get the code, the docs, and the deployment. No vendor lock-in, no hidden dependencies.",
              },
              {
                number: "04",
                title: "Direct Access",
                description:
                  "Talk to the engineers building your product. No project managers playing telephone.",
              },
            ].map((item, index) => (
              <AnimateOnScroll key={item.number} delay={index * 100}>
                <div>
                  <span className="text-3xl font-bold text-accent/30">
                    {item.number}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Ready to build
              <span className="gradient-text"> something real</span>?
            </h2>
            <p className="mt-6 text-lg text-text-secondary max-w-xl mx-auto">
              Tell us what you need. We&apos;ll tell you honestly how we can
              help — or if someone else is a better fit.
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-4 text-base font-medium text-white transition-all hover:bg-accent-dark hover:shadow-lg hover:shadow-accent/20"
              >
                Get in Touch
                <svg
                  className="ml-2 w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
