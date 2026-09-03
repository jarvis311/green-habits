"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";
import { Logo } from "./Logo";
import { MobileDrawer } from "./MobileDrawer";
import { IconButton } from "@/components/ui/IconButton";
import { Button } from "@/components/ui/Button";

/**
 * Solid navbar only — the Figma "Variant B" transparent hero-overlay bar is
 * not used on any approved page (see docs/design-analysis.md §8) and is
 * intentionally not implemented.
 */
export function Navigation() {
  const pathname = usePathname();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 flex h-[88px] items-center justify-between border-b border-border bg-cream px-4 md:px-10 lg:px-20">
      <Logo />

      <nav className="hidden md:flex items-center gap-8 text-body-sm" aria-label="Primary">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage rounded-sm",
                isActive ? "font-bold text-sage" : "font-medium text-ink hover:text-sage"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-3 md:gap-6">
        <IconButton
          icon={<Search size={18} aria-hidden />}
          aria-label="Search"
          className="hidden lg:inline-flex"
        />
        <IconButton icon={<ShoppingBag size={18} aria-hidden />} aria-label="View order" />
        <Button size="md" className="hidden md:inline-flex">
          Order Now
        </Button>
        <IconButton
          icon={<Menu size={22} aria-hidden />}
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
          className="md:hidden"
        />
      </div>

      <MobileDrawer isOpen={isDrawerOpen} onClose={() => setDrawerOpen(false)} />
    </header>
  );
}
