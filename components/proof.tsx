import Image from "next/image";

export function Proof() {
  return (
    <section className="section-pad bg-white" id="about">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <figure>
          <blockquote className="max-w-[34ch] text-2xl font-semibold leading-[1.45] tracking-[-0.025em] md:text-3xl">
            <span className="mb-4 block text-4xl text-brand" aria-hidden="true">
              ”
            </span>
            The lessons are short enough to fit into my week, but detailed enough that I actually
            leave with something I can use.
          </blockquote>
          <figcaption className="mt-7 flex items-center gap-3">
            <Image
              src="/images/alex-morgan.webp"
              alt="Alex Morgan"
              width={48}
              height={48}
              unoptimized
              className="size-12 rounded-full object-cover"
            />
            <span>
              <strong className="block">Alex Morgan</strong>
              <span className="text-sm text-muted">Product Manager</span>
            </span>
          </figcaption>
        </figure>

        <dl className="grid gap-7 border-l border-line pl-8 sm:grid-cols-3 lg:grid-cols-1">
          {[
            ["24K+", "active learners"],
            ["120+", "expert-led courses"],
            ["92%", "complete their first course"],
          ].map(([value, label]) => (
            <div key={value}>
              <dt className="text-sm text-muted">{label}</dt>
              <dd className="mt-1 text-5xl font-bold tracking-[-0.04em] text-brand tabular-nums">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
