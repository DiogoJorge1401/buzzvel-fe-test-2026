import { Kicker } from "@/components/ui";
import { learningSteps } from "@/data/content";

const toneClass = {
  blue: "bg-brand-quiet text-brand",
  peach: "bg-step-peach text-step-peach-ink",
  yellow: "bg-butter text-step-yellow-ink",
} as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-pad bg-soft">
      <div className="container-page text-center">
        <Kicker>How Luma works</Kicker>
        <h2 className="section-title mx-auto mt-4 max-w-none">Less browsing. More learning.</h2>

        <div className="relative mt-14 grid gap-10 text-left md:grid-cols-3">
          <div
            className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-line md:block"
            aria-hidden="true"
          />
          {learningSteps.map((step) => (
            <article className="relative" key={step.title}>
              <span
                className={`relative z-10 grid size-14 place-items-center rounded-2xl ${toneClass[step.tone]}`}
                aria-hidden="true"
              >
                <span className="size-4 rounded-md bg-current" />
              </span>
              <p className="mt-7 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                {step.label}
              </p>
              <h3 className="mt-3 text-xl font-bold">{step.title}</h3>
              <p className="mt-4 text-sm leading-6 text-muted">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
