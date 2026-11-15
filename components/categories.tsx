import { ArrowLink, Kicker } from "@/components/ui";
import { categories } from "@/data/content";

export function Categories() {
  return (
    <section id="courses" className="section-pad bg-white">
      <div className="container-page">
        <Kicker>Find your next skill</Kicker>
        <h2 className="section-title mt-4">Learn something worth knowing.</h2>
        <p className="body-copy mt-5">
          Short, practical courses designed around skills you can put to work immediately.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article className="soft-card flex min-h-64 flex-col p-6" key={category.number}>
              <span className="w-fit rounded bg-brand-quiet px-2 py-1 text-xs font-bold text-brand">
                {category.number}
              </span>
              <h3 className="mt-6 text-xl font-bold">{category.title}</h3>
              <p className="mt-4 flex-1 text-sm leading-6 text-muted">{category.description}</p>
              <ArrowLink className="mt-6" href="#featured-course">
                Explore
              </ArrowLink>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
