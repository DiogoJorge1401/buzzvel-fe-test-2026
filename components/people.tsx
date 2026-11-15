import Image from "next/image";
import { Kicker } from "@/components/ui";
import { peopleImages } from "@/data/content";

export function People() {
  return (
    <section id="community" className="section-pad bg-soft">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Kicker>The people</Kicker>
          <h2 className="section-title mt-4">Meet international students &amp; teachers</h2>
          <p className="body-copy mt-6">
            Learn alongside curious people from different backgrounds. Our instructors bring
            practical experience, while every cohort adds new perspectives and questions.
          </p>
          <a className="button button-secondary mt-8" href="#contact">
            Explore teachers and students
          </a>
        </div>

        <div className="grid grid-cols-4 items-center gap-3" aria-label="Luma community collage">
          {peopleImages.map((image, index) => (
            <div
              className={`image-frame ${
                index === 0 || index === 5 ? "row-span-2 aspect-[3/5]" : "aspect-[4/5]"
              }`}
              key={image.src}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={470}
                height={325}
                unoptimized
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
