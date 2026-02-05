import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import SectionHeading from "@/components/SectionHeading";
import { CASE_STUDIES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore our portfolio of web, mobile, SaaS, AI, and IoT projects. Real solutions built for real businesses.",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border py-24 sm:py-32 grid-bg">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll>
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-4">
              Case Studies
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Work that speaks
            </h1>
            <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
              A selection of projects across different industries and tech
              stacks. Each one built from scratch, shipped to production, and
              running in the real world.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((study, index) => (
              <AnimateOnScroll key={study.title} delay={index * 100}>
                <div className="group rounded-xl border border-border bg-surface overflow-hidden transition-all hover:border-border-light hover:shadow-lg hover:shadow-accent/5">
                  {/* Gradient thumbnail */}
                  <div
                    className={`aspect-video bg-gradient-to-br ${study.gradient} opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center`}
                  >
                    <div className="text-white/80 text-center px-6">
                      <p className="text-lg font-semibold">{study.title}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold">
                        {study.title}
                      </h3>
                      {"url" in study && (
                        <a
                          href={study.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent-dark transition-colors"
                          aria-label={`Visit ${study.title}`}
                        >
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                            <polyline points="15 3 21 3 21 9" />
                            <line x1="10" y1="14" x2="21" y2="3" />
                          </svg>
                        </a>
                      )}
                    </div>
                    {"industry" in study && (
                      <p className="text-xs text-accent/70 mb-2">{study.industry}</p>
                    )}
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {study.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 rounded-md bg-background text-text-muted border border-border"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial placeholder */}
      <section className="border-t border-border py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <SectionHeading
              label="Clients"
              title="Trusted by growing businesses"
              description="We work with startups, SMBs, and enterprises across healthcare, fintech, logistics, edtech, and more."
            />
          </AnimateOnScroll>

          <AnimateOnScroll delay={200}>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-40">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-12 rounded-lg bg-border/30 flex items-center justify-center"
                >
                  <span className="text-xs text-text-muted">Client Logo</span>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Let&apos;s build the next one together
            </h2>
            <p className="mt-4 text-text-secondary max-w-lg mx-auto">
              Got a product idea or a system that needs building? We&apos;d love
              to hear about it.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-accent-dark"
              >
                Start a Project
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
