import { footerGroups } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-footer text-white" id="footer">
      <div className="container-page grid gap-12 py-14 md:grid-cols-[1.5fr_repeat(3,1fr)]">
        <div>
          <p className="text-2xl font-bold tracking-[-0.04em]">luma.</p>
          <p className="mt-4 max-w-48 text-sm leading-6 text-footer-muted">
            Practical learning for curious people.
          </p>
        </div>

        {footerGroups.map((group) => (
          <nav aria-label={group.title} key={group.title}>
            <h2 className="text-xs font-bold uppercase tracking-[0.13em] text-footer-muted">
              {group.title}
            </h2>
            <ul className="mt-5 grid gap-3 text-sm">
              {group.links.map((link) => (
                <li key={link.label}>
                  <a className="text-footer-muted hover:text-white" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="container-page border-t border-white/20 py-6 text-sm text-footer-muted">
        © 2026 Luma Learning
      </div>
    </footer>
  );
}
