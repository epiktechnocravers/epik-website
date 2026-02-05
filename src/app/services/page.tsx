import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import ServiceIcon from "@/components/ServiceIcon";
import { SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, mobile apps, SaaS platforms, AI automation, IoT solutions, and cloud DevOps. Full-stack engineering services from New Delhi.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border py-24 sm:py-32 grid-bg">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll>
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-4">
              Services
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              What we build
            </h1>
            <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
              Every service backed by battle-tested engineering practices. We
              pick the right tools for the job — not whatever&apos;s trending on
              Hacker News this week.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="space-y-20">
            {SERVICES.map((service, index) => (
              <AnimateOnScroll key={service.title}>
                <div
                  className={`flex flex-col lg:flex-row gap-12 items-start ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1">
                    <div className="inline-flex items-center justify-center rounded-lg bg-accent/10 p-3 text-accent mb-6">
                      <ServiceIcon icon={service.icon} className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm px-3 py-1.5 rounded-md bg-surface border border-border text-text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Visual placeholder */}
                  <div className="flex-1 w-full">
                    <div className="aspect-video rounded-xl bg-surface border border-border flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-accent/30 mb-2">
                          <ServiceIcon
                            icon={service.icon}
                            className="w-16 h-16 mx-auto"
                          />
                        </div>
                        <p className="text-sm text-text-muted">
                          {service.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="border-t border-border py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll>
            <SectionHeading
              label="Our Process"
              title="How we work"
              description="Straightforward process, no mystery. You know what's happening at every stage."
            />
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understand your problem, constraints, and goals. No 50-page requirement docs — a focused conversation.",
              },
              {
                step: "02",
                title: "Architecture",
                description:
                  "Design the system before writing code. Pick the right stack, plan for scale, identify risks early.",
              },
              {
                step: "03",
                title: "Build",
                description:
                  "Iterative development with regular demos. You see progress weekly, not after three months of silence.",
              },
              {
                step: "04",
                title: "Ship & Support",
                description:
                  "Production deployment, monitoring setup, and knowledge transfer. We don't disappear after launch.",
              },
            ].map((item, index) => (
              <AnimateOnScroll key={item.step} delay={index * 100}>
                <div className="relative">
                  <span className="text-4xl font-bold text-accent/20">
                    {item.step}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
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
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Have a project in mind?
            </h2>
            <p className="mt-4 text-text-secondary max-w-lg mx-auto">
              Let&apos;s talk about what you&apos;re building and how we can
              help make it happen.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-accent-dark"
              >
                Start a Conversation
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
