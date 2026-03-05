import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { primaryNavigation } from "@/lib/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg py-16">
      <Container className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-sm font-semibold tracking-[0.18em] text-text">ZYNVRAE</p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
            平台型數位平台開發與長期產品合作。
          </p>
        </div>

        <div className="md:col-span-7 md:justify-self-end">
          <p className="text-xs uppercase tracking-[0.12em] text-muted">Links</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-10 gap-y-2 text-sm text-text">
            {primaryNavigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:opacity-70">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>

      <Container className="mt-10 border-t border-border pt-6 text-xs text-muted">
        <p>© {year} Zynvrae. All rights reserved.</p>
      </Container>
    </footer>
  );
}
