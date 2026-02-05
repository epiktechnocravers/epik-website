import type { Metadata } from "next";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";

export const metadata: Metadata = {
  title: "About",
  description:
    "Epik Technocravers is a software engineering studio based in New Delhi, India. We build web, mobile, SaaS, AI, and IoT solutions.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-border py-24 sm:py-32 grid-bg">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll>
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-4">
              About Us
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight max-w-3xl">
              Engineers who give a damn
            </h1>
            <p className="mt-6 text-lg text-text-secondary max-w-2xl leading-relaxed">
              We&apos;re a software engineering studio based in New Delhi.
              We build things that work, and we take ownership of what we
              ship.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <AnimateOnScroll>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    Epik Technocravers started with a simple observation: most
                    software projects fail not because of bad ideas, but because
                    of bad execution. Teams that cut corners, over-promise,
                    under-deliver, and disappear when things get hard.
                  </p>
                  <p>
                    We decided to do it differently. Build a team of engineers
                    who actually care about the quality of their work. Who treat
                    your product like their own. Who pick up the phone when
                    something breaks at 2 AM.
                  </p>
                  <p>
                    Based in New Delhi, we work with startups and growing
                    businesses across India and globally. Our stack spans web,
                    mobile, SaaS, AI, and IoT — but our real skill is solving
                    hard problems with clean, maintainable code.
                  </p>
                </div>
              </div>
            </AnimateOnScroll>

            <AnimateOnScroll delay={200}>
              <div className="space-y-8">
                <div className="rounded-xl border border-border bg-surface p-6">
                  <h3 className="text-lg font-semibold mb-4">
                    What we believe
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Code should be readable by humans, not just compilers.",
                      "Architecture decisions matter more than framework choices.",
                      "Ship early, iterate fast, but never ship broken.",
                      "The best documentation is code that doesn't need it.",
                      "Every project deserves production-grade engineering.",
                    ].map((belief) => (
                      <li
                        key={belief}
                        className="flex items-start gap-3 text-sm text-text-secondary"
                      >
                        <span className="mt-1 text-accent">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        {belief}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <AnimateOnScroll>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <p className="text-sm font-medium text-accent tracking-wider uppercase mb-3">
                Our Values
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                How we operate
              </h2>
            </div>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Radical Honesty",
                description:
                  "If something can't be done in your timeline, we'll say so. If there's a better approach, we'll suggest it. No yes-men here.",
              },
              {
                title: "Ownership Mentality",
                description:
                  "We don't write code and walk away. We own the outcome. If it breaks, we fix it. If it needs improvement, we flag it.",
              },
              {
                title: "Continuous Learning",
                description:
                  "Technology moves fast. We stay sharp through constant learning, experimentation, and knowledge sharing within the team.",
              },
              {
                title: "Simplicity First",
                description:
                  "The best solution is usually the simplest one. We resist over-engineering and build what's needed, not what looks impressive.",
              },
              {
                title: "Transparent Communication",
                description:
                  "Weekly updates, accessible code repos, and a direct line to the engineers. No layers of management in between.",
              },
              {
                title: "Long-Term Thinking",
                description:
                  "We build for maintainability. Your next team should be able to pick up where we left off without a decoder ring.",
              },
            ].map((value, index) => (
              <AnimateOnScroll key={value.title} delay={index * 100}>
                <div className="rounded-xl border border-border bg-background p-6">
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-border py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "6+", label: "Years in Business" },
              { number: "30+", label: "Happy Clients" },
              { number: "99.9%", label: "Uptime SLA" },
            ].map((stat, index) => (
              <AnimateOnScroll key={stat.label} delay={index * 100}>
                <div>
                  <p className="text-3xl sm:text-4xl font-bold gradient-text">
                    {stat.number}
                  </p>
                  <p className="mt-2 text-sm text-text-secondary">
                    {stat.label}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border py-24 sm:py-32 bg-surface">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Want to work with us?
            </h2>
            <p className="mt-4 text-text-secondary max-w-lg mx-auto">
              We&apos;re always looking for interesting problems to solve. If
              you have one, let&apos;s talk.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-8 py-3 text-sm font-medium text-white transition-all hover:bg-accent-dark"
              >
                Get in Touch
              </Link>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}
