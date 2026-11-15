export function ContactForm() {
  return (
    <div>
      <div
        className="soft-card hidden min-h-96 place-items-center p-8 text-center"
        id="contact-success"
        role="status"
        tabIndex={-1}
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-success">
            Message ready
          </p>
          <h3 className="mt-4 text-2xl font-bold">Thanks for reaching out.</h3>
          <p className="body-copy mt-4 max-w-[42ch]">
            This challenge uses a local form, so no personal data was sent. The interface is ready
            to connect to a real endpoint.
          </p>
          <button className="button button-secondary mt-7" id="contact-reset" type="button">
            Send another message
          </button>
        </div>
      </div>

      <form className="soft-card p-6 sm:p-8" id="contact-form">
        <h3 className="text-xl font-bold">Contact us</h3>
        <p className="mt-2 text-sm text-muted">Fill out the fields and we will get in touch.</p>

        <label className="mt-7 block text-sm font-semibold" htmlFor="full-name">
          Full name
        </label>
        <input
          className="mt-2 min-h-12 w-full rounded-md border border-line bg-soft px-4 focus:border-brand"
          id="full-name"
          name="fullName"
          placeholder="Your name"
          required
        />

        <label className="mt-5 block text-sm font-semibold" htmlFor="email">
          Email
        </label>
        <input
          className="mt-2 min-h-12 w-full rounded-md border border-line bg-soft px-4 focus:border-brand"
          id="email"
          name="email"
          placeholder="youremail@example.com"
          required
          type="email"
        />

        <label className="mt-5 block text-sm font-semibold" htmlFor="question">
          Your question
        </label>
        <textarea
          className="mt-2 min-h-32 w-full resize-y rounded-md border border-line bg-soft p-4 focus:border-brand"
          id="question"
          name="question"
          placeholder="Tell us how we can help..."
          required
        />

        <button className="button button-primary mt-6 w-full" type="submit">
          Send message
        </button>
      </form>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const form = document.getElementById("contact-form");
              const success = document.getElementById("contact-success");
              const reset = document.getElementById("contact-reset");
              if (!(form instanceof HTMLFormElement) || !(success instanceof HTMLElement) || !(reset instanceof HTMLButtonElement)) return;
              form.addEventListener("submit", (event) => {
                event.preventDefault();
                form.classList.add("hidden");
                success.classList.remove("hidden");
                success.classList.add("grid");
                success.focus();
              });
              reset.addEventListener("click", () => {
                success.classList.add("hidden");
                success.classList.remove("grid");
                form.classList.remove("hidden");
                form.reset();
                const firstField = form.elements.namedItem("fullName");
                if (firstField instanceof HTMLElement) firstField.focus();
              });
            })();
          `,
        }}
      />
    </div>
  );
}
