"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/course", label: "Course" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-ink/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex min-w-0 items-center gap-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-terracotta text-xs font-semibold tracking-wide text-terracotta">
              SGT
            </span>
            <span className="truncate font-serif text-lg text-cream">
              singaporeguitarteacher
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-cream/80 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-terracotta"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 shrink-0 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-[1.5px] w-5 bg-cream transition ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-5 bg-cream transition ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {open && (
          <nav className="flex flex-col gap-1 border-t border-cream/10 px-6 py-4 text-sm text-cream/80 md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 transition hover:bg-cream/5 hover:text-terracotta"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
