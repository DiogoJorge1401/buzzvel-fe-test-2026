import Image from "next/image";
import { AvatarStack, Kicker } from "@/components/ui";

export function Hero() {
  return (
    <section id="top" className="bg-soft">
      <div className="container-page grid items-center gap-12 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:py-24">
        <div>
          <Kicker>Learn at your own pace</Kicker>
          <h1 className="display-title mt-4">Build skills that actually move you forward.</h1>
          <p className="body-copy mt-6 max-w-[55ch]">
            Practical courses taught by people who do the work every day. Learn design, technology,
            business and more, one focused lesson at a time.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a className="button button-primary" href="#courses">
              Explore courses
            </a>
            <a className="button button-secondary" href="#how-it-works">
              See how it works
            </a>
          </div>
          <div className="mt-8">
            <AvatarStack />
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-xl pb-8 pr-5">
          <div className="absolute inset-8 -right-1 rounded-2xl bg-peach" aria-hidden="true" />
          <div className="image-frame relative aspect-[1.08/1]">
            <Image
              src="/images/hero-teacher.webp"
              alt="Teacher working on a laptop in a creative studio"
              fill
              fetchPriority="high"
              preload
              unoptimized
              sizes="(max-width: 1024px) 90vw, 46vw"
            />
          </div>
          <p className="absolute left-0 top-4 rounded-md bg-white px-4 py-3 text-sm font-semibold">
            <span className="text-brand">120+</span> expert-led courses
          </p>
          <p className="absolute bottom-0 right-0 rounded-md bg-white px-4 py-3 text-sm font-semibold">
            <span className="text-[#e8b216]" aria-label="five stars">
              ★★★★★
            </span>{" "}
            4.9 avg rating
          </p>
        </div>
      </div>
    </section>
  );
}
