import { AvatarStack } from "@/components/ui";

export function ClosingCta() {
  return (
    <section className="decorative-grid bg-butter">
      <div className="container-page flex flex-col items-center py-16 text-center md:py-20">
        <AvatarStack label="Learners choosing their next course" />
        <h2 className="section-title mt-7 max-w-none">What will you learn next?</h2>
        <p className="body-copy mt-4">Start with one course. Build from there.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a className="button button-primary" href="#courses">
            Explore all courses
          </a>
          <a className="button button-secondary" href="#contact">
            Join Luma
          </a>
        </div>
      </div>
    </section>
  );
}
