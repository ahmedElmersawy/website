"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems, site } from "@/content/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <header
      ref={menuRef}
      className="sticky top-0 z-50 border-b border-rule bg-paper/95 backdrop-blur-sm"
    >
      <a
        href="#main-content"
        className="fixed -top-full left-2 z-[100] rounded bg-gold px-3 py-2 text-sm font-medium text-paper focus:top-2"
      >
        Skip to content
      </a>
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-4 md:px-8">
        <Link
          href="/"
          className="whitespace-nowrap text-2xl font-semibold tracking-tight text-ink hover:no-underline"
        >
          {site.name}
        </Link>

        <ul className="hidden items-center gap-1 lg:flex" role="list">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "whitespace-nowrap rounded px-2.5 py-1.5 text-[17px] font-medium transition-colors",
                    active
                      ? "bg-pale font-semibold text-gold-bright"
                      : "text-ink/80 hover:bg-pale/60 hover:text-gold-bright",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded text-ink lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <ul
          id="mobile-menu"
          role="list"
          className="flex flex-col gap-1 border-t border-rule bg-paper px-6 py-4 lg:hidden"
        >
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block rounded px-3 py-2.5 text-base font-medium",
                    active ? "bg-pale text-gold-bright" : "text-ink/80 hover:text-gold-bright",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </header>
  );
}
