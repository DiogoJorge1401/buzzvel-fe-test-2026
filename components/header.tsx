export function Header() {
  const navigation = [
    { label: "Courses", href: "#courses" },
    { label: "For Teams", href: "#contact" },
    { label: "Community", href: "#community" },
    { label: "About", href: "#about" },
  ] as const;

  return (
    <header className="border-b border-line bg-white">
      <div className="container-page flex min-h-18 items-center justify-between gap-5">
        <a className="text-2xl font-bold tracking-[-0.04em] no-underline" href="#top">
          luma.
        </a>

        <nav className="hidden items-center gap-7 text-sm font-medium md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a className="arrow-link px-3" href="#contact">
            Log in
          </a>
          <a className="button button-primary" href="#courses">
            Start learning
          </a>
        </div>

        <div className="relative md:hidden">
          <button
            aria-controls="mobile-navigation"
            className="flex min-h-11 items-center rounded-md border border-line px-4 font-semibold"
            popoverTarget="mobile-navigation"
            type="button"
          >
            Menu
          </button>
          <nav
            className="m-0 ml-auto mr-2 mt-18 w-52 rounded-lg border border-line bg-white p-2 shadow-none"
            id="mobile-navigation"
            aria-label="Mobile primary"
            popover="auto"
          >
            {[...navigation, { label: "Contact", href: "#contact" }].map((item) => (
              <a
                key={item.label}
                className="block rounded-md px-3 py-3 font-medium hover:bg-soft"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
            <a className="block rounded-md px-3 py-3 font-medium hover:bg-soft" href="#contact">
              Log in
            </a>
            <a className="button button-primary mt-1 w-full" href="#courses">
              Start learning
            </a>
          </nav>
        </div>
      </div>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (() => {
              const menu = document.getElementById("mobile-navigation");
              if (!(menu instanceof HTMLElement)) return;
              menu.addEventListener("click", (event) => {
                if (event.target instanceof HTMLAnchorElement && menu.matches(":popover-open")) {
                  menu.hidePopover();
                }
              });
            })();
          `,
        }}
      />
    </header>
  );
}
