import { Categories } from "@/components/categories";
import { ClosingCta } from "@/components/closing-cta";
import { Contact } from "@/components/contact";
import { FeaturedCourse } from "@/components/featured-course";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { People } from "@/components/people";
import { Proof } from "@/components/proof";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedCourse />
        <HowItWorks />
        <Proof />
        <People />
        <Contact />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
