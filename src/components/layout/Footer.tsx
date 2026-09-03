"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { FOOTER_LINK_GROUPS, SITE_DESCRIPTION, SITE_NAME, SOCIAL_LINKS } from "@/lib/constants";
import { IconButton } from "@/components/ui/IconButton";
import { SocialIcon } from "@/components/ui/SocialIcon";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-ink px-4 py-12 text-white md:px-10 md:py-16 lg:px-20">
      <div className="mx-auto flex max-w-content flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
        <div className="flex max-w-sm flex-col gap-5">
          <span className="font-serif text-h1">{SITE_NAME}</span>
          <p className="text-body-sm text-sand/80">{SITE_DESCRIPTION}</p>
          <div className="flex gap-3">
            {SOCIAL_LINKS.map((social) => {
              return (
                <IconButton
                  key={social.label}
                  variant="circle"
                  icon={<SocialIcon name={social.icon} size={16} />}
                  aria-label={social.label}
                  onClick={() => window.open(social.href, "_blank", "noopener,noreferrer")}
                />
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:flex lg:gap-16">
          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.heading} className="flex flex-col gap-4">
              <span className="text-overline font-bold uppercase text-clay">{group.heading}</span>
              {group.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-body-sm text-sand/70 transition-colors hover:text-sand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex w-full flex-col gap-4 lg:w-[280px]">
          <span className="text-overline font-bold uppercase text-clay">Weekly Ritual</span>
          <p className="text-body-sm text-sand/70">
            Join our community for fresh recipes and seasonal updates.
          </p>
          <form
            className="flex h-11 items-center justify-between rounded bg-white px-3"
            onSubmit={(e) => {
              e.preventDefault();
              setEmail("");
            }}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-transparent text-body-sm text-ink placeholder:text-muted/70 focus:outline-none"
            />
            <button
              type="submit"
              aria-label="Subscribe"
              className="flex size-6 shrink-0 items-center justify-center text-ink transition-colors hover:text-sage focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sage"
            >
              <ArrowRight size={16} aria-hidden />
            </button>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-content flex-col-reverse items-center gap-4 border-t border-white/30 pt-6 text-caption uppercase text-white/50 md:mt-16 md:flex-row md:justify-between">
        <p>© 2024 Green Habit Cafe. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/" className="hover:text-white/80">
            Privacy Policy
          </Link>
          <Link href="/" className="hover:text-white/80">
            Terms of Atelier
          </Link>
        </div>
      </div>
    </footer>
  );
}
