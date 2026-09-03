"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { XCircle } from "lucide-react";
import { NAV_LINKS, FLAGSHIP_HOURS, SITE_NAME } from "@/lib/constants";

export interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Full-height dark drawer following the one mobile-nav pattern documented in
 * the Figma design system (the only spec available for this requirement —
 * see docs/design-analysis.md §8).
 */
export function MobileDrawer({ isOpen, onClose }: MobileDrawerProps) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeButtonRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Site menu">
      <button
        aria-label="Close menu"
        className="absolute inset-0 bg-ink/40"
        onClick={onClose}
      />
      <div className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col gap-8 bg-ink p-6 text-white">
        <div className="flex items-center justify-between">
          <span className="font-serif text-h4">{SITE_NAME}</span>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="flex size-11 items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <XCircle size={22} aria-hidden />
          </button>
        </div>

        <nav className="flex flex-col gap-5" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                aria-current={isActive ? "page" : undefined}
                className="font-serif text-h1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <hr className="border-white/20" />

        <div className="flex flex-col gap-3 text-body-sm">
          <span className="text-white/60">Atelier Hours</span>
          <span>{FLAGSHIP_HOURS}</span>
        </div>
      </div>
    </div>
  );
}
