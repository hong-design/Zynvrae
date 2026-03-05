import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { primaryNavigation } from "@/lib/navigation";
import { siteConfig } from "@/lib/site";

const socialLinks = [
  { label: "X", href: siteConfig.links.x },
  { label: "GitHub", href: siteConfig.links.github },
  { label: "LinkedIn", href: siteConfig.links.linkedin }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-rule py-10">
      <Container className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-sm font-semibold tracking-[0.16em] text-text">ZYNVRAE</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
            Zynvrae 是平台型數位產品公司。我們專注把系統變成可持續營運的產品，並用指標驅動長期迭代。
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3 md:col-span-7 md:justify-items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-muted">Navigation</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-text">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-muted">Updates</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <Link href="/#get-updates" className="transition hover:text-text">
                  候補名單
                </Link>
              </li>
              <li>
                <Link href="/updates" className="transition hover:text-text">
                  產品更新
                </Link>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="transition hover:text-text">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.12em] text-muted">Social</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  {link.href === "#" ? (
                    <span className="cursor-not-allowed opacity-70">{link.label}（Soon）</span>
                  ) : (
                    <a href={link.href} target="_blank" rel="noreferrer" className="transition hover:text-text">
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      <Container className="mt-10 border-t border-border/70 pt-5">
        <p className="text-xs text-muted">© {year} Zynvrae. All rights reserved.</p>
      </Container>
    </footer>
  );
}
