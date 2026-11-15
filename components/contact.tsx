import { ContactForm } from "@/components/contact-form";
import { Kicker } from "@/components/ui";

export function Contact() {
  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-page grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Kicker>Contact</Kicker>
          <h2 className="section-title mt-4">Get in touch</h2>
          <p className="body-copy mt-6 max-w-[55ch]">
            Have a question? We are here to help. Whether you are looking for the right course,
            learning with your team or interested in teaching with Luma, we would love to hear from
            you.
          </p>

          <dl className="mt-9 grid gap-3">
            <div className="rounded-lg bg-soft p-5">
              <dt className="text-sm font-semibold">Email</dt>
              <dd className="mt-1">
                <a className="text-sm text-brand" href="mailto:contact@luma.com">
                  contact@luma.com
                </a>
              </dd>
            </div>
            <div className="rounded-lg bg-soft p-5">
              <dt className="text-sm font-semibold">Response time</dt>
              <dd className="mt-1 text-sm text-muted">Up to 24 hours on business days</dd>
            </div>
          </dl>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
