import Link from "next/link";
import { Search } from "lucide-react";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { ErrorIllustration } from "@/components/feedback/ErrorIllustration";

export default function NotFound() {
  return (
    <Section background="cream" divider="none">
      <div className="mx-auto flex max-w-xl flex-col items-center gap-6 py-10 text-center">
        <ErrorIllustration />
        <span className="font-serif text-display text-sage">404</span>
        <h1 className="font-serif text-h1 text-ink">Looks Like This Dish Isn&rsquo;t on the Menu</h1>
        <p className="text-body text-muted">
          The page you&rsquo;re looking for might have been moved or doesn&rsquo;t exist. But our organic harvest
          menu definitely does. Let&rsquo;s find you some clean fuel instead.
        </p>

        <div className="flex h-11 w-full items-center gap-3 rounded border border-border bg-white px-4">
          <Search size={18} className="shrink-0 text-muted" aria-hidden />
          <span className="text-body-sm text-muted">Search dishes, drinks, story...</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/">
            <Button size="lg">Back to Homepage</Button>
          </Link>
          <Link href="/menu">
            <Button size="lg" variant="outline">
              Explore Our Menu
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="ghost">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </Section>
  );
}
