import Image from "next/image";
import { ArrowLink, Kicker } from "@/components/ui";
import { assetUrl } from "@/lib/asset-url";

export function FeaturedCourse() {
  return (
    <section id="featured-course" className="bg-brand text-white">
      <div className="container-page grid items-center gap-12 py-16 md:grid-cols-2 lg:py-20">
        <div className="relative">
          <span className="absolute -top-3 left-0 z-10 bg-sun px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
            Featured course
          </span>
          <div className="image-frame aspect-[7/5]">
            <Image
              src={assetUrl("/images/featured-course.webp")}
              alt="Product designers reviewing material samples at a worktable"
              width={700}
              height={500}
              unoptimized
              sizes="(max-width: 768px) 92vw, 45vw"
            />
          </div>
        </div>

        <div>
          <Kicker inverse>Most popular this month</Kicker>
          <h2 className="section-title mt-4 max-w-[13ch]">Designing products people understand.</h2>
          <p className="mt-5 max-w-[57ch] text-base leading-7 text-white">
            Learn how to turn complex workflows into simple, intentional product experiences through
            research, structure and thoughtful interaction design.
          </p>
          <p className="mt-6 text-sm">with Maya Chen · Senior Product Designer</p>
          <div className="mt-6 flex flex-wrap gap-2 text-sm">
            {["8 lessons", "2h 40min", "Intermediate"].map((item) => (
              <span className="rounded-md border border-white/55 px-3 py-2" key={item}>
                {item}
              </span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a className="button button-sun" href="#contact">
              View course
            </a>
            <ArrowLink href="#courses">Browse all courses</ArrowLink>
          </div>
        </div>
      </div>
    </section>
  );
}
